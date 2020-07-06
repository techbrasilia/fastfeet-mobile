import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 100px;
  padding: 20px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const AvatarInitials = styled.View`
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #e3d8f8 no-repeat padding-box;
  padding: 10px;
`;
export const TextInitials = styled.Text`
  color: #a28fd0;
  opacity: 1;
  text-align: center;
  align-self: center;
  font-size: 18px;
`;

export const Info = styled.View`
  margin-left: 1px;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #444444;
  font-weight: bold;
  align-self: center;
  margin-top: 10px;
`;

export const Logout = styled.TouchableOpacity`
  font-weight: bold;
  align-items: center;
  align-content: center;
`;

export const HeaderTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 20px;
  align-items: center;
`;

export const Filter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0;
`;

export const FilterText = styled.Text`
  font-weight: bold;
  margin-left: 15px;
  color: ${(props) => (props.filtro ? '#7159c1' : '#333')};
`;

export const Deliveries = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})`
  flex: 1;
  flex-direction: column;
`;
