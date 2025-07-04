import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearchClinics } from '../hooks/useApi';
import ClinicCard from '../components/ClinicCard';
import { MapScreenLayout } from '../components/layout';

// Удалены Container, MapBackground, ResultsContainer - заменены на MapScreenLayout

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const BottomSheetHeader = styled.div`
  display: flex;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: rgba(241, 241, 241, 0.95);
  backdrop-filter: blur(20px);
  position: relative;
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
    background: rgba(20, 20, 20, 0.09);
    position: relative;
  }
`;

const NavBar = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const NavBarInner = styled.div`
  display: flex;
  padding: 0px 16px 16px 16px;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  position: relative;
`;

const SearchFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`;

const SearchField = styled.div`
  display: flex;
  height: 40px;
  padding: 10px 8px;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
  border-radius: 8px;
  background: #fff;
  position: relative;
`;

const SearchIconContainer = styled.div`
  display: flex;
  width: 24px;
  height: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  position: absolute;
  left: 0px;
  top: -2px;
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m19 19-3.5-3.5' stroke='%23898989' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='11' cy='11' r='8' stroke='%23898989' stroke-width='2'/%3E%3C/svg%3E");
`;

const SearchInput = styled.input`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
  position: relative;
  border: none;
  outline: none;
  background: transparent;

  &::placeholder {
    color: #898989;
  }
`;

const SalutIcon = styled.div`
  display: flex;
  width: 24px;
  height: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SalutImage = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 6px;
  position: absolute;
  left: 0px;
  top: -2px;
`;

const ActionButton = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
`;

const ButtonInner = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.06);
  position: relative;
`;

const ButtonIcon = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// Фильтры
const FiltersContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 12px 16px;
  align-items: center;
  gap: 8px;
  background: rgba(241, 241, 241, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  position: sticky;
  top: 78px;
  z-index: 99;
  backdrop-filter: blur(20px);

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const FilterButton = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 16px;
  background: ${props => (props.$active ? '#E8E8E8' : '#FFFFFF')};
  border: ${props => (props.$active ? '1px solid #D0D0D0' : '1px solid rgba(0, 0, 0, 0.12)')};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 32px;

  &:hover {
    background: ${props => (props.$active ? '#E8E8E8' : '#F5F5F5')};
  }
`;

const FilterIcon = styled.div`
  width: 18px;
  height: 18px;
  background: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4h14M2 9h14M2 14h14' stroke='%23666' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E")
    no-repeat center;
  background-size: contain;
`;

const FilterLabel = styled.span`
  color: ${props => (props.$active ? '#333' : '#666')};
  font-family:
    'SB Sans Text',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  font-weight: ${props => (props.$active ? '600' : '500')};
  line-height: 1.2;
`;

const FilterArrow = styled.span`
  margin-left: 4px;
  color: ${props => (props.$active ? '#333' : '#666')};
  font-size: 11px;
  font-weight: 500;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const DropdownContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  width: 90%;
  max-width: 320px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const DropdownOption = styled.button`
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  padding: 8px 12px;
  color: #141414;
  font-family: 'SB Sans Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: rgba(20, 20, 20, 0.06);
  }
`;

const DateInput = styled.input`
  width: 100%;
  margin-top: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  font-size: 14px;
`;

const CloseIcon = styled.div`
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  fill: #141414;
  position: absolute;
  left: 5px;
  top: 5px;
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 6L6 18M6 6l12 12' stroke='%23141414' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  background: #f1f1f1;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const ResultsList = styled.div`
  display: flex;
  padding: 12px 16px 60px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  background: #f1f1f1;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const SushiBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const SushiBannerCard = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  background: #fff;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const SushiImageContainer = styled.div`
  display: flex;
  padding: 12px 0px 12px 16px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  position: relative;
`;

const SushiImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 40px;
  border: 0.5px solid rgba(137, 137, 137, 0.3);
  position: relative;
`;

const SushiContent = styled.div`
  display: flex;
  padding: 0px 16px 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
  min-width: 0;
  overflow-x: hidden;
`;

const SushiTitle = styled.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  padding: 14px 0px 4px 0px;
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const SushiDescription = styled.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  padding-bottom: 4px;
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const SushiButton = styled.div`
  color: #5a5a5a;
  font-family: 'SB Sans Text';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
  padding: 6px 0px 16px 0px;
  position: relative;
  cursor: pointer;
`;

