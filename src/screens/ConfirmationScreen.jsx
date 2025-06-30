import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  useBookingContext,
  useUserContext,
  useAppointmentsContext,
  useUIContext,
} from '../contexts/index.jsx';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
    url('/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg') lightgray 50% / cover
      no-repeat;
  position: relative;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  margin: 0 auto;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top: 64px;
`;

const BottomSheet = styled.div`
  display: flex;
  padding: 16px 0px 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: #f1f1f1;
  position: relative;
  min-height: calc(100vh - 64px);
  overflow: hidden;
`;

const Dragger = styled.div`
  display: flex;
  height: 0px;
  padding-bottom: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  position: relative;

  &::after {
    content: '';
    width: 40px;
    height: 4px;
    border-radius: 6px;
    background: rgba(137, 137, 137, 0.25);
  }
`;

const NavBar = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  align-self: stretch;
  position: relative;
`;

const NavContent = styled.div`
  display: flex;
  padding: 0px 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  position: relative;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`;

const Title = styled.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
  padding: 7px 0px 1px 0px;
`;

const Subtitle = styled.div`
  flex: 1 0 0;
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
  padding: 1px 0px 3px 0px;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  background: rgba(20, 20, 20, 0.06);
  border: none;
  cursor: pointer;
  padding: 8px;

  &:hover {
    background: rgba(20, 20, 20, 0.12);
  }
`;

const CloseIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 13px;
    height: 2px;
    background-color: #141414;
    transform-origin: center;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const ContentArea = styled.div`
  display: flex;
  padding: 4px 12px 12px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: #f1f1f1;
  position: relative;
  flex: 1;
  overflow-y: auto;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: #fff;
  box-shadow:
    0px 0px 0px 0.5px rgba(0, 0, 0, 0.04),
    0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  position: relative;
`;

const InfoContent = styled.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1 0 0;
  position: relative;
`;

const InfoTitle = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  padding: 2px 0px 4px 0px;

  div {
    flex: 1 0 0;
    color: #141414;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.24px;
  }
`;

const InfoDetail = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  padding: 8px 0px 4px 0px;

  div {
    flex: 1 0 0;
    color: #141414;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.24px;
  }

  .price {
    color: #898989;
  }

  .specialization {
    color: #898989;
  }
`;

const EditIcon = styled.div`
  display: flex;
  padding: 15px 16px 15px 0px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  &::after {
    content: '';
    width: 14px;
    height: 14px;
    background-color: #b8b8b8;
    position: relative;
    clip-path: polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%);
  }
`;

const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  background: #fff;
  align-self: stretch;
  position: relative;
`;

const FormSection = styled.div`
  display: flex;
  padding: 4px 0px 15px 0px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  position: relative;
