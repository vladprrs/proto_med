import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

// Стили для карточки клиники
const ResultCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: #FFF;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  
  &:hover {
    background: #F8F8F8;
  }
`;

const CardContent = styled.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
`;

const CardMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const TitleContent = styled.div`
  display: flex;
  padding-top: 2px;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`;

const CompanyName = styled.div`
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-right: 8px;
  flex: 1;
`;

const CrownBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CrownIcon = styled.svg`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

const Subtitle = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const SubtitleContent = styled.div`
  display: flex;
  padding-top: 2px;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`;

const SubtitleText = styled.div`
  flex: 1 0 0;
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.168px;
`;

const SecondaryLine = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  margin-top: 8px;
`;

const SecondaryContent = styled.div`
  display: flex;
  padding-top: 2px;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`;

const RatingSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  position: relative;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
  position: relative;
`;

const StarIcon = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
`;

const StarBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #E0E0E0;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`;

const StarFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.fill};
  height: 100%;
  background: ${props => props.color || '#EFA701'};
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  overflow: hidden;
`;

const RatingText = styled.div`
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.168px;
`;

const ReviewCount = styled.div`
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.168px;
`;

const RideTime = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  margin-left: auto;
  position: relative;
`;

const TimeIcon = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background: #898989;
    mask: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM7.5 4V8.41421L10.2929 11.2071L11 10.5L8.5 8V4H7.5Z' fill='%23898989'/%3E%3C/svg%3E") no-repeat center;
  }
`;

const TimeText = styled.div`
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.168px;
`;

const AddressLine = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  margin-top: 4px;
`;

const AddressText = styled.div`
  flex: 1 0 0;
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.168px;
`;

const LocationsText = styled.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 4px;
`;

const BookingButton = styled.div`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  background: #1BA136;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
  
  &:hover {
    background: #169A2E;
  }
`;

const BookingButtonText = styled.div`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

const DoctorSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
  padding: 16px;
  background: #F8F8F8;
  border-radius: 12px;
`;

const DoctorInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DoctorName = styled.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 2px;
`;

const DoctorSpecialty = styled.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

const DoctorExperience = styled.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 8px;
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const PriceText = styled.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 4px;
`;

const FirstVisitBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CheckIcon = styled.div`
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 4.5L6 12l-3.5-3.5' stroke='%231BA136' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
`;

const FirstVisitText = styled.div`
  color: #1BA136;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const SlotsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SlotsDate = styled.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 8px;
`;

const SlotsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const SlotButton = styled.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  background: #1BA136;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background: #169A2E;
  }
`;

const SlotText = styled.div`
  color: #FFF;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const AdSection = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 0px 0px 12px 12px;
  background: linear-gradient(90deg, rgba(240, 240, 240, 0.00) 0%, #F0F0F0 100%);
  position: relative;
`;

const AdContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  position: relative;
`;

const AdTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  position: relative;
`;

const AdText = styled.div`
  align-self: stretch;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.168px;
`;

const AdDisclaimer = styled.div`
  align-self: stretch;
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.096px;
`;

const AdButton = styled.div`
  display: flex;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #1BA136;
  cursor: pointer;
  
  &:hover {
    background: #169A2E;
  }
`;

const AdButtonContent = styled.div`
  display: flex;
  padding: 0px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const AdButtonText = styled.div`
  color: #FFF;
  text-align: center;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.168px;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #FFF;
  position: relative;
