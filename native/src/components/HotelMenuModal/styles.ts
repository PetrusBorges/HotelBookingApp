import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  flex: 1;
  padding: 24px;
  background-color: #fafafa;
  border-radius: 20px;
`;

export const Header = styled.View``;

export const Review = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InteriorImage = styled.Image`
  width: 101px;
  height: 101px;
  border-radius: 8px;
`;

export const Separator = styled.View`
  margin: 0 8px;
`;
