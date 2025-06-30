import { useAppointmentsContext, useUIContext } from '../contexts/index.jsx';

/**
 * Специализированный хук для работы с записями пациента
 * Расширяет AppointmentsContext дополнительной бизнес-логикой
 */
export function useAppointments() {
  const appointments = useAppointmentsContext();
  const ui = useUIContext();

  // Безопасное удаление записи с подтверждением
  const safeRemoveAppointment = async (appointmentId, showConfirmation = true) => {
    const appointment = appointments.getters.getAppointmentById(appointmentId);

    if (!appointment) {
      ui.actions.showError('Запись не найдена');
      return false;
    }

    if (showConfirmation) {
      // В реальном приложении здесь должен быть модальный диалог
      const confirmed = window.confirm(`Отменить запись в ${appointment.clinic?.name}?`);
      if (!confirmed) {
        return false;
      }
    }

    try {
      appointments.actions.removeAppointment(appointmentId);
      ui.actions.showSuccess('Запись отменена');
      return true;
    } catch (error) {
      ui.actions.showError('Ошибка при отмене записи');
      console.error('Remove appointment error:', error);
      return false;
    }
  };

  // Перенос записи
  const rescheduleAppointment = async (appointmentId, newDate, newTime) => {
    const appointment = appointments.getters.getAppointmentById(appointmentId);

    if (!appointment) {
      ui.actions.showError('Запись не найдена');
      return false;
    }

    try {
      appointments.actions.rescheduleAppointment(appointmentId, newDate, newTime);
      ui.actions.showSuccess('Запись перенесена');
      return true;
    } catch (error) {
      ui.actions.showError('Ошибка при переносе записи');
      console.error('Reschedule appointment error:', error);
      return false;
    }
  };

  // Получение записей с дополнительной обработкой
  const getAppointmentsWithStatus = () => {
    const now = new Date();

    return appointments.appointments.map(apt => {
      const appointmentDate = new Date(`${apt.date} ${apt.time}`);
      const isToday = appointmentDate.toDateString() === now.toDateString();
      const isPast = appointmentDate < now;
      const isUpcoming = appointmentDate > now;

      // Статус записи
      let displayStatus = apt.status;
      if (apt.status === 'confirmed') {
        if (isPast) {
          displayStatus = 'completed';
        } else if (isToday) {
          displayStatus = 'today';
        } else if (isUpcoming) {
          displayStatus = 'upcoming';
        }
      }

      // Время до записи
      let timeUntil = null;
      if (isUpcoming) {
        const timeDiff = appointmentDate.getTime() - now.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff === 0) {
          const hoursDiff = Math.ceil(timeDiff / (1000 * 60 * 60));
          timeUntil = `через ${hoursDiff} ч`;
        } else if (daysDiff === 1) {
          timeUntil = 'завтра';
        } else if (daysDiff <= 7) {
          timeUntil = `через ${daysDiff} дн.`;
        } else {
          timeUntil = `через ${Math.ceil(daysDiff / 7)} нед.`;
        }
      }

      return {
        ...apt,
        displayStatus,
        isToday,
        isPast,
        isUpcoming,
        timeUntil,
        canCancel: isUpcoming && apt.status !== 'cancelled',
        canReschedule: isUpcoming && apt.status !== 'cancelled',
      };
    });
  };

  // Группировка записей по статусу
  const getGroupedAppointments = () => {
    const appointmentsWithStatus = getAppointmentsWithStatus();

    return {
      today: appointmentsWithStatus.filter(apt => apt.isToday && apt.status !== 'cancelled'),
      upcoming: appointmentsWithStatus.filter(
        apt => apt.isUpcoming && !apt.isToday && apt.status !== 'cancelled',
      ),
      past: appointmentsWithStatus.filter(apt => apt.isPast),
      cancelled: appointmentsWithStatus.filter(apt => apt.status === 'cancelled'),
    };
  };

  // Получение следующей записи
  const getNextAppointment = () => {
    const upcoming = appointments.getters.getUpcomingAppointments();
    return upcoming.length > 0 ? upcoming[0] : null;
  };

  // Проверка конфликтов времени
  const hasTimeConflict = (date, time, excludeId = null) => {
    return appointments.appointments.some(apt => {
      if (excludeId && apt.id === excludeId) {
        return false;
      }
      if (apt.status === 'cancelled') {
        return false;
      }

      return apt.date === date && apt.time === time;
    });
  };

  // Статистика записей
  const getAppointmentsStats = () => {
    const grouped = getGroupedAppointments();
    const total = appointments.appointments.length;

    return {
      total,
      today: grouped.today.length,
      upcoming: grouped.upcoming.length,
      past: grouped.past.length,
      cancelled: grouped.cancelled.length,
      completion_rate: total > 0 ? Math.round((grouped.past.length / total) * 100) : 0,
      cancellation_rate: total > 0 ? Math.round((grouped.cancelled.length / total) * 100) : 0,
    };
  };

  // Поиск записей
  const searchAppointments = query => {
    if (!query) {
      return appointments.appointments;
    }

    const lowercaseQuery = query.toLowerCase();

    return appointments.appointments.filter(
      apt =>
        apt.clinic?.name?.toLowerCase().includes(lowercaseQuery) ||
        apt.specialist?.name?.toLowerCase().includes(lowercaseQuery) ||
        apt.services?.some(service => service.name?.toLowerCase().includes(lowercaseQuery)),
    );
  };

  // Экспорт записей (для бэкапа)
  const exportAppointments = () => {
    const data = {
      appointments: appointments.appointments,
      exportDate: new Date().toISOString(),
      stats: getAppointmentsStats(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `appointments-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    ui.actions.showSuccess('Записи экспортированы');
  };

  return {
    // Базовые методы из контекста
    ...appointments,

    // Расширенные методы
    safeRemoveAppointment,
    rescheduleAppointment,
    getAppointmentsWithStatus,
    getGroupedAppointments,
    getNextAppointment,
    hasTimeConflict,
    getAppointmentsStats,
    searchAppointments,
    exportAppointments,

    // Удобные геттеры
    nextAppointment: getNextAppointment(),
    groupedAppointments: getGroupedAppointments(),
    stats: getAppointmentsStats(),

    // Состояние загрузки
    isLoading: appointments.isLoadingAppointments,
  };
}
