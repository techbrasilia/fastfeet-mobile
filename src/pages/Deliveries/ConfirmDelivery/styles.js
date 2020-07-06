import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  background: #7d40e7;
  height: 155px;
`;

export const Info = styled.View`
  position: absolute;
  width: 90%;
  height: 445px;
  margin-top: 80px;
  margin-bottom: 30px;
  border-radius: 4px;
  align-self: center;
  background: #fff;
  flex: 1;
  justify-content: center;
`;

export const AreaTouch = styled.ImageBackground`
  flex: 1;
  margin-bottom: 25px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 25px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const SubmitButton = styled(Button)`
  background: #7d40e7;
`;
