import React, { useState, useEffect, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useIsFocused } from '@react-navigation/native';

import Delivery from '~/components/Delivery';

import {
  Container,
  Header,
  Avatar,
  Info,
  Name,
  Logout,
  HeaderTitle,
  Filter,
  FilterText,
  Deliveries,
  AvatarInitials,
  TextInitials,
} from './styles';
import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';

const Dashboard = ({ navigation }) => {
  const deliveryman = useSelector((state) => state.auth.deliveryman);
  const [filtro, setFiltro] = useState('');
  const [deliveries, setDeliveries] = useState([]);
  const isFocused = useIsFocused();

  const dispatch = useDispatch();

  const iniciais = useMemo(() => {
    if (deliveryman.name && !deliveryman.avatar) {
      return (
        deliveryman.name.split(' ')[0].substring(0, 1) +
        '' +
        deliveryman.name
          .split(' ')
          [deliveryman.name.split(' ').length - 1].substring(0, 1)
          .toUpperCase()
      );
    }
  }, [deliveryman]);

  async function loadDeliveries() {
    const response = await api.get(
      `/deliveryman/${deliveryman.id}/deliveries`,
      {
        params: { deliveried: filtro === 'entregue' },
      }
    );
    setDeliveries(response.data);
  }

  useEffect(() => {
    loadDeliveries();
  }, [filtro, isFocused]);

  function handleLogout() {
    dispatch(signOut());
  }

  function handleDetail(data) {
    navigation.navigate('Detail', { data });
  }

  return (
    <Container>
      <Header>
        {deliveryman && deliveryman.avatar ? (
          <Avatar source={{ uri: deliveryman.avatar.url }} />
        ) : (
          <AvatarInitials>
            <TextInitials>{iniciais}</TextInitials>
          </AvatarInitials>
        )}

        <Info>
          <Text>Bem vindo de volta,</Text>
          <Name>{deliveryman.name}</Name>
        </Info>
        <Logout onPress={handleLogout}>
          <Icon name="exit-to-app" size={20} color="#E74040" />
        </Logout>
      </Header>
      <HeaderTitle>
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>
            Entregas
          </Text>
        </View>
        <Filter>
          <FilterText onPress={() => setFiltro('')} filtro={filtro === ''}>
            Pendentes
          </FilterText>
          <FilterText
            onPress={() => setFiltro('entregue')}
            filtro={filtro === 'entregue'}
          >
            Entregues
          </FilterText>
        </Filter>
      </HeaderTitle>
      <Deliveries
        data={deliveries}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Delivery onDetail={() => handleDetail(item)} data={item} />
        )}
      />
    </Container>
  );
};

export default Dashboard;
