import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
    url('/assets/map_stub.png') lightgray 50% / cover no-repeat;
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

const NavButton = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.06);
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(20, 20, 20, 0.12);
  }
`;

const BackIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;

  &::after {
    content: '';
    width: 10px;
    height: 17px;
    background-color: #141414;
    position: absolute;
    left: 7px;
    top: 3px;
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%, 85% 50%);
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
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
`;

const ContentArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
  overflow-y: auto;
`;

const Content = styled.div`
  display: flex;
  padding: 4px 12px 12px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: #f1f1f1;
`;

const SegmentedControl = styled.div`
  display: flex;
  padding: 2px;
  align-items: center;
  gap: 2px;
  align-self: stretch;
  border-radius: 10px;
  background: rgba(20, 20, 20, 0.06);
  position: relative;
`;

const SegmentButton = styled.button`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  border-radius: 8px;
  background: ${props => (props.selected ? '#FFF' : 'transparent')};
  box-shadow: ${props =>
    props.selected
      ? '0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08)'
      : 'none'};
  border: none;
  cursor: pointer;
  padding: 6px 8px 8px 8px;
  justify-content: center;
`;

const SegmentLabel = styled.div`
  flex: 1 0 0;
  color: #141414;
  text-align: center;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  position: relative;
`;

const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  position: relative;
  width: 100%;
`;

const DateContainer = styled.div`
  display: flex;
  padding-top: 4px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const DateHeader = styled.div`
  display: flex;
  padding: 7px 4px 11px 4px;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
`;

const MonthTitle = styled.div`
  flex: 1 0 0;
  color: #141414;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
  position: relative;
`;

const DaysContainer = styled.div`
  display: flex;
  padding-bottom: 8px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
  overflow-x: auto;
`;

const DayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${props => {
    if (props.disabled) {
      return 'rgba(20, 20, 20, 0.06)';
    }
    if (props.selected) {
      return '#1DB93C';
    }
    return '#FFF';
  }};
  box-shadow: ${props =>
    !props.disabled && !props.selected
      ? '0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08)'
      : 'none'};
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 11px 16px 10px 16px;
  flex-direction: column;
  gap: 1px;
  min-width: 62px;
`;

const DayLabel = styled.div`
  color: ${props => {
    if (props.disabled) {
      return '#B8B8B8';
    }
    if (props.selected) {
      return '#FFF';
    }
    return '#141414';
  }};
  text-align: center;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const DayNumber = styled.div`
  color: ${props => {
    if (props.disabled) {
      return '#B8B8B8';
    }
    if (props.selected) {
      return 'rgba(255, 255, 255, 0.70)';
    }
    return '#898989';
  }};
  text-align: center;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
`;

const TimeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  position: relative;
  width: 100%;
`;

const TimeContainer = styled.div`
  display: flex;
  padding-top: 4px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const TimeHeader = styled.div`
  display: flex;
  padding: 15px 4px 11px 4px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const TimeTitle = styled.div`
  flex: 1 0 0;
  color: #141414;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  position: relative;
`;

const TimeSlotsContainer = styled.div`
  display: flex;
  padding-bottom: 8px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
  flex-wrap: wrap;
`;

const TimeSlotButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-radius: 10px;
  background: ${props => {
    if (props.disabled) {
      return 'rgba(20, 20, 20, 0.06)';
    }
    if (props.selected) {
      return '#1DB93C';
    }
    return '#FFF';
  }};
  box-shadow: ${props =>
    !props.disabled && !props.selected
      ? '0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08)'
      : 'none'};
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 13px 16px 15px 16px;
  gap: 8px;
  min-width: calc(25% - 6px);
`;

const TimeSlotLabel = styled.div`
  color: ${props => {
    if (props.disabled) {
      return '#B8B8B8';
    }
    if (props.selected) {
      return '#FFF';
    }
    return '#141414';
  }};
  text-align: center;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
  position: relative;
