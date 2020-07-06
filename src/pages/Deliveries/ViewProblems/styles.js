import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  background: #7d40e7;
  height: 155px;
`;

export const Info = styled.SafeAreaView`
  position: absolute;
  width: 90%;
  margin-top: 80px;
  margin-bottom: 30px;
  border-radius: 4px;
  align-self: center;
  height: 100%;
`;

export const ListProblems = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
