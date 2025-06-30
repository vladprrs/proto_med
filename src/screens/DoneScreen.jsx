import React, { useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  useBookingContext,
  useUserContext,
  useAppointmentsContext,
  useUIContext,
} from '../contexts/index.jsx';
import { MapScreenLayout } from '../components/layout';

// Удален Container - заменен на MapScreenLayout

const BottomSheet = styled.div`
  display: flex;
  padding: 16px 0px 0px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: #f1f1f1;
  position: relative;
  min-height: calc(100vh - 64px);
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
    flex-shrink: 0;
    border-radius: 6px;
    background: rgba(137, 137, 137, 0.25);
    position: relative;
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
  padding-bottom: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  padding: 7px 0px 1px 0px;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;

  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  background: rgba(20, 20, 20, 0.06);

  &:hover {
    background: rgba(20, 20, 20, 0.1);
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
    top: 50%;
    left: 50%;
    width: 13px;
    height: 1px;
    background: #141414;
    transform: translate(-50%, -50%);
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
  align-items: center;
  gap: 12px;
  flex: 1;
  align-self: stretch;
  background: #f1f1f1;
  position: relative;
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
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
  align-self: stretch;
  position: relative;
`;

const InfoTitle = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;

  div {
    flex: 1 0 0;
    color: #141414;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.24px;
    padding: 2px 0px 4px 0px;
  }
`;

const InfoDetail = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;

  div {
    flex: 1 0 0;
    color: #141414;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.24px;
    padding: 8px 0px 4px 0px;
  }
`;

const ServicesCard = styled.div`
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

const ServicesContent = styled.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1 0 0;
  position: relative;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;

  div {
    flex: 1 0 0;
    font-family: 'SB Sans Text';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.24px;
    padding: 8px 0px 4px 0px;

    .service-name {
      color: #141414;
    }

    .service-price {
      color: #898989;
    }
  }
`;

const SuccessIllustration = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  position: relative;

  svg {
    max-width: 351px;
    width: 100%;
    height: auto;
  }
`;

const Bottom = styled.div`
  display: flex;
  padding-top: 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #fff;
  position: relative;
  margin-top: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 12px;
  position: relative;
`;

const DoneButton = styled.button`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  position: relative;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  div {
    display: flex;
    padding: 13px 16px 15px 16px;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    background: #1db93c;
    border-radius: 10px;

    span {
      flex: 1 0 0;
      color: #fff;
      text-align: center;
      font-family: 'SB Sans Text';
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.24px;
    }
  }
`;

const CancelButton = styled.button`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  position: relative;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  div {
    display: flex;
    padding: 13px 16px 15px 16px;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid #ef4444;
    border-radius: 10px;

    span {
      flex: 1 0 0;
      color: #ef4444;
      text-align: center;
      font-family: 'SB Sans Text';
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.24px;
    }
  }
