import styled from 'styled-components';

export const OffersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OfferTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const OfferItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;
