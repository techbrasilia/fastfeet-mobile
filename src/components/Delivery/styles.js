import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`;

export const HeaderDelivery = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #7159c1;
  font-weight: bold;
  margin-left: 8px;
`;

export const Timeline = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const LineDate = styled.View`
  flex: 1;
  align-items: center;
`;

export const LineDeliveried = styled.Text`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  border: 1px #7159c1;
  background: ${(props) => (props.deliveried ? '#7159c1' : '#FFF')};
  margin-bottom: 10px;
`;

export const Details = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 25px;
`;

export const Data = styled.View`
  flex: 1;
`;
export const DataRetirada = styled.Text`
  font-size: 14px;
  color: #444444;
  font-weight: bold;
`;
export const City = styled.View`
  flex: 1;
`;
export const CityName = styled.Text`
  font-size: 14px;
  color: #444444;
  font-weight: bold;
`;