`;

const CompanyLogo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

// Компонент карточки клиники
const ClinicCard = ({ clinic, onCardClick }) => {
  const navigate = useNavigate();

  // Функция для отрисовки звездочек рейтинга
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon key={i}>
          <StarBackground />
          <StarFill 
            fill={i < Math.floor(rating) ? '16px' : i === Math.floor(rating) ? `${(rating % 1) * 16}px` : '0px'}
            color="#EFA701"
          />
        </StarIcon>
      );
    }
    return stars;
  };

  // Функция для обработки клика по слоту
  const handleSlotClick = (slot, event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке клиники
    event.stopPropagation(); // Останавливаем всплытие события
    
    // Переходим на визард с предзаполненными данными
    navigate(`/clinic/${clinic.id}/services`, {
      state: {
        prefilledData: {
          clinic: clinic,
          doctor: clinic.availableDoctor,
          selectedTime: slot,
          skipSteps: ['specialist'] // Пропускаем выбор специалиста, но проходим через услуги
        }
      }
    });
  };

  return (
    <ResultCardLink to={`/clinic/${clinic.id}`} onClick={onCardClick}>
      <CardContent>
        <CardTop>
          <CardMainContent>
            <HeaderSection>
              <TitleRow>
                <TitleContent>
                  <CompanyName>{clinic.name}</CompanyName>
                  {clinic.hasCrown && (
                    <CrownBadge>
                      <CrownIcon width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.42163 0.410057C7.76809 0.164421 8.23191 0.164421 8.57837 0.410058L9.49903 1.06279C9.69411 1.2011 9.9323 1.26493 10.1704 1.24269L11.2941 1.13773C11.7169 1.09823 12.1186 1.33015 12.2959 1.7161L12.7668 2.74172C12.8666 2.95904 13.041 3.13341 13.2583 3.2332L14.2839 3.70414C14.6699 3.88137 14.9018 4.28305 14.8623 4.70591L14.7573 5.8296C14.7351 6.0677 14.7989 6.30588 14.9372 6.50097L15.5899 7.42163C15.8356 7.76809 15.8356 8.23191 15.5899 8.57837L14.9372 9.49903C14.7989 9.69411 14.7351 9.9323 14.7573 10.1704L14.8623 11.2941C14.9018 11.7169 14.6699 12.1186 14.2839 12.2959L13.2583 12.7668C13.041 12.8666 12.8666 13.041 12.7668 13.2583L12.2959 14.2839C12.1186 14.6699 11.7169 14.9018 11.2941 14.8623L10.1704 14.7573C9.9323 14.7351 9.69411 14.7989 9.49903 14.9372L8.57837 15.5899C8.23191 15.8356 7.76809 15.8356 7.42163 15.5899L6.50097 14.9372C6.30588 14.7989 6.0677 14.7351 5.82959 14.7573L4.70591 14.8623C4.28305 14.9018 3.88137 14.6699 3.70414 14.2839L3.2332 13.2583C3.13341 13.041 2.95904 12.8666 2.74172 12.7668L1.7161 12.2959C1.33015 12.1186 1.09823 11.7169 1.13773 11.2941L1.24269 10.1704C1.26493 9.9323 1.2011 9.69411 1.06279 9.49903L0.410057 8.57837C0.164421 8.23191 0.164421 7.76809 0.410058 7.42163L1.06279 6.50097C1.2011 6.30588 1.26493 6.0677 1.24269 5.8296L1.13773 4.70591C1.09823 4.28305 1.33015 3.88137 1.7161 3.70414L2.74172 3.2332C2.95904 3.13341 3.13341 2.95904 3.2332 2.74172L3.70414 1.7161C3.88137 1.33014 4.28305 1.09823 4.70591 1.13773L5.8296 1.24269C6.0677 1.26493 6.30588 1.2011 6.50097 1.06279L7.42163 0.410057Z" fill="#1BA136"/>
                        <path d="M4 5L5 11H11L12 5L10 6L8 4L6 6L4 5Z" fill="white"/>
                      </CrownIcon>
                    </CrownBadge>
                  )}
                </TitleContent>
              </TitleRow>
              <Subtitle>
                <SubtitleContent>
                  <SubtitleText>{clinic.subtitle}</SubtitleText>
                </SubtitleContent>
              </Subtitle>
            </HeaderSection>
            
            <SecondaryLine>
              <SecondaryContent>
                <RatingSection>
                  <StarsContainer>
                    {renderStars(clinic.rating)}
                  </StarsContainer>
                  <RatingText>{clinic.rating}</RatingText>
                  <ReviewCount>{clinic.reviewCount} отзыв{clinic.reviewCount === 1 ? '' : clinic.reviewCount < 5 ? 'а' : 'ов'}</ReviewCount>
                </RatingSection>
                <RideTime>
                  <TimeIcon />
                  <TimeText>{clinic.time}</TimeText>
                </RideTime>
              </SecondaryContent>
            </SecondaryLine>
            
            <AddressLine>
              <AddressText>{clinic.address}</AddressText>
            </AddressLine>
            
            {clinic.locations && (
              <LocationsText>{clinic.locations}</LocationsText>
            )}
            
            {/* Для обычных клиник (без короны) - показываем кнопку "Записаться" только если есть онлайн запись */}
            {!clinic.hasCrown && clinic.hasOnlineBooking && (
              <BookingButton>
                <BookingButtonText>Записаться</BookingButtonText>
              </BookingButton>
            )}
            
            {/* Для рекламодателей (с короной) с онлайн записью - показываем доступного врача и слоты */}
            {clinic.hasCrown && clinic.hasOnlineBooking && clinic.availableDoctor && (
              <DoctorSection>
                <DoctorInfo style={{ marginLeft: 0 }}>
                  <DoctorName>{clinic.availableDoctor.name}</DoctorName>
                  <DoctorSpecialty>{clinic.availableDoctor.specialty}</DoctorSpecialty>
                  <DoctorExperience>{clinic.availableDoctor.experience}</DoctorExperience>
                  
                  <PriceSection>
                    <PriceText>{clinic.availableDoctor.price}</PriceText>
                    {clinic.availableDoctor.firstVisitPrice && (
                      <FirstVisitBadge>
                        <CheckIcon />
                        <FirstVisitText>Цена за первый приём</FirstVisitText>
                      </FirstVisitBadge>
                    )}
                  </PriceSection>
                  
                  <SlotsSection>
                    <SlotsDate>{clinic.availableDoctor.todaySlots}</SlotsDate>
                    <SlotsContainer>
                      {clinic.availableDoctor.availableSlots?.map((slot, index) => (
                        <SlotButton key={index} onClick={(e) => handleSlotClick(slot, e)}>
                          <SlotText>{slot}</SlotText>
                        </SlotButton>
                      ))}
                    </SlotsContainer>
                  </SlotsSection>
                </DoctorInfo>
              </DoctorSection>
            )}
          </CardMainContent>
        </CardTop>
        
        {/* Рекламный блок показывается для рекламодателей без онлайн записи */}
        {clinic.hasAd && !clinic.hasOnlineBooking && (
          <AdSection>
            <AdContent>
              <AdTextContent>
                <AdText>{clinic.adText}</AdText>
                <AdDisclaimer>Реклама • Есть противопоказания, нужна консультация врача</AdDisclaimer>
                <div style={{ padding: '6px 0px' }}>
                  <AdButton>
                    <AdButtonContent>
                      <AdButtonText>{clinic.adButtonText || clinic.adText}</AdButtonText>
                    </AdButtonContent>
                  </AdButton>
                </div>
              </AdTextContent>
            </AdContent>
            <LogoContainer>
              <CompanyLogo src={clinic.logo} />
            </LogoContainer>
          </AdSection>
        )}
      </CardContent>
    </ResultCardLink>
  );
};

export default ClinicCard; 