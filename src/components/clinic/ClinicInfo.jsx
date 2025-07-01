import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { typography } from '../../styles/mixins';

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  position: relative;
`;

const TopSection = styled.div`
  display: flex;
  padding: 0px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
`;

const FriendsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  position: relative;
  margin-bottom: 8px;
`;

const FriendsAvatars = styled.div`
  display: flex;
  align-items: center;
  gap: -8px;
  position: relative;
`;

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 2px solid #fff;
  background: url('/assets/wizard/angelika.jpg') center / cover no-repeat;
  position: relative;
  margin-left: ${props => (props.index > 0 ? '-8px' : '0')};
  z-index: ${props => 10 - props.index};
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const ClinicName = styled.div`
  color: ${theme.colors.textPrimary};
  ${typography.title2}
  font-weight: ${theme.fontWeights.medium};
`;

const CrownBadge = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 4px;
  border-radius: ${theme.borderRadius.small};
  background: ${theme.colors.brandSuccess};
`;

const CrownIcon = styled.svg`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

const SubtitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const ClinicRating = styled.div`
  color: ${theme.colors.textSecondary};
  ${typography.footnote}
`;

const ClinicReviews = styled.div`
  color: ${theme.colors.textSecondary};
  ${typography.footnote}
`;

const ClinicDistance = styled.div`
  color: ${theme.colors.textSecondary};
  ${typography.footnote}
`;

// Стили для CTA секции
const CtaSection = styled.div`
  display: flex;
  padding: 0px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const CtaButton = styled.button`
  display: flex;
  height: 44px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: #1ba136;
  border: none;
  cursor: pointer;

  &:hover {
    background: #149929;
  }
`;

const CtaButtonText = styled.div`
  color: #fff;
  text-align: center;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.168px;
`;

// Стили для секции со слотами
const SlotsSection = styled.div`
  display: flex;
  padding: 0px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const DoctorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const DoctorName = styled.div`
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const DoctorSpecialty = styled.div`
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.168px;
`;

const SlotsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const SlotButton = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  background: #fff;
  cursor: pointer;

  &:hover {
    background: #f8f9fa;
    border-color: #1ba136;
  }
`;

const SlotText = styled.div`
  color: #141414;
  text-align: center;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.168px;
`;

const ClinicInfo = ({ clinic, availableDoctor, showCrown = false, onBookingClick, onSlotClick }) => {
  if (!clinic) {
    return null;
  }

  const renderStars = rating => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>⭐</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half">⭐</span>);
    }

    return stars;
  };

  return (
    <HeaderContent>
      <TopSection>
        <TopRow>
          <FriendsSection>
            <FriendsAvatars>
              {[0, 1, 2, 3].map(index => (
                <Avatar key={index} index={index} />
              ))}
            </FriendsAvatars>
          </FriendsSection>

          <TitleSection>
            <TitleRow>
              <ClinicName>{clinic.name}</ClinicName>
              {showCrown && (
                <CrownBadge>
                  <CrownIcon fill="none" height="16" viewBox="0 0 16 16" width="16">
                    <path
                      d="M7.42163 0.410057C7.76809 0.164421 8.23191 0.164421 8.57837 0.410058L9.49903 1.06279C9.69411 1.2011 9.9323 1.26493 10.1704 1.24269L11.2941 1.13773C11.7169 1.09823 12.1186 1.33015 12.2959 1.7161L12.7668 2.74172C12.8666 2.95904 13.041 3.13341 13.2583 3.2332L14.2839 3.70414C14.6699 3.88137 14.9018 4.28305 14.8623 4.70591L14.7573 5.8296C14.7351 6.0677 14.7989 6.30588 14.9372 6.50097L15.5899 7.42163C15.8356 7.76809 15.8356 8.23191 15.5899 8.57837L14.9372 9.49903C14.7989 9.69411 14.7351 9.9323 14.7573 10.1704L14.8623 11.2941C14.9018 11.7169 14.6699 12.1186 14.2839 12.2959L13.2583 12.7668C13.041 12.8666 12.8666 13.041 12.7668 13.2583L12.2959 14.2839C12.1186 14.6699 11.7169 14.9018 11.2941 14.8623L10.1704 14.7573C9.9323 14.7351 9.69411 14.7989 9.49903 14.9372L8.57837 15.5899C8.23191 15.8356 7.76809 15.8356 7.42163 15.5899L6.50097 14.9372C6.30588 14.7989 6.0677 14.7351 5.82959 14.7573L4.70591 14.8623C4.28305 14.9018 3.88137 14.6699 3.70414 14.2839L3.2332 13.2583C3.13341 13.041 2.95904 12.8666 2.74172 12.7668L1.7161 12.2959C1.33015 12.1186 1.09823 11.7169 1.13773 11.2941L1.24269 10.1704C1.26493 9.9323 1.2011 9.69411 1.06279 9.49903L0.410057 8.57837C0.164421 8.23191 0.164421 7.76809 0.410058 7.42163L1.06279 6.50097C1.2011 6.30588 1.26493 6.0677 1.24269 5.8296L1.13773 4.70591C1.09823 4.28305 1.33015 3.88137 1.7161 3.70414L2.74172 3.2332C2.95904 3.13341 3.13341 2.95904 3.2332 2.74172L3.70414 1.7161C3.88137 1.33014 4.28305 1.09823 4.70591 1.13773L5.8296 1.24269C6.0677 1.26493 6.30588 1.2011 6.50097 1.06279L7.42163 0.410057Z"
                      fill="#1BA136"
                    />
                  </CrownIcon>
                </CrownBadge>
              )}
            </TitleRow>

            <SubtitleRow>
              <ClinicRating>
                {renderStars(clinic.rating)} {clinic.rating}
              </ClinicRating>
              <ClinicReviews>• {clinic.reviewCount} отзывов</ClinicReviews>
              <ClinicDistance>• {clinic.distance}</ClinicDistance>
            </SubtitleRow>
          </TitleSection>
        </TopRow>
      </TopSection>

      {/* Для клиник БЕЗ короны с онлайн записью - показываем CTA кнопку */}
      {!clinic.hasCrown && clinic.hasOnlineBooking && (
        <CtaSection>
          <CtaButton onClick={onBookingClick}>
            <CtaButtonText>Записаться онлайн</CtaButtonText>
          </CtaButton>
        </CtaSection>
      )}

      {/* Для клиник С короной с онлайн записью - показываем доступного врача и слоты */}
      {clinic.hasCrown && clinic.hasOnlineBooking && availableDoctor && (
        <SlotsSection>
          <DoctorInfo>
            <DoctorName>{availableDoctor.name}</DoctorName>
            <DoctorSpecialty>{availableDoctor.specialty}</DoctorSpecialty>

            {availableDoctor.availableSlots && availableDoctor.availableSlots.length > 0 && (
              <SlotsContainer>
                {availableDoctor.availableSlots.map((slot, index) => (
                  <SlotButton key={index} onClick={() => onSlotClick?.(slot, availableDoctor)}>
                    <SlotText>{slot}</SlotText>
                  </SlotButton>
                ))}
              </SlotsContainer>
            )}
          </DoctorInfo>
        </SlotsSection>
      )}
    </HeaderContent>
  );
};

export default ClinicInfo;
