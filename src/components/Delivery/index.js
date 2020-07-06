import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

const styles = StyleSheet.create({
  textTimeline: {
    textAlign: 'center',
    fontSize: 13,
    color: '#666',
  },
  textDate: {
    fontSize: 11,
    color: '#666',
  },
  textDetails: {
    color: '#7159c1',
    fontWeight: 'bold',
  },
});

import {
  Container,
  Title,
  Timeline,
  Details,
  Data,
  DataRetirada,
  City,
  CityName,
  LineDate,
  LineDeliveried,
  HeaderDelivery,
} from './styles';

const Delivery = ({ data, onDetail }) => {
  const dateFormat = useMemo(() => {
    return format(parseISO(data.created_at), "dd'/'MM'/'yyyy", {
      locale: pt,
    });
  }, [data.created_at]);

  return (
    <Container>
      <HeaderDelivery>
        <Icon name="local-shipping" size={20} color="#7159c1" />
        <Title>{data.product}</Title>
      </HeaderDelivery>
      <Timeline>
        <LineDate>
          <LineDeliveried deliveried={!data.start_date || data.start_date} />
          <Text style={styles.textTimeline}>Aguardando Retirada</Text>
        </LineDate>
        <LineDate>
          <LineDeliveried deliveried={data.start_date} />
          <Text style={styles.textTimeline}>Retirada</Text>
        </LineDate>
        <LineDate>
          <LineDeliveried deliveried={data.end_date} />
          <Text style={styles.textTimeline}>Entregue</Text>
        </LineDate>
      </Timeline>
      <Details>
        <Data>
          <Text style={styles.textDate}>Data</Text>
          <DataRetirada>{dateFormat}</DataRetirada>
        </Data>
        <City>
          <Text style={styles.textDate}>Cidade</Text>
          <CityName>{data.Recipient && data.Recipient.cidade}</CityName>
        </City>
        <TouchableOpacity onPress={onDetail}>
          <Text style={styles.textDetails}>Ver detalhes</Text>
        </TouchableOpacity>
      </Details>
    </Container>
  );
};

export default Delivery;