`;

const Footer = styled.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #f1f1f1;
  position: relative;
`;

const FooterContent = styled.div`
  display: flex;
  padding: 10px 0px 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  position: relative;
`;

const FooterText = styled.div`
  color: #b8b8b8;
  text-align: center;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
  position: relative;
`;

const BottomTabBar = styled.div`
  display: flex;
  height: 34px;
  padding-bottom: 24px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #f1f1f1;
  box-shadow: 0px 0.5px 0px 0px rgba(137, 137, 137, 0.4) inset;
  backdrop-filter: blur(20px);
  position: relative;
`;

const DateTimeScreen = () => {
  const { clinicId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [specialists, setSpecialists] = useState([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [showAllAvailable, setShowAllAvailable] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [dates, setDates] = useState([]);

  // Получаем данные из state (выбранные услуги, специалист, клиника и предзаполненные данные)
  const {
    selectedServices = [],
    selectedSpecialist: incomingSpecialist = null,
    clinicData = null,
    prefilledData = null,
  } = location.state || {};

  useEffect(() => {
    loadSpecialists();
    initializeDates();
  }, [clinicId]);

  useEffect(() => {
    if (incomingSpecialist) {
      setSelectedSpecialist(incomingSpecialist);
    }
  }, [incomingSpecialist]);

  useEffect(() => {
    if (selectedDate) {
      loadTimeSlots();
    }
  }, [selectedDate, selectedSpecialist, showAllAvailable]);

  // Если есть предзаполненное время, автоматически переходим к подтверждению
  useEffect(() => {

    if (prefilledData && prefilledData.selectedTime) {

      const selectedDateTime = {
        date: selectedDate || new Date(), // Используем выбранную дату или сегодня
        time: prefilledData.selectedTime,
      };

      const fallbackClinicId = clinicId || prefilledData.clinic.id || '1';

      const finalClinicData = clinicData ||
        prefilledData.clinic || {
        id: parseInt(fallbackClinicId),
        name: fallbackClinicId === '1' ? 'МедЦентр «Здоровье»' : 'Клиника «Семейный Доктор»',
        address: fallbackClinicId === '1' ? 'ул. Тверская, 15' : 'ул. Арбат, 25',
      };

      const navigationState = {
        selectedServices: prefilledData.selectedServices || [],
        selectedSpecialist: prefilledData.specialist || prefilledData.doctor || incomingSpecialist,
        selectedDateTime,
        clinicData: finalClinicData,
      };


      navigate(`/clinic/${fallbackClinicId}/confirmation`, {
        state: navigationState,
      });
    }
  }, [prefilledData, selectedDate, clinicId, clinicData, incomingSpecialist, navigate]);

  // Функция для категоризации временных слотов
  const categorizeTimeSlots = slots => {
    const morning = slots.filter(slot => {
      const hour = parseInt(slot.time.split(':')[0]);
      return hour >= 6 && hour < 12;
    });

    const afternoon = slots.filter(slot => {
      const hour = parseInt(slot.time.split(':')[0]);
      return hour >= 12 && hour < 18;
    });

    const evening = slots.filter(slot => {
      const hour = parseInt(slot.time.split(':')[0]);
      return hour >= 18 && hour < 24;
    });

    return { morning, afternoon, evening };
  };

  // Мемоизируем категоризацию временных слотов
  const { morning, afternoon, evening } = useMemo(
    () => categorizeTimeSlots(timeSlots),
    [timeSlots],
  );

  const loadSpecialists = async () => {
    try {
      const fallbackClinicId = clinicId || '1';
      let response = await fetch(`/data/specialists_${fallbackClinicId}.json`);

      if (!response.ok) {
        response = await fetch('/data/specialists_1.json');
      }

      const data = await response.json();
      setSpecialists(data);
    } catch (error) {
      console.error('Ошибка загрузки специалистов:', error);
      // Используем тестовые данные
      setSpecialists([
        {
          id: 1,
          name: 'Иванов Алексей Петрович',
          specialty: 'Терапевт',
          experience: '15 лет',
          rating: 4.9,
        },
      ]);
    }
  };

  const initializeDates = () => {
    const datesList = [];
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      datesList.push(date);
    }

    setDates(datesList);
    setSelectedDate(datesList[1]); // По умолчанию выбираем завтра (индекс 1)
  };

  const loadTimeSlots = async () => {
    if (!selectedDate) {
      return;
    }

    try {
      const fallbackClinicId = clinicId || '1';
      const dateStr = selectedDate.toISOString().split('T')[0];
      const response = await fetch(`/data/slots_${fallbackClinicId}_${dateStr}.json`);

      if (!response.ok) {
        // Если файл не найден, генерируем тестовые данные
        generateTestSlots();
        return;
      }

      const data = await response.json();

      // Фильтруем слоты по выбранному специалисту
      let filteredSlots = data;
      if (!showAllAvailable && selectedSpecialist) {
        filteredSlots = data.filter(slot => slot.specialistId === selectedSpecialist.id);
      }

      setTimeSlots(filteredSlots);
    } catch (error) {
      console.error('Ошибка загрузки временных слотов:', error);
      // Генерируем тестовые данные если файл не найден
      generateTestSlots();
    }
  };

  const generateTestSlots = () => {
    const slots = [];
    const times = [
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
    ];

    times.forEach((time, index) => {
      slots.push({
        time,
        available: Math.random() > 0.3, // 70% вероятность что слот доступен
        specialistId: selectedSpecialist?.id || 1,
      });
    });

    setTimeSlots(slots);
  };

  const getDayName = date => {
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[date.getDay()];
  };

  const getMonthName = date => {
    const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ];
    return months[date.getMonth()];
  };

  const isDateDisabled = date => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleClose = () => {
    navigate('/');
  };

  const handleSpecialistToggle = showAll => {
    setShowAllAvailable(showAll);
  };

  const handleDateSelect = date => {
    setSelectedDate(date);
    setSelectedTime(null); // Сбрасываем выбранное время при смене даты
  };

  const handleTimeSelect = time => {
    setSelectedTime(time);

    // Переход к экрану подтверждения с передачей всех данных
    const selectedDateTime = {
      date: selectedDate,
      time,
    };

    const fallbackClinicId = clinicId || '1';

    // Используем данные клиники из state или fallback
    const finalClinicData = clinicData || {
      id: parseInt(fallbackClinicId),
      name: fallbackClinicId === '1' ? 'МедЦентр «Здоровье»' : 'Клиника «Семейный Доктор»',
      address: fallbackClinicId === '1' ? 'ул. Тверская, 15' : 'ул. Арбат, 25',
    };

    navigate(`/clinic/${fallbackClinicId}/confirmation`, {
      state: {
        selectedServices,
        selectedSpecialist,
        selectedDateTime,
        clinicData: finalClinicData,
      },
    });
  };

  return (
    <Container>
      <BottomSheet>
        <Dragger />

        <NavBar>
          <NavContent>
            <NavButton onClick={handleBack}>
              <BackIcon />
            </NavButton>

            <HeaderTitle>
              <Title>Дата и время</Title>
            </HeaderTitle>

            <NavButton onClick={handleClose}>
              <CloseIcon />
            </NavButton>
          </NavContent>
        </NavBar>

        <ContentArea>
          <Content>
            <SegmentedControl>
              <SegmentButton
                selected={!showAllAvailable}
                onClick={() => handleSpecialistToggle(false)}
              >
                <SegmentLabel>
                  {selectedSpecialist
                    ? `${selectedSpecialist.name.split(' ')[0] 
                    } ${ 
                      selectedSpecialist.name.split(' ')[1]}`
                    : 'Специалист'}
                </SegmentLabel>
              </SegmentButton>
              <SegmentButton
                selected={showAllAvailable}
                onClick={() => handleSpecialistToggle(true)}
              >
                <SegmentLabel>Все доступные</SegmentLabel>
              </SegmentButton>
            </SegmentedControl>

            <DateSection>
              <DateContainer>
                <DateHeader>
                  <MonthTitle>{selectedDate ? getMonthName(selectedDate) : 'Июнь'}</MonthTitle>
                  <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="#B8B8B8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#B8B8B8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </DateHeader>

                <DaysContainer>
                  {dates.map((date, index) => (
                    <DayButton
                      key={index}
                      disabled={isDateDisabled(date)}
                      selected={selectedDate && date.toDateString() === selectedDate.toDateString()}
                      onClick={() => !isDateDisabled(date) && handleDateSelect(date)}
                    >
                      <DayLabel
                        disabled={isDateDisabled(date)}
                        selected={
                          selectedDate && date.toDateString() === selectedDate.toDateString()
                        }
                      >
                        {getDayName(date)}
                      </DayLabel>
                      <DayNumber
                        disabled={isDateDisabled(date)}
                        selected={
                          selectedDate && date.toDateString() === selectedDate.toDateString()
                        }
                      >
                        {date.getDate()}
                      </DayNumber>
                    </DayButton>
                  ))}
                </DaysContainer>
              </DateContainer>
            </DateSection>

            {morning.length > 0 && (
              <TimeSection>
                <TimeContainer>
                  <TimeHeader>
                    <TimeTitle>Утро</TimeTitle>
                  </TimeHeader>
                  <TimeSlotsContainer>
                    {morning.map((slot, index) => (
                      <TimeSlotButton
                        key={index}
                        disabled={!slot.available}
                        selected={selectedTime === slot.time}
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                      >
                        <TimeSlotLabel
                          disabled={!slot.available}
                          selected={selectedTime === slot.time}
                        >
                          {slot.time}
                        </TimeSlotLabel>
                      </TimeSlotButton>
                    ))}
                  </TimeSlotsContainer>
                </TimeContainer>
              </TimeSection>
            )}

            {afternoon.length > 0 && (
              <TimeSection>
                <TimeContainer>
                  <TimeHeader>
                    <TimeTitle>День</TimeTitle>
                  </TimeHeader>
                  <TimeSlotsContainer>
                    {afternoon.map((slot, index) => (
                      <TimeSlotButton
                        key={index}
                        disabled={!slot.available}
                        selected={selectedTime === slot.time}
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                      >
                        <TimeSlotLabel
                          disabled={!slot.available}
                          selected={selectedTime === slot.time}
                        >
                          {slot.time}
                        </TimeSlotLabel>
                      </TimeSlotButton>
                    ))}
                  </TimeSlotsContainer>
                </TimeContainer>
              </TimeSection>
            )}

            {evening.length > 0 && (
              <TimeSection>
                <TimeContainer>
                  <TimeHeader>
                    <TimeTitle>Вечер</TimeTitle>
                  </TimeHeader>
                  <TimeSlotsContainer>
                    {evening.map((slot, index) => (
                      <TimeSlotButton
                        key={index}
                        disabled={!slot.available}
                        selected={selectedTime === slot.time}
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                      >
                        <TimeSlotLabel
                          disabled={!slot.available}
                          selected={selectedTime === slot.time}
                        >
                          {slot.time}
                        </TimeSlotLabel>
                      </TimeSlotButton>
                    ))}
                  </TimeSlotsContainer>
                </TimeContainer>
              </TimeSection>
            )}
          </Content>
        </ContentArea>

        <Footer>
          <FooterContent>
            <FooterText>В сотрудничестве с СберЗдоровье</FooterText>
          </FooterContent>
        </Footer>

        <BottomTabBar />
      </BottomSheet>
    </Container>
  );
};

export default DateTimeScreen;