`;

const HomeIndicator = styled.div`
  display: flex;
  height: 34px;
  padding: 21px 0px 9px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  position: relative;

  &::after {
    content: '';
    width: 146px;
    height: 4px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #000;
    position: absolute;
    top: 21px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

function DoneScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const booking = useBookingContext();
  const user = useUserContext();
  const appointments = useAppointmentsContext();
  const ui = useUIContext();

  // Если мы попали сюда через маршрут /appointment, показываем данные из activeAppointment
  const isAppointmentView = location.pathname === '/appointment';

  let displayData;
  if (isAppointmentView && appointments.activeAppointment) {
    displayData = {
      selectedServices: appointments.activeAppointment.services || [],
      selectedSpecialist: appointments.activeAppointment.specialist,
      selectedDateTime: appointments.activeAppointment.dateTime,
      clinicData: appointments.activeAppointment.clinic || { name: 'МедЦентр «Здоровье»' },
      contactInfo: appointments.activeAppointment.patient || {},
    };
  } else {
    // Получаем данные из контекста бронирования или из предыдущего экрана
    const bookingData = location.state || {};
    displayData = {
      selectedServices: bookingData.selectedServices || booking.selectedServices || [],
      selectedSpecialist: bookingData.selectedSpecialist || booking.selectedSpecialist || null,
      selectedDateTime:
        bookingData.selectedDateTime ||
        (booking.selectedDate && booking.selectedTime
          ? { date: booking.selectedDate, time: booking.selectedTime }
          : null),
      clinicData: bookingData.clinicData ||
        booking.selectedClinic || { name: 'МедЦентр «Здоровье»' },
      contactInfo: bookingData.contactInfo || user.patientInfo || {},
    };
  }

  const { selectedServices, selectedSpecialist, selectedDateTime, clinicData, contactInfo } =
    displayData;

  const handleClose = () => {
    navigate('/');
  };

  const handleDone = () => {
    if (isAppointmentView) {
      // Если мы в режиме просмотра талона, просто возвращаемся на главную
      navigate('/');
    } else {
      // Сохраняем информацию о записи в контексте для отображения на главном экране
      const appointmentData = {
        id: `appointment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, // Уникальный ID
        clinic: clinicData,
        services: selectedServices,
        specialist: selectedSpecialist,
        dateTime: selectedDateTime,
        patient: contactInfo,
        status: 'active',
        createdAt: new Date().toISOString(),
        bookingNumber: `MP${Date.now().toString().slice(-6)}`, // Номер бронирования
      };

      // Добавляем запись в массив appointments для отображения на дашборде
      appointments.actions.addAppointment(appointmentData);

      // Также сохраняем как активную запись
      appointments.actions.setActiveAppointment(appointmentData);

      // Показываем уведомление об успешной записи
      ui.actions.showSuccess('Запись успешно создана!');

      // Очищаем данные о текущем бронировании
      booking.actions.resetBookingFlow();

      console.log('🔸 DoneScreen: Appointment created successfully:', appointmentData);

      navigate('/');
    }
  };

  const formatDateTime = dateTime => {
    if (!dateTime) return '14 июня, вт, 10:30';

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

  // Данные по умолчанию для демонстрации
  const defaultServices = [
    { name: 'Маникюр (только форма)', price: 700 },
    { name: 'Маникюр с покрытием лак', price: 1100 },
  ];

  const displayServices = selectedServices.length ? selectedServices : defaultServices;

  return (
    <MapScreenLayout
      mapImage="/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg"
      contentTop="64px"
      contentMinHeight="calc(100vh - 64px)"
      noRadius={true}
    >
      <BottomSheet>
        <Dragger />

        <NavBar>
          <NavContent>
            <HeaderTitle>
              <Title>{isAppointmentView ? 'Ваш талон' : 'Вы записаны'}</Title>
            </HeaderTitle>
            <CloseButton onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
          </NavContent>
        </NavBar>

        <ContentArea>
          {/* Информация о записи */}
          <InfoCard>
            <InfoContent>
              <InfoTitle>
                <div>Запись в {clinicData.name}</div>
              </InfoTitle>
              <InfoDetail>
                <div>{formatDateTime(selectedDateTime)}</div>
              </InfoDetail>
              <InfoDetail>
                <div>Новинский бульвар, 12, Москва</div>
              </InfoDetail>
            </InfoContent>
          </InfoCard>

          {/* Услуги */}
          <ServicesCard>
            <ServicesContent>
              <InfoTitle>
                <div>Услуги</div>
              </InfoTitle>
              {displayServices.map((service, index) => (
                <ServiceItem key={index}>
                  <div>
                    <span className="service-name">{service.name} </span>
                    <span className="service-price">{service.price} ₽</span>
                  </div>
                </ServiceItem>
              ))}
            </ServicesContent>
          </ServicesCard>

          {/* Иллюстрация успеха */}
          <SuccessIllustration>
            <svg viewBox="0 0 351 262" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M174.348 125.049C165.46 152.48 178.199 186.896 206.634 191.673C238.345 197.001 264.794 184.664 273.681 157.234C275.794 150.711 276.602 143.837 276.059 137.002C275.515 130.168 273.631 123.507 270.513 117.401C267.395 111.294 263.105 105.862 257.888 101.414C252.671 96.9653 246.629 93.5881 240.107 91.4749C231.535 88.6975 222.381 88.2959 214.222 88.0222C196.014 91.4164 180.458 106.191 174.348 125.049Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M215.566 192.436C186.732 192.436 163.358 169.062 163.358 140.228C163.358 111.394 186.732 88.0192 215.566 88.0192C244.4 88.0192 267.775 111.394 267.775 140.228C267.775 169.062 244.4 192.436 215.566 192.436Z"
                fill="url(#paint1_linear)"
              />
              <path
                d="M213.933 118.515C210.843 124.002 208.764 130 207.794 136.223"
                stroke="black"
                strokeWidth="2.1213"
                strokeMiterlimit="10"
              />
              <path
                d="M228.317 123.495C225.406 128.713 223.641 134.492 223.138 140.446"
                stroke="black"
                strokeWidth="2.1213"
                strokeMiterlimit="10"
              />
              <path
                d="M241.987 151.291C224.409 179.054 183.208 163.881 186.771 134.056"
                stroke="black"
                strokeWidth="2.1213"
                strokeMiterlimit="10"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="276.237"
                  y1="140.455"
                  x2="171.555"
                  y2="140.455"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.09" stopColor="#195441" />
                  <stop offset="0.1" stopColor="#195640" />
                  <stop offset="0.36" stopColor="#197A31" />
                  <stop offset="0.61" stopColor="#198E27" />
                  <stop offset="0.83" stopColor="#199E20" />
                  <stop offset="1" stopColor="#19A41E" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="267.789"
                  y1="140.228"
                  x2="163.344"
                  y2="140.228"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#19A41E" />
                  <stop offset="0.97622" stopColor="#23C629" />
                </linearGradient>
              </defs>
            </svg>
          </SuccessIllustration>
        </ContentArea>

        <Bottom>
          <ButtonContainer>
            {isAppointmentView ? (
              <>
                <DoneButton onClick={handleDone} style={{ marginBottom: '8px' }}>
                  <div>
                    <span>Назад</span>
                  </div>
                </DoneButton>
                <CancelButton
                  onClick={() => {
                    // Удаляем запись из массива appointments
                    if (state.activeAppointment?.id) {
                      actions.removeAppointment(state.activeAppointment.id);
                    }
                    // Очищаем активную запись
                    actions.clearActiveAppointment();
                    navigate('/');
                  }}
                >
                  <div>
                    <span>Отменить запись</span>
                  </div>
                </CancelButton>
              </>
            ) : (
              <DoneButton onClick={handleDone}>
                <div>
                  <span>Хорошо</span>
                </div>
              </DoneButton>
            )}
          </ButtonContainer>

          <HomeIndicator />
        </Bottom>
      </BottomSheet>
    </MapScreenLayout>
  );
}

export default DoneScreen;
