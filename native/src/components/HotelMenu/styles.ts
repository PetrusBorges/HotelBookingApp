import styled from 'styled-components/native';

export const HotelContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const HotelImage = styled.Image`
  width: 101px;
  height: 101px;
  border-radius: 8px;
`;

export const HotelDetails = styled.View`
  margin-left: 16px;
  width: 160px;
`;

export const HotelInfo = styled.View`
  margin-left: 18px;
  align-items: flex-end;
`;

export const HotelReview = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(204, 204, 204, 0.3);
  margin: 24px 0;
`;
