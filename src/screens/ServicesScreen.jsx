import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useServices, useClinic } from '../hooks/useApi';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), 
              url('/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg') lightgray 50% / cover no-repeat;
  position: relative;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
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
  background: #F1F1F1;
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

const SearchSection = styled.div`
  display: flex;
  padding: 4px 16px 12px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
`;

const SearchField = styled.div`
  display: flex;
  height: 48px;
  padding: 13px 12px 15px 16px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 12px;
  background: #FFF;
  position: relative;
`;

const SearchInput = styled.input`
  flex: 1 0 0;
  color: #898989;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
  border: none;
  outline: none;
  background: transparent;
  
  &::placeholder {
    color: #898989;
  }
`;

const SearchIcon = styled.div`
  display: flex;
  width: 24px;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &::after {
    content: '';
    width: 19px;
    height: 19px;
    background-color: #898989;
    mask: url("data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z' stroke='%23898989' stroke-width='2'/%3E%3Cpath d='M15 15L18 18' stroke='%23898989' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat center;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
  padding: 0 16px;
  flex: 1;
  overflow-y: auto;
`;

const SelectedSection = styled.div`
  display: flex;
  padding-top: 4px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  position: relative;
  margin-bottom: 8px;
`;

const SectionHeader = styled.div`
  display: flex;
  padding: 15px 12px 11px 4px;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  position: relative;
`;

const SectionTitleText = styled.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  padding-top: 2px;
`;

const ExpandIcon = styled.div`
  display: flex;
  height: 0.001px;
  align-items: flex-start;
  position: relative;
  
  &::after {
    content: '';
    width: 17px;
    height: 10px;
    background-color: #B8B8B8;
    position: absolute;
    left: 0px;
    top: ${props => props.expanded ? '2px' : '8px'};
    clip-path: ${props => props.expanded 
      ? 'polygon(0% 100%, 50% 0%, 100% 100%)' 
      : 'polygon(0% 0%, 50% 100%, 100% 0%)'};
    transform: ${props => props.expanded ? 'none' : 'none'};
  }
`;

const ServicesList = styled.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
`;

const ServiceItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  position: relative;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.12);
  }
`;

const ServiceContent = styled.div`
  display: flex;
  padding: 13px 16px 15px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  position: relative;
`;

const CheckboxContainer = styled.div`
  display: flex;
  height: 20px;
  padding-top: 2px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Checkbox = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  ${props => props.checked ? `
    &::before {
      content: '';
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #1BA136;
      position: absolute;
      left: 0;
      top: 0;
    }
    
    &::after {
      content: '✓';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 14px;
      font-weight: bold;
    }
  ` : `
    &::before {
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(20, 20, 20, 0.06);
      position: absolute;
      left: 2px;
      top: 2px;
    }
  `}
`;

const ServiceDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  position: relative;
`;

const ServiceName = styled.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const ServicePrice = styled.div`
  color: #898989;
  text-align: center;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const Footer = styled.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
`;

const Attribution = styled.div`
  display: flex;
  padding: 10px 0px 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  position: relative;
`;

const AttributionText = styled.div`
  color: #B8B8B8;
  text-align: center;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const ContinueButton = styled.button`
  display: flex;
  padding: 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #FFF;
  border: none;
  position: relative;
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

const PrimaryButton = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  padding: 13px 16px 15px 16px;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  background: #1DB93C;
  border-radius: 10px;
  position: relative;
`;

const ButtonText = styled.div`
  flex: 1 0 0;
  color: #FFF;
  text-align: center;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const HomeIndicator = styled.div`
  display: flex;
  height: 34px;
  padding: 21px 114px 9px 115px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  position: relative;
  background: #FFF;
  
  &::after {
    content: '';
    width: 146px;
    height: 4px;
    border-radius: 100px;
    background: #000;
    position: absolute;
  }
`;

const ServicesScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clinicId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [selectedServices, setSelectedServices] = useState(new Set());

  // Проверяем предзаполненные данные
  const prefilledData = location.state?.prefilledData;
  
  // Используем API хуки для загрузки данных
  const { data: servicesData = [], isLoading: servicesLoading, error: servicesError } = useServices(clinicId);
  const { data: clinicData, isLoading: clinicLoading, error: clinicError } = useClinic(clinicId);

  // Обрабатываем предзаполненные данные при загрузке
  useEffect(() => {
    if (prefilledData) {
      console.log('🔸 ServicesScreen: Processing prefilledData:', prefilledData);
      
      // Если есть предвыбранная услуга, добавляем её в выбранные
      if (prefilledData.service) {
        console.log('🔸 ServicesScreen: Pre-selecting service:', prefilledData.service);
        setSelectedServices(new Set([prefilledData.service.id]));
      }
      
      // Если нужно пропустить выбор услуг, сразу переходим дальше
      if (prefilledData.skipSteps?.includes('service')) {
        console.log('🔸 ServicesScreen: Skipping service selection step');
        console.log('🔸 ServicesScreen: Services loading:', servicesLoading, 'Clinic loading:', clinicLoading);
        console.log('🔸 ServicesScreen: Clinic data:', clinicData);
        console.log('🔸 ServicesScreen: Prefilled clinic:', prefilledData.clinic);
        
        const fallbackClinicId = clinicId || prefilledData.clinic.id || '1';
        const selectedServicesData = prefilledData.service ? [prefilledData.service] : [];
        const finalClinicData = clinicData || prefilledData.clinic;
        
        console.log('🔸 ServicesScreen: Navigating to specialists with:', {
          fallbackClinicId,
          selectedServicesData,
          finalClinicData,
          prefilledData
        });
        
        // Переходим к выбору специалиста с предзаполненными данными сразу
        setTimeout(() => {
          navigate(`/clinic/${fallbackClinicId}/specialists`, { 
            state: { 
              selectedServices: selectedServicesData,
              clinicData: finalClinicData,
              prefilledData: {
                ...prefilledData,
                selectedServices: selectedServicesData
              }
            } 
          });
        }, 100); // Небольшая задержка для корректного перехода
      }
    }
  }, [prefilledData, navigate, clinicId, clinicData, servicesLoading, clinicLoading]);



  // Преобразуем данные услуг для использования в компоненте
  const services = servicesData.map(service => ({
    id: service.id,
    name: service.name,
    description: service.description,
    price: service.price,
    duration: service.duration,
    category: service.category
  }));

  // Извлекаем уникальные категории
  const categories = [...new Set(services.map(service => service.category))];

  const handleBack = () => {
    navigate(-1);
  };

  const handleClose = () => {
    navigate('/');
  };

  const toggleCategory = (category) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleService = (serviceId) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(serviceId)) {
      newSelected.delete(serviceId);
    } else {
      newSelected.add(serviceId);
    }
    setSelectedServices(newSelected);
  };

  const getFilteredServices = () => {
    return services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getSelectedServicesData = () => {
    return services.filter(service => selectedServices.has(service.id));
  };

  const getTotalPrice = () => {
    const selectedServicesData = getSelectedServicesData();
    return selectedServicesData.reduce((total, service) => {
      const price = parseInt(service.price.replace(/[^\d]/g, '') || '0');
      return total + price;
    }, 0);
  };

  const handleContinue = () => {
    // Navigate to next screen (specialist selection) with selected services
    const selectedServicesData = getSelectedServicesData();
    const fallbackClinicId = clinicId || prefilledData?.clinic.id || '1';
    
    // Если есть предзаполненные данные, передаем их дальше
    if (prefilledData) {
      navigate(`/clinic/${fallbackClinicId}/specialists`, { 
        state: { 
          selectedServices: selectedServicesData,
          clinicData: clinicData || prefilledData.clinic,
          prefilledData: {
            ...prefilledData,
            selectedServices: selectedServicesData
          }
        } 
      });
    } else {
      navigate(`/clinic/${fallbackClinicId}/specialists`, { 
        state: { 
          selectedServices: selectedServicesData,
          clinicData: clinicData
        } 
      });
    }
  };

  const filteredServices = getFilteredServices();
  const selectedServicesData = getSelectedServicesData();
  const hasSelectedServices = selectedServices.size > 0;

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
              <Title>Услуги</Title>
            </HeaderTitle>
            <NavButton onClick={handleClose}>
              <CloseIcon />
            </NavButton>
          </NavContent>
        </NavBar>

        <ContentArea>
          <SearchSection>
            <SearchField>
              <SearchInput
                type="text"
                placeholder="Поиск"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon />
            </SearchField>
          </SearchSection>

          <ServicesContainer>
            {hasSelectedServices && (
              <SelectedSection>
                <SectionHeader>
                  <SectionTitle>
                    <SectionTitleText>Выбранные</SectionTitleText>
                  </SectionTitle>
                </SectionHeader>
                <ServicesList>
                  {selectedServicesData.map((service) => (
                    <ServiceItem key={`selected-${service.id}`} onClick={() => toggleService(service.id)}>
                      <ServiceContent>
                        <CheckboxContainer>
                          <Checkbox checked={true} />
                        </CheckboxContainer>
                        <ServiceDetails>
                          <ServiceName>{service.name}</ServiceName>
                          <ServicePrice>{service.price}</ServicePrice>
                        </ServiceDetails>
                      </ServiceContent>
                    </ServiceItem>
                  ))}
                </ServicesList>
              </SelectedSection>
            )}

            {categories.map((category) => {
              const categoryServices = filteredServices.filter(service => service.category === category);
              if (categoryServices.length === 0) return null;
              
              const isExpanded = expandedCategories.has(category);
              
              return (
                <SelectedSection key={category}>
                  <SectionHeader clickable onClick={() => toggleCategory(category)}>
                    <SectionTitle>
                      <SectionTitleText>{category}</SectionTitleText>
                    </SectionTitle>
                    <ExpandIcon expanded={isExpanded} />
                  </SectionHeader>
                  
                  {isExpanded && (
                    <ServicesList>
                      {categoryServices.map((service) => (
                        <ServiceItem key={service.id} onClick={() => toggleService(service.id)}>
                          <ServiceContent>
                            <CheckboxContainer>
                              <Checkbox checked={selectedServices.has(service.id)} />
                            </CheckboxContainer>
                            <ServiceDetails>
                              <ServiceName>{service.name}</ServiceName>
                              <ServicePrice>{service.price}</ServicePrice>
                            </ServiceDetails>
                          </ServiceContent>
                        </ServiceItem>
                      ))}
                    </ServicesList>
                  )}
                </SelectedSection>
              );
            })}
          </ServicesContainer>

          <Footer>
            <Attribution>
              <AttributionText>В сотрудничестве с СберЗдоровье</AttributionText>
              {/* YClients logo would go here */}
            </Attribution>
          </Footer>
        </ContentArea>

        {hasSelectedServices && (
          <ContinueButton>
            <ButtonContainer>
              <PrimaryButton onClick={handleContinue}>
                <ButtonContent>
                  <ButtonText>Продолжить • {getTotalPrice().toLocaleString()} ₽</ButtonText>
                </ButtonContent>
              </PrimaryButton>
            </ButtonContainer>
            <HomeIndicator />
          </ContinueButton>
        )}
      </BottomSheet>
    </Container>
  );
};

export default ServicesScreen; 