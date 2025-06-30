import {
  useBookingContext,
  useUserContext,
  useAppointmentsContext,
  useUIContext,
} from '../contexts/index.jsx';

/**
 * Специализированный хук для управления процессом бронирования
 * Объединяет логику из BookingContext, UserContext и AppointmentsContext
 */
export function useBookingFlow() {
  const booking = useBookingContext();
  const user = useUserContext();
  const appointments = useAppointmentsContext();
  const ui = useUIContext();

  // Проверка готовности к бронированию
  const canProceedToBooking = () => {
    return user.getters.canBookAppointment() && booking.getters.isBookingComplete();
  };

  // Создание записи из данных бронирования
  const createAppointmentFromBooking = () => {
    const bookingData = booking.getters.getBookingData();
    const patientData = user.patientInfo;

    return {
      id: Date.now().toString(),
      clinic: bookingData.clinic,
      services: bookingData.services,
      specialist: bookingData.specialist,
      date: bookingData.date,
      time: bookingData.time,
      patient: patientData,
      totalPrice: bookingData.totalPrice,
      estimatedDuration: bookingData.estimatedDuration,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };
  };

  // Завершение процесса бронирования
  const completeBooking = async () => {
    if (!canProceedToBooking()) {
      ui.actions.showError('Не все данные для записи заполнены');
      return false;
    }

    try {
      ui.actions.setLoading(true);

      // Создаем запись
      const appointment = createAppointmentFromBooking();

      // Добавляем в список записей
      appointments.actions.addAppointment(appointment);

      // Устанавливаем как активную запись
      appointments.actions.setActiveAppointment(appointment);

      // Сохраняем результат бронирования
      booking.actions.setBookingResult({
        success: true,
        appointmentId: appointment.id,
        message: 'Запись успешно создана',
      });

      ui.actions.showSuccess('Запись успешно создана!');
      return true;
    } catch (error) {
      ui.actions.showError('Ошибка при создании записи');
      console.error('Booking completion error:', error);
      return false;
    } finally {
      ui.actions.setLoading(false);
    }
  };

  // Отмена процесса бронирования
  const cancelBooking = () => {
    booking.actions.resetBookingFlow();
    ui.actions.showInfo('Бронирование отменено');
  };

  // Перезапуск процесса бронирования
  const restartBooking = () => {
    booking.actions.resetBookingFlow();
    appointments.actions.clearActiveAppointment();
  };

  // Быстрое бронирование (для клиник с короной)
  const quickBooking = async (clinic, doctor, slot) => {
    try {
      ui.actions.setLoading(true);

      // Устанавливаем данные для быстрого бронирования
      booking.actions.selectClinic(clinic);
      booking.actions.selectServices([
        {
          id: 'consultation',
          name: 'Консультация врача',
          price: doctor.price || 1500,
          duration: 30,
        },
      ]);
      booking.actions.selectSpecialist(doctor);
      booking.actions.selectDateTime(slot.date, slot.time);

      // Завершаем бронирование
      const success = await completeBooking();

      if (success) {
        booking.actions.setCurrentStep('success');
      }

      return success;
    } catch (error) {
      ui.actions.showError('Ошибка быстрого бронирования');
      console.error('Quick booking error:', error);
      return false;
    } finally {
      ui.actions.setLoading(false);
    }
  };

  // Валидация шага бронирования
  const validateCurrentStep = () => {
    const step = booking.currentStep;

    switch (step) {
      case 'services':
        return booking.selectedClinic !== null;
      case 'specialist':
        return booking.selectedServices.length > 0;
      case 'datetime':
        return booking.selectedSpecialist !== null;
      case 'confirm':
        return booking.selectedDate && booking.selectedTime;
      default:
        return true;
    }
  };

  // Переход к следующему шагу с валидацией
  const proceedToNextStep = () => {
    if (!validateCurrentStep()) {
      ui.actions.showWarning('Заполните все обязательные поля');
      return false;
    }

    const progress = booking.getters.getBookingProgress();
    if (progress.canGoForward) {
      const nextStepIndex = progress.currentIndex + 1;
      const steps = ['search', 'services', 'specialist', 'datetime', 'confirm', 'success'];
      booking.actions.setCurrentStep(steps[nextStepIndex]);
      return true;
    }

    return false;
  };

  // Получение сводки бронирования
  const getBookingSummary = () => {
    const bookingData = booking.getters.getBookingData();
    const patientData = user.patientInfo;
    const progress = booking.getters.getBookingProgress();

    return {
      ...bookingData,
      patient: patientData,
      progress,
      canProceed: canProceedToBooking(),
      isValid: validateCurrentStep(),
      summary: {
        clinicName: bookingData.clinic?.name,
        servicesCount: bookingData.services.length,
        specialistName: bookingData.specialist?.name,
        appointmentDateTime:
          bookingData.date && bookingData.time ? `${bookingData.date} в ${bookingData.time}` : null,
        formattedPrice: booking.getters.getFormattedPrice(),
        formattedDuration: booking.getters.getFormattedDuration(),
      },
    };
  };

  return {
    // Состояние
    ...booking,

    // Методы
    completeBooking,
    cancelBooking,
    restartBooking,
    quickBooking,
    proceedToNextStep,

    // Валидация
    canProceedToBooking,
    validateCurrentStep,

    // Утилиты
    getBookingSummary,
    createAppointmentFromBooking,

    // Состояние загрузки
    isLoading: ui.isLoading,

    // Короткие алиасы для удобства
    isComplete: canProceedToBooking(),
    summary: getBookingSummary(),
  };
}
