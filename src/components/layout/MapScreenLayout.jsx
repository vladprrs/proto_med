import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f1f1f1;
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
`;

const MapBackground = styled.img`
  width: 100%;
  height: ${props => props.height || '812px'};
  flex-shrink: 0;
  position: absolute;
  left: 0px;
  top: 0px;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: ${props => props.contentMinHeight || 'calc(100vh - 160px)'};
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: ${props => (props.noRadius ? '0' : '16px 16px 0px 0px')};
  background: #f1f1f1;
  position: absolute;
  left: 0px;
  top: ${props => props.contentTop || '160px'};
  padding-bottom: ${props => props.paddingBottom || '50px'};
`;

const MapScreenLayout = ({
  children,
  mapImage = '/assets/images/dbeabc5ac0f4d8edc9feb4b0b06f4520eafc61ab_750.jpg',
  mapHeight = '812px',
  contentTop = '160px',
  contentMinHeight = 'calc(100vh - 160px)',
  paddingBottom = '50px',
  noRadius = false,
}) => {
  return (
    <Container>
      <MapBackground alt="" height={mapHeight} src={mapImage} />

      <ContentContainer
        contentMinHeight={contentMinHeight}
        contentTop={contentTop}
        noRadius={noRadius}
        paddingBottom={paddingBottom}
      >
        {children}
      </ContentContainer>
    </Container>
  );
};

export default MapScreenLayout;
