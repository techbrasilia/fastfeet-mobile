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
  margin-top: 80px;
  margin-bottom: 30px;
  background: #fff;
  border-radius: 4px;
  align-self: center;
`;

export const HeaderDelivery = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleHeader = styled.Text`
  font-size: 18px;
  color: #7159c1;
  font-weight: bold;
  margin-left: 8px;
`;

export const InfoDelivery = styled.Text`
  font-size: 14px;
  color: #666;
  font-weight: bold;
  margin: 5px 0 20px;
  text-align: left;
`;

export const ViewDetails = styled.View`
  flex: 1;
  border: 1px solid #0000001a;
  padding: 15px 15px 5px 15px;
  border-radius: 4px;
`;

export const HeaderStatus = styled.View`
  flex: 1;
  border: 1px solid #0000001a;
  margin-top: 5px;
  padding: 15px 15px 5px 15px;
  border-radius: 4px;
`;

export const StatusView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const ViewDatas = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const ActionsDelivery = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #0000001a;
  margin-top: 5px;
  padding: 15px;
  border-radius: 4px;
`;

export const ViewIcons = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  text-align: center;
`;

export const RemovalDelivery = styled.TouchableOpacity`
  align-items: center;
`;