const SushiDisclaimer = styled.div`
  display: flex;
  padding: 0px 4px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  position: relative;
`;

const DisclaimerText = styled.div`
  height: 16px;
  flex: 1 0 0;
  overflow: hidden;
  color: #b8b8b8;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'SB Sans Text';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.176px;
  padding: 7px 0px 1px 0px;
  position: relative;
`;

const SearchPageScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    nearby: false,
    open: false,
    rating: '',
    friends: false,
    onlineBooking: false,
    specialty: '',
    date: '',
  });

  const [showRatingSheet, setShowRatingSheet] = useState(false);
  const [showSpecialtySheet, setShowSpecialtySheet] = useState(false);
  const [showDateSheet, setShowDateSheet] = useState(false);

  // Инициализация поискового запроса из URL параметров
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const queryParam = urlParams.get('q');
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [location.search]);

  // Используем API хук для получения данных клиник
const { data: searchResults = [], isLoading, error } = useSearchClinics(searchQuery, filters);

  const handleClose = () => {
    navigate('/');
  };

  const handleFilterToggle = filterName => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const openRatingSheet = () => setShowRatingSheet(true);
  const openSpecialtySheet = () => setShowSpecialtySheet(true);
  const openDateSheet = () => setShowDateSheet(true);

  const selectRating = value => {
    setFilters(prev => ({ ...prev, rating: value }));
    setShowRatingSheet(false);
  };

  const selectSpecialty = value => {
    setFilters(prev => ({ ...prev, specialty: value }));
    setShowSpecialtySheet(false);
  };

  const selectDate = value => {
    setFilters(prev => ({ ...prev, date: value }));
    setShowDateSheet(false);
  };

  const handleSpecialtySelect = () => {
    openSpecialtySheet();
  };

  const handleDateSelect = () => {
    openDateSheet();
  };


  return (
    <>
    <MapScreenLayout mapImage="/assets/images/dbeabc5ac0f4d8edc9feb4b0b06f4520eafc61ab_750.jpg">
      <TopSection>
        <BottomSheetHeader>
          <Dragger />
          <NavBar>
            <NavBarInner>
              <SearchFieldContainer>
                <SearchField>
                  <SearchIconContainer>
                    <SearchIcon />
                  </SearchIconContainer>
                  <SearchInput
                    placeholder="Поиск"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                  <SalutIcon>
                    <SalutImage
                      alt=""
                      src="/assets/images/0235e2ec7b64e89803c2ebe320dbddf014cebf7a_48.jpg"
                    />
                  </SalutIcon>
                </SearchField>
              </SearchFieldContainer>
              <ActionButton onClick={handleClose}>
                <ButtonInner>
                  <ButtonIcon>
                    <CloseIcon />
                  </ButtonIcon>
                </ButtonInner>
              </ActionButton>
            </NavBarInner>
          </NavBar>
        </BottomSheetHeader>
      </TopSection>

      {/* Фильтры */}
      <FiltersContainer>
        {/* Кнопка с иконкой фильтра */}
        <FilterButton>
          <FilterIcon />
        </FilterButton>

        {/* Кнопка "Рядом" */}
        <FilterButton $active={filters.nearby} onClick={() => handleFilterToggle('nearby')}>
          <FilterLabel $active={filters.nearby}>Рядом</FilterLabel>
        </FilterButton>

        {/* Кнопка "Онлайн запись" */}
        <FilterButton
          $active={filters.onlineBooking}
          onClick={() => handleFilterToggle('onlineBooking')}
        >
          <FilterLabel $active={filters.onlineBooking}>Онлайн запись</FilterLabel>
        </FilterButton>

        {/* Кнопка "Открыто" */}
        <FilterButton $active={filters.open} onClick={() => handleFilterToggle('open')}>
          <FilterLabel $active={filters.open}>Открыто</FilterLabel>
        </FilterButton>

        {/* Кнопка "Рейтинг" */}
        <FilterButton $active={!!filters.rating} onClick={openRatingSheet}>
          <FilterLabel $active={!!filters.rating}>
            {filters.rating ? `Рейтинг ${filters.rating}+` : 'Рейтинг'}
          </FilterLabel>
          <FilterArrow $active={!!filters.rating}>▼</FilterArrow>
        </FilterButton>

        {/* Кнопка "Специализация" */}
        <FilterButton $active={!!filters.specialty} onClick={handleSpecialtySelect}>
          <FilterLabel $active={!!filters.specialty}>
            {filters.specialty || 'Специализация'}
          </FilterLabel>
        </FilterButton>

        {/* Кнопка "Время" */}
        <FilterButton $active={!!filters.date} onClick={handleDateSelect}>
          <FilterLabel $active={!!filters.date}>
            {filters.date === 'today'
              ? 'Сегодня'
              : filters.date === 'tomorrow'
              ? 'Завтра'
              : filters.date || 'Время'}
          </FilterLabel>
        </FilterButton>

        {/* Кнопка "Были друзья" */}
        <FilterButton $active={filters.friends} onClick={() => handleFilterToggle('friends')}>
          <FilterLabel $active={filters.friends}>Были друзья</FilterLabel>
        </FilterButton>
      </FiltersContainer>

      <ContentSection>
        <ResultsList>
          {isLoading && (
            <div style={{ padding: '20px', textAlign: 'center', color: '#898989' }}>
              Загрузка...
            </div>
          )}

          {error && (
            <div style={{ padding: '20px', textAlign: 'center', color: '#FF0000' }}>
              Ошибка загрузки данных: {error.message}
            </div>
          )}

          {!isLoading && !error && searchResults.length === 0 && (
            <div style={{ padding: '20px', textAlign: 'center', color: '#898989' }}>
              Ничего не найдено для "{searchQuery}"
            </div>
          )}

          {searchResults.map(result => (
            <ClinicCard key={result.id} clinic={result} />
          ))}

          {/* Медицинский баннер */}
          <SushiBanner>
            <SushiBannerCard>
              <SushiImageContainer>
                <SushiImage alt="" src="/assets/clinic_placeholder.svg" />
              </SushiImageContainer>
              <SushiContent>
                <SushiTitle>МедКлиника «ЗдоровьеПлюс»</SushiTitle>
                <SushiDescription>
                  Бесплатная консультация терапевта при записи онлайн до конца месяца
                </SushiDescription>
                <SushiButton>Записаться бесплатно</SushiButton>
              </SushiContent>
            </SushiBannerCard>
            <SushiDisclaimer>
              <DisclaimerText>
                Реклама • Есть противопоказания, требуется консультация специалиста
              </DisclaimerText>
            </SushiDisclaimer>
          </SushiBanner>
        </ResultsList>
      </ContentSection>
    </MapScreenLayout>

    {showRatingSheet && (
      <Overlay onClick={() => setShowRatingSheet(false)}>
        <DropdownContainer onClick={e => e.stopPropagation()}>
          <DropdownOption onClick={() => selectRating('4')}>Рейтинг 4+</DropdownOption>
          <DropdownOption onClick={() => selectRating('4.5')}>Рейтинг 4.5+</DropdownOption>
          <DropdownOption onClick={() => selectRating('5')}>Только 5</DropdownOption>
          <DropdownOption onClick={() => selectRating('')}>Любой</DropdownOption>
        </DropdownContainer>
      </Overlay>
    )}

    {showSpecialtySheet && (
      <Overlay onClick={() => setShowSpecialtySheet(false)}>
        <DropdownContainer onClick={e => e.stopPropagation()}>
          {['Терапевт', 'Кардиолог', 'Невролог', 'Гинеколог', 'Стоматолог'].map(opt => (
            <DropdownOption key={opt} onClick={() => selectSpecialty(opt)}>
              {opt}
            </DropdownOption>
          ))}
          <DropdownOption onClick={() => selectSpecialty('')}>Все</DropdownOption>
        </DropdownContainer>
      </Overlay>
    )}

    {showDateSheet && (
      <Overlay onClick={() => setShowDateSheet(false)}>
        <DropdownContainer onClick={e => e.stopPropagation()}>
          <DropdownOption onClick={() => selectDate('today')}>Сегодня</DropdownOption>
          <DropdownOption onClick={() => selectDate('tomorrow')}>Завтра</DropdownOption>
          <DropdownOption onClick={() => selectDate('')}>Любое</DropdownOption>
          <DateInput type="date" onChange={e => selectDate(e.target.value)} />
        </DropdownContainer>
      </Overlay>
    )}
    </>
  );
};

export default SearchPageScreen;
