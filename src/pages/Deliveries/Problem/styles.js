import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

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

export const Info = styled.View`
  position: absolute;
  width: 90%;
  margin-top: 80px;
  margin-bottom: 30px;
  background: #fff;
  border-radius: 4px;
  align-self: center;
`;

export const ViewMessage = styled.View.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 250px;
`;

export const TextArea = styled.TextInput.attrs({
  placeholderTextColor: '#666',
})`
  font-size: 16px;
  margin: 0 20px 0 30px;
  color: #666;
  justify-content: flex-start;
  height: 100%;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: #7d40e7;
`;