`;

const FormHeader = styled.div`
  display: flex;
  padding: 15px 16px 11px 16px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;

  div {
    flex: 1 0 0;
    color: #141414;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.24px;
    padding-top: 2px;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: #fff;
  position: relative;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const Input = styled.input`
  display: flex;
  height: 48px;
  padding: 13px 16px 15px 16px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: rgba(20, 20, 20, 0.06);
  border: none;
  outline: none;

  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;

  &::placeholder {
    color: #898989;
  }
`;

const TextArea = styled.textarea`
  display: flex;
  padding: 13px 16px 16px 16px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: rgba(20, 20, 20, 0.06);
  border: none;
  outline: none;
  min-height: 80px;
  resize: vertical;

  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;

  &::placeholder {
    color: #898989;
  }
`;

const Bottom = styled.div`
  display: flex;
  padding-top: 12px;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  box-shadow:
    0px 0px 0px 0.5px rgba(0, 0, 0, 0.04),
    0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  position: relative;
  align-self: stretch;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  position: relative;
`;

const ConfirmButton = styled.button`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #1db93c;
  padding: 13px 16px 15px 16px;

  div {
    flex: 1 0 0;
    color: #fff;
    text-align: center;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.24px;
  }
`;

const Legal = styled.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  div {
    flex: 1 0 0;
    font-family: 'SB Sans Text';
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.234px;
    padding: 19px 0px 5px 0px;
  }

  .text {
    color: #898989;
  }

  .link {
    color: #0059d6;
  }
`;

const HomeIndicator = styled.div`
  display: flex;
  height: 34px;
  padding: 21px 114px 9px 115px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  position: relative;

  &::after {
    content: '';
    width: 146px;
    height: 4px;
    border-radius: 100px;
    background: #000;
    position: absolute;
  }
`;

function ConfirmationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { clinicId } = useParams();
  const booking = useBookingContext();
  const user = useUserContext();
  const appointments = useAppointmentsContext();
  const ui = useUIContext();

  const [formData, setFormData] = useState({
    name: user.currentUser.name,
    phone: user.currentUser.phone,
    comment: '',
  });

  // Получаем данные из контекста бронирования или из предыдущих экранов
  const bookingData = location.state || {};
  const selectedServices = bookingData.selectedServices || booking.selectedServices || [];
  const selectedSpecialist = bookingData.selectedSpecialist || booking.selectedSpecialist || null;
  const selectedDateTime =
    bookingData.selectedDateTime ||
    (booking.selectedDate && booking.selectedTime
      ? { date: booking.selectedDate, time: booking.selectedTime }
      : null);
  const clinicData = bookingData.clinicData || booking.selectedClinic || {};

  useEffect(() => {
    console.log('🔸 ConfirmationScreen: Received booking data:', bookingData);
    console.log('🔸 ConfirmationScreen: selectedServices:', selectedServices);
    console.log('🔸 ConfirmationScreen: selectedSpecialist:', selectedSpecialist);
    console.log('🔸 ConfirmationScreen: selectedDateTime:', selectedDateTime);
    console.log('🔸 ConfirmationScreen: Validation checks:');
    console.log('  - selectedServices.length:', selectedServices.length);
    console.log('  - selectedSpecialist exists:', !!selectedSpecialist);
    console.log('  - selectedDateTime exists:', !!selectedDateTime);

    // Если нет данных о записи, возвращаемся на начальный экран
    if (!selectedServices.length || !selectedSpecialist || !selectedDateTime) {
      console.log('🔸 ConfirmationScreen: Missing data, redirecting to home');
      navigate('/');
    } else {
      console.log('🔸 ConfirmationScreen: All data present, staying on confirmation screen');
    }
  }, [selectedServices, selectedSpecialist, selectedDateTime, navigate]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClose = () => {
    navigate('/');
  };

  const getTotalPrice = () => {
    return selectedServices.reduce((total, service) => {
      // Извлекаем число из строки типа "800 ₽"
      const priceValue = parseInt(service.price.replace(/[^\d]/g, '')) || 0;
      return total + priceValue;
    }, 0);
  };

  const formatDateTime = dateTime => {
    if (!dateTime) return '';

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

    return `${day} ${month}, ${dayName} ${dateTime.time}, 1 час`;
  };

  const handleConfirm = async () => {
    // Обновляем данные пациента в контексте
    user.actions.updatePatientInfo(formData);

    // Сохраняем данные бронирования в контексте
    booking.actions.selectServices(selectedServices);
    booking.actions.selectSpecialist(selectedSpecialist);
    if (selectedDateTime) {
      booking.actions.selectDateTime(selectedDateTime.date, selectedDateTime.time);
    }
    booking.actions.selectClinic(clinicData);

    // Создаем запись
    const appointmentData = {
      id: `appointment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      clinic: clinicData,
      services: selectedServices,
      specialist: selectedSpecialist,
      dateTime: selectedDateTime,
      patient: formData,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      bookingNumber: `MP${Date.now().toString().slice(-6)}`,
    };

    // Добавляем в контекст записей
    appointments.actions.addAppointment(appointmentData);
    appointments.actions.setActiveAppointment(appointmentData);

    // Сохраняем результат бронирования
    booking.actions.setBookingResult({
      success: true,
      appointmentId: appointmentData.id,
      message: 'Запись успешно создана',
    });

    ui.actions.showSuccess('Запись успешно создана!');

    console.log('Appointment created:', appointmentData);

    // Переход к экрану успешного завершения записи
    const fallbackClinicId = clinicId || '1';
    navigate(`/clinic/${fallbackClinicId}/done`);
  };

  const isFormValid = () => {
    return formData.name.trim() && formData.phone.trim();
  };

  return (
    <Container>
      <BottomSheet>
        <Dragger />

        <NavBar>
          <NavContent>
            <HeaderTitle>
              <Title>Запись онлайн</Title>
              <Subtitle>{clinicData.name || 'МедЦентр «Здоровье»'}</Subtitle>
            </HeaderTitle>
            <CloseButton onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
          </NavContent>
        </NavBar>

        <ContentArea>
          {/* Услуги */}
          <InfoCard>
            <InfoContent>
              <InfoTitle>
                <div>Услуги</div>
              </InfoTitle>
              {selectedServices.map((service, index) => (
                <InfoDetail key={index}>
                  <div>
                    {service.name} <span className="price">{service.price}</span>
                  </div>
                </InfoDetail>
              ))}
            </InfoContent>
            <EditIcon />
          </InfoCard>

          {/* Специалист */}
          <InfoCard>
            <InfoContent>
              <InfoTitle>
                <div>Специалист</div>
              </InfoTitle>
              <InfoDetail>
                <div>
                  {selectedSpecialist?.name || 'Анжелика Павленко'}{' '}
                  <span className="specialization">
                    {selectedSpecialist?.specialty || 'Стилист - парикмахер'}
                  </span>
                </div>
              </InfoDetail>
            </InfoContent>
            <EditIcon />
          </InfoCard>

          {/* Дата и время */}
          <InfoCard>
            <InfoContent>
              <InfoTitle>
                <div>Дата и время</div>
              </InfoTitle>
              <InfoDetail>
                <div>{formatDateTime(selectedDateTime) || '14 июня, вт 10:30–11:30, 1 час'}</div>
              </InfoDetail>
            </InfoContent>
            <EditIcon />
          </InfoCard>

          {/* Контактные данные */}
          <FormCard>
            <FormSection>
              <FormHeader>
                <div>Контактные данные</div>
              </FormHeader>
              <InputsContainer>
                <InputField>
                  <Input
                    type="text"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                  />
                </InputField>
                <InputField>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={e => handleInputChange('phone', e.target.value)}
                  />
                </InputField>
              </InputsContainer>
            </FormSection>
          </FormCard>

          {/* Комментарий */}
          <FormCard>
            <FormSection>
              <FormHeader>
                <div>Комментарий</div>
              </FormHeader>
              <InputsContainer>
                <InputField>
                  <TextArea
                    placeholder="Текст"
                    value={formData.comment}
                    onChange={e => handleInputChange('comment', e.target.value)}
                  />
                </InputField>
              </InputsContainer>
            </FormSection>
          </FormCard>
        </ContentArea>

        <Bottom>
          <ButtonContainer>
            <ConfirmButton
              onClick={handleConfirm}
              disabled={!isFormValid()}
              style={{ opacity: isFormValid() ? 1 : 0.5 }}
            >
              <div>Подтвердить запись • {getTotalPrice()} ₽</div>
            </ConfirmButton>
          </ButtonContainer>

          <Legal>
            <div>
              <span className="text">
                Нажимая «Подтвердить запись» я даю 2ГИС согласие на обработку и передачу третьим
                лицам своих персональных данных и согласен с{' '}
              </span>
              <span className="link">«Политикой конфиденциальности»</span>
            </div>
          </Legal>

          <HomeIndicator />
        </Bottom>
      </BottomSheet>
    </Container>
  );
}

export default ConfirmationScreen;
