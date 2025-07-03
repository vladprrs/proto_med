import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

// Новый стиль в духе QuickBookingSection
const AppointmentCardContainer = styled.div`
  display: flex;
  padding: 0px 0px 8px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  border-radius: 12px;
  background: #fff;
  margin-bottom: 12px;

  &:hover {
    box-shadow:
      0px 0px 0px 0.5px rgba(0, 0, 0, 0.04),
      0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  }
`;

const AppointmentContent = styled.div`
  display: flex;
  padding: 16px 16px 12px 0px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: rgba(0, 0, 0, 0);
  box-shadow: 0px 0.5px 0px 0px rgba(137, 137, 137, 0.2) inset;
  position: relative;
  cursor: pointer;
`;

const AppointmentMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`;

const AppointmentTitle = styled.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-bottom: 8px;
`;

const ClinicInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  margin-bottom: 8px;
`;

const ClinicName = styled.div`
  color: #141414;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
`;

const AppointmentDetails = styled.div`
  color: rgba(20, 20, 20, 0.7);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const SpecialistInfo = styled.div`
  color: rgba(20, 20, 20, 0.5);
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.234px;
`;

const TimeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const TimeLabel = styled.div`
  color: rgba(20, 20, 20, 0.7);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const TimeSlot = styled.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${props => (props.status === 'cancelled' ? '#FF4444' : '#1BA136')};
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const AppointmentActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
`;

const ActionButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background: ${props => (props.variant === 'cancel' ? '#FFE6E6' : '#F8F8F8')};
  color: ${props => (props.variant === 'cancel' ? '#FF4444' : '#898989')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  &:hover {
    background: ${props => (props.variant === 'cancel' ? '#FFCCCC' : '#EEEEEE')};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ChevronIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.5 5l5 5-5 5' stroke='%23898989' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
`;

const ConfirmDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ConfirmContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin: 16px;
  max-width: 300px;
  width: 100%;
`;

const ConfirmTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #141414;
`;

const ConfirmText = styled.p`
  margin: 0 0 24px 0;
  font-size: 15px;
  color: #898989;
  line-height: 1.4;
`;

const ConfirmButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const ConfirmButton = styled.button`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  cursor: pointer;

  ${props =>
    props.variant === 'primary'
      ? `
    background: #FF4444;
    color: white;
    
    &:hover {
      background: #FF2222;
    }
  `
      : `
    background: #F8F8F8;
    color: #141414;
    
    &:hover {
      background: #EEEEEE;
    }
  `}
`;

function AppointmentCard({ appointment, onClick }) {
  const navigate = useNavigate();
  const { appointments: appointmentsState, ui } = useAppContext();
  const { actions } = appointmentsState;
  const { removeAppointment, updateAppointment } = actions;
  const { actions: uiActions } = ui;
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const formatDateTime = dateTime => {
    if (!dateTime) {
      return '14 июня, вт, 10:30';
    }

    const date = new Date(dateTime.date);
    const dayNames = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const monthNames = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];

    const dayName = dayNames[date.getDay()];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${day} ${month}, ${dayName}, ${dateTime.time}`;
  };

  const handleClick = e => {
    // Если клик не по кнопкам действий
    if (!e.target.closest('button')) {
      console.log('🔸 AppointmentCard: Card clicked, appointment:', appointment);
      if (onClick) {
        console.log('🔸 AppointmentCard: Using onClick prop');
        onClick();
      } else {
        console.log('🔸 AppointmentCard: Setting active appointment and navigating to /appointment');
        // Устанавливаем эту запись как активную и переходим к просмотру
        actions.setActiveAppointment(appointment);
        navigate('/appointment');
      }
    } else {
      console.log('🔸 AppointmentCard: Click on button, ignoring');
    }
  };

  const handleCancelClick = e => {
    e.stopPropagation();
    setShowConfirmDialog(true);
  };

  const handleConfirmCancel = () => {
    console.log('🔸 AppointmentCard: Cancelling appointment:', appointment.id);
    // Обновляем статус записи на "отменена"
    updateAppointment({
      ...appointment,
      status: 'cancelled',
    });

    // Показываем уведомление
    uiActions.showSuccess('Запись отменена');

    setShowConfirmDialog(false);
  };

  const handleCancelDialog = () => {
    setShowConfirmDialog(false);
  };

  return (
    <>
      <AppointmentCardContainer>
        <AppointmentContent onClick={handleClick}>
          <AppointmentMainContent>
            <AppointmentTitle>
              {appointment.status === 'cancelled' ? 'Отмененная запись' : 'Ваша запись'}
            </AppointmentTitle>

            <ClinicInfo>
              <ClinicName>{appointment.clinic?.name || 'МедЦентр «Здоровье»'}</ClinicName>
              {appointment.specialist && (
                <AppointmentDetails>{appointment.specialist.name}</AppointmentDetails>
              )}
              {appointment.specialist?.specialty && (
                <SpecialistInfo>{appointment.specialist.specialty}</SpecialistInfo>
              )}
            </ClinicInfo>

            <TimeSection>
              <TimeLabel>Дата и время</TimeLabel>
              <TimeSlot status={appointment.status}>
                {formatDateTime(appointment.dateTime)}
              </TimeSlot>
            </TimeSection>
          </AppointmentMainContent>

          <AppointmentActions>
            {appointment.status === 'active' && (
              <>
                <ActionButton title="Добавить в календарь" onClick={() => uiActions.showSuccess('Добавлено в календарь')}>
                  📅
                </ActionButton>
                <ActionButton title="Построить маршрут" onClick={() => uiActions.showSuccess('Маршрут построен')}>
                  🗺️
                </ActionButton>
                <ActionButton title="Отменить запись" variant="cancel" onClick={handleCancelClick}>
                  ✕
                </ActionButton>
              </>
            )}
            <ChevronIcon />
          </AppointmentActions>
        </AppointmentContent>
      </AppointmentCardContainer>

      {showConfirmDialog && (
        <ConfirmDialog onClick={handleCancelDialog}>
          <ConfirmContent onClick={e => e.stopPropagation()}>
            <ConfirmTitle>Отменить запись?</ConfirmTitle>
            <ConfirmText>
              Вы действительно хотите отменить запись в {appointment.clinic?.name || 'клинику'} на{' '}
              {formatDateTime(appointment.dateTime)}?
            </ConfirmText>
            <ConfirmButtons>
              <ConfirmButton onClick={handleCancelDialog}>Оставить</ConfirmButton>
              <ConfirmButton variant="primary" onClick={handleConfirmCancel}>
                Отменить запись
              </ConfirmButton>
            </ConfirmButtons>
          </ConfirmContent>
        </ConfirmDialog>
      )}
    </>
  );
}

export default AppointmentCard;
