import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useDoctorsByClinic, useClinic } from '../hooks/useApi';

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

const BackButton = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.06);
  border: none;
  border-radius: 8px;
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

const AnySpecialistButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  background: #fff;
  box-shadow:
    0px 0px 0px 0.5px rgba(0, 0, 0, 0.04),
    0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  border: none;
  padding: 13px 16px 15px 16px;
  cursor: pointer;
  color: #141414;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

const SpecialistCard = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: #fff;
  box-shadow:
    0px 0px 0px 0.5px rgba(0, 0, 0, 0.04),
    0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  padding: 15px 16px;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 0.5px solid rgba(137, 137, 137, 0.4);
  object-fit: cover;
`;

const SpecialistInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  flex: 1 0 0;
`;

const SpecialistName = styled.div`
  color: #141414;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

const SpecialistSpecialty = styled.div`
  color: #898989;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Rating = styled.span`
  color: #141414;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
`;

const ReviewCount = styled.span`
  color: #898989;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
`;

function SpecialistsScreen() {
  const navigate = useNavigate();
  const { clinicId } = useParams();
  const location = useLocation();

  const photos = ['/assets/Photo1.png', '/assets/Photo2.png'];

  // Получаем данные о выбранных услугах, клинике и предзаполненные данные из state
  const { selectedServices = [], clinicData = null, prefilledData = null } = location.state || {};

  // Используем API хуки для загрузки данных
  const { data: specialistsData = [], isLoading: loading, error } = useDoctorsByClinic(clinicId);
  const { data: currentClinicData } = useClinic(clinicId);

  // Если есть предзаполненные данные и нужно пропустить выбор специалиста
  useEffect(() => {
    console.log('🔸 SpecialistsScreen: Mounted with prefilledData:', prefilledData);

    if (prefilledData && prefilledData.skipSteps?.includes('specialist')) {
      console.log('🔸 SpecialistsScreen: Skipping specialist selection step');

      const fallbackClinicId = clinicId || prefilledData.clinic.id || '1';
      const navigationState = {
        selectedServices: prefilledData.selectedServices || [],
        selectedSpecialist: prefilledData.specialist || prefilledData.doctor,
        clinicData: clinicData || prefilledData.clinic,
        prefilledData,
      };

      console.log('🔸 SpecialistsScreen: Navigating to datetime with:', navigationState);

      navigate(`/clinic/${fallbackClinicId}/datetime`, {
        state: navigationState,
      });
      return;
    }
  }, [prefilledData, navigate, clinicId, clinicData]);

  // Добавляем фотографии к специалистам
  const specialists = specialistsData.map((specialist, index) => ({
    ...specialist,
    photo: photos[index % photos.length],
  }));

  const handleBack = () => navigate(-1);

  const handleSpecialistSelect = specialist => {
    const fallbackClinicId = clinicId || prefilledData?.clinic.id || '1';
    const navigationState = {
      selectedServices,
      selectedSpecialist: specialist,
      clinicData: clinicData || currentClinicData || prefilledData?.clinic,
    };

    // Если есть предзаполненные данные, передаем их дальше
    if (prefilledData) {
      navigationState.prefilledData = {
        ...prefilledData,
        doctor: specialist,
        selectedServices,
      };
    }

    navigate(`/clinic/${fallbackClinicId}/datetime`, { state: navigationState });
  };

  const handleAnySpecialist = () => {
    const fallbackClinicId = clinicId || prefilledData?.clinic.id || '1';
    const navigationState = {
      selectedServices,
      selectedSpecialist: null,
      clinicData: clinicData || currentClinicData || prefilledData?.clinic,
    };

    // Если есть предзаполненные данные, передаем их дальше
    if (prefilledData) {
      navigationState.prefilledData = {
        ...prefilledData,
        doctor: null,
        selectedServices,
      };
    }

    navigate(`/clinic/${fallbackClinicId}/datetime`, { state: navigationState });
  };

  if (loading) {
    return (
      <Container>
        <BottomSheet>
          <div style={{ padding: '20px', textAlign: 'center' }}>Загрузка...</div>
        </BottomSheet>
      </Container>
    );
  }

  return (
    <Container>
      <BottomSheet>
        <Dragger />
        <NavBar>
          <NavContent>
            <BackButton onClick={handleBack}>
              <BackIcon />
            </BackButton>
            <HeaderTitle>
              <Title>Специалисты</Title>
            </HeaderTitle>
          </NavContent>
        </NavBar>

        <ContentArea>
          <Content>
            <AnySpecialistButton onClick={handleAnySpecialist}>
              Любой свободный специалист
            </AnySpecialistButton>

            {specialists.map(specialist => (
              <SpecialistCard
                key={specialist.id}
                onClick={() => handleSpecialistSelect(specialist)}
              >
                <Avatar alt={specialist.name} src={specialist.photo} />
                <SpecialistInfo>
                  <SpecialistName>{specialist.name}</SpecialistName>
                  <SpecialistSpecialty>{specialist.specialty}</SpecialistSpecialty>
                  {specialist.rating && (
                    <RatingContainer>
                      <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                        <path
                          clipRule="evenodd"
                          d="M9.57326 5.04119C9.71094 5.45481 10.1067 5.73472 10.553 5.73472H14.6896C14.9897 5.73472 15.1146 6.10909 14.8715 6.28075L11.5247 8.64946C11.1639 8.90522 11.0129 9.35808 11.1506 9.7717L12.4287 13.6034C12.5217 13.8816 12.195 14.1128 11.9519 13.9411L8.60551 11.5724C8.24426 11.3171 7.75552 11.3171 7.39472 11.5724L4.04788 13.9411C3.80483 14.1128 3.47856 13.8816 3.57108 13.6034L4.84917 9.7717C4.98729 9.35808 4.83633 8.90522 4.47508 8.64946L1.12825 6.28075C0.885644 6.10909 1.01004 5.73472 1.31064 5.73472H5.44726C5.89351 5.73472 6.28884 5.45481 6.42697 5.04119L7.70505 1.20864C7.79802 0.930453 8.20221 0.930453 8.29473 1.20864L9.57326 5.04119Z"
                          fill="#EFA701"
                          fillRule="evenodd"
                        />
                      </svg>
                      <Rating>{specialist.rating}</Rating>
                      <ReviewCount>{specialist.reviewCount} оценок</ReviewCount>
                    </RatingContainer>
                  )}
                </SpecialistInfo>
              </SpecialistCard>
            ))}
          </Content>
        </ContentArea>
      </BottomSheet>
    </Container>
  );
}

export default SpecialistsScreen;
