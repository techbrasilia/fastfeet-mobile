import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, StyleSheet, StatusBar, View, Alert } from 'react-native';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  InfoDelivery,
  Info,
  ViewDetails,
  HeaderDelivery,
  TitleHeader,
  HeaderStatus,
  StatusView,
  ActionsDelivery,
  ViewIcons,
  ViewDatas,
  RemovalDelivery,
} from './styles';
import { updateRequest } from '~/store/modules/delivery/actions';

const styles = StyleSheet.create({
  textStatic: {
    fontSize: 14,
    color: '#999',
    fontWeight: 'bold',
  },
  textIcons: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
});

const Detail = (props, { navigation }) => {
  const delivery = props.route.params.data;
  const deliveryman = useSelector((state) => state.auth.deliveryman);
  const dispatch = useDispatch();

  const dateRemovalFormat = useMemo(() => {
    if (delivery.start_date) {
      return format(parseISO(delivery.start_date), "dd'/'MM'/'yyyy", {
        locale: pt,
      });
    } else {
      return '--/--/--';
    }
  }, [delivery.start_date]);

  const dateDeliveriedFormat = useMemo(() => {
    if (delivery.end_date) {
      return format(parseISO(delivery.end_date), "dd'/'MM'/'yyyy", {
        locale: pt,
      });
    } else {
      return '--/--/--';
    }
  }, [delivery.end_date]);

  const createButtonAlert = () =>
    Alert.alert(
      'Confirmar',
      'Deseja retirar esta encomenda para entrega?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: handleRemovalDelivery,
        },
      ],
      { cancelable: false }
    );

  function handleRemovalDelivery() {
    dispatch(
      updateRequest({
        deliveryman_id: deliveryman.id,
        delivery_id: delivery.id,
        end_date: null,
        dataFile: null,
      })
    );
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Header />
      <Info>
        <ViewDetails>
          <HeaderDelivery>
            <Icon name="local-shipping" size={20} color="#7D40E7" />
            <TitleHeader>Informações da entrega</TitleHeader>
          </HeaderDelivery>

          <Text style={styles.textStatic}>DESTINATÁRIO</Text>
          <InfoDelivery>{delivery.Recipient.name}</InfoDelivery>

          <Text style={styles.textStatic}>ENDEREÇO DE ENTREGA</Text>
          <InfoDelivery>
            {delivery.Recipient.rua +
              ', ' +
              delivery.Recipient.numero +
              ', ' +
              delivery.Recipient.cidade +
              ' - ' +
              delivery.Recipient.estado +
              ', CEP: ' +
              delivery.Recipient.cep}
          </InfoDelivery>
          <Text style={styles.textStatic}>PRODUTO</Text>
          <InfoDelivery>{delivery.product}</InfoDelivery>
        </ViewDetails>

        <HeaderStatus>
          <HeaderDelivery>
            <Icon name="event" size={20} color="#7D40E7" />
            <TitleHeader>Situação da entrega</TitleHeader>
          </HeaderDelivery>
          <StatusView>
            <View>
              <Text style={styles.textStatic}>STATUS</Text>
              <InfoDelivery>{delivery.status}</InfoDelivery>
            </View>
            <RemovalDelivery onPress={createButtonAlert}>
              <Icon name="event" size={20} color="#82BFFF" />
              <Text style={styles.textIcons}>Retirar encomenda</Text>
            </RemovalDelivery>
          </StatusView>

          <ViewDatas>
            <View>
              <Text style={styles.textStatic}>DATA DE RETIRADA</Text>
              <InfoDelivery>{dateRemovalFormat}</InfoDelivery>
            </View>
            <View>
              <Text style={styles.textStatic}>DATA DE ENTREGA</Text>
              <InfoDelivery>{dateDeliveriedFormat}</InfoDelivery>
            </View>
          </ViewDatas>
        </HeaderStatus>
        <ActionsDelivery>
          <ViewIcons
            onPress={() => {
              props.navigation.navigate('Problem', { delivery });
            }}
          >
            <Icon name="highlight-off" size={20} color="#E74040" />
            <Text style={styles.textIcons}>Informar Problema</Text>
          </ViewIcons>

          <ViewIcons
            onPress={() => {
              props.navigation.navigate('ViewProblems', { delivery });
            }}
          >
            <Icon name="info-outline" size={20} color="#E7BA40" />
            <Text style={styles.textIcons}>Visualizar Problemas</Text>
          </ViewIcons>

          <ViewIcons
            onPress={() => {
              props.navigation.navigate('ConfirmDelivery', { delivery });
            }}
          >
            <Icon name="check-circle" size={20} color="#7D40E7" />
            <Text style={styles.textIcons}>Confirmar Entrega</Text>
          </ViewIcons>
        </ActionsDelivery>
      </Info>
    </Container>
  );
};

export default Detail;
