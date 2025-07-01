import React from 'react';
import styled from 'styled-components';
import { fullScreen } from '../../styles/mixins';
import { theme } from '../../styles/theme';

const Container = styled.div`
  ${fullScreen}
  background: ${props =>
    props.backgroundImage
      ? `linear-gradient(0deg, ${theme.colors.backgroundOverlay} 0%, ${theme.colors.backgroundOverlay} 100%), 
       url('${props.backgroundImage}') lightgray 50% / cover no-repeat`
      : theme.colors.backgroundPrimary};
  font-family: ${theme.fonts.primary};
  margin: 0 auto;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: ${props => (props.hasBottomSheet ? '64px' : '0')};
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

const MapBackground = styled.div`
  width: 100%;
  height: ${props => props.height || '244px'};
  background: url('${props => props.src}') center / cover no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;

const BlurOverlay = styled.div`
  width: 100%;
  height: ${props => props.height || '226px'};
  background: ${theme.colors.surface01};
  backdrop-filter: blur(20px);
  position: absolute;
  top: 0;
  left: 0;
`;

const StatusBar = styled.div`
  width: 100%;
  height: 20px;
  backdrop-filter: blur(20px);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;
  z-index: ${theme.zIndex.modal};
`;

const TimeDisplay = styled.div`
  color: #000;
  font-family: 'SF Pro Text', ${theme.fonts.system};
  font-size: 12px;
  font-weight: ${theme.fontWeights.semibold};
  margin-left: 135px;
`;

const ScreenLayout = ({
  children,
  backgroundImage,
  mapBackground,
  hasBottomSheet = false,
  showStatusBar = false,
  hasBlurOverlay = false,
  mapHeight,
}) => {
  return (
    <Container backgroundImage={backgroundImage} hasBottomSheet={hasBottomSheet}>
      {mapBackground && (
        <>
          <MapBackground height={mapHeight} src={mapBackground} />
          {hasBlurOverlay && <BlurOverlay height={mapHeight} />}
        </>
      )}

      {showStatusBar && (
        <StatusBar>
          <TimeDisplay>9:41</TimeDisplay>
        </StatusBar>
      )}

      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
};

export default ScreenLayout;
