import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, StyleSheet } from 'react-native';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Header,
  Title,
  Avatar,
  LogoutButton,
  Info,
  AvatarInitials,
  TextInitials,
} from './styles';
import { signOut } from '~/store/modules/auth/actions';

const styles = StyleSheet.create({
  textStatic: {
    fontSize: 13,
    color: '#666',
  },
});

const Profile = () => {
  const deliveryman = useSelector((state) => state.auth.deliveryman);

  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();

  const dateFormat = useMemo(() => {
    if (deliveryman.createdAt) {
      return format(parseISO(deliveryman.createdAt), "dd'/'MM'/'yyyy", {
        locale: pt,
      });
    }
  }, [deliveryman.createdAt]);

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

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        {deliveryman && deliveryman.avatar ? (
          <Avatar
            source={{
              uri: deliveryman.avatar.url.replace('localhost', '10.0.2.2'),
            }}
          />
        ) : (
          <AvatarInitials>
            <TextInitials>{iniciais}</TextInitials>
          </AvatarInitials>
        )}
      </Header>
      <Info>
        <Text style={styles.textStatic}>Nome completo</Text>
        <Title>{deliveryman.name}</Title>

        <Text style={styles.textStatic}>Email</Text>
        <Title>{deliveryman.email}</Title>

        <Text style={styles.textStatic}>Data de cadastro</Text>
        <Title>{dateFormat}</Title>

        <LogoutButton loading={loading} onPress={handleLogout}>
          Logout
        </LogoutButton>
      </Info>
    </Container>
  );
};

export default Profile;
