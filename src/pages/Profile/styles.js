import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 30px;
`;
export const Header = styled.View`
  align-items: center;
  margin: 50px 0 20px;
`;

export const Avatar = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 68px;
`;

export const AvatarInitials = styled.View`
  width: 136px;
  height: 136px;
  border-radius: 68px;
  margin-top: 80px;
  background: #e3d8f8 no-repeat padding-box;
`;
export const TextInitials = styled.Text`
  color: #a28fd0;
  opacity: 1;
  padding: 20px;
  margin-top: 15px;
  text-align: center;
  align-self: center;
  font-size: 40px;
`;

export const Info = styled.View`
  flex: 1;
  margin-top: 30px;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin: 5px 0 15px;
  text-align: left;
`;

export const LogoutButton = styled(Button)`
  margin-top: 30px;
  background: #e74040;
`;
