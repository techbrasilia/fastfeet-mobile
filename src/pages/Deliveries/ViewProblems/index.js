import React, { useState, useEffect } from 'react';
import { StatusBar, Text } from 'react-native';

import { Container, Header, Info, ListProblems, Title } from './styles';

import Problem from '~/components/Problem';
import api from '~/services/api';

const ViewProblems = (props) => {
  const delivery = props.route.params.delivery;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      try {
        const response = await api.get(`/delivery/${delivery.id}/problems`);

        setProblems(response.data);
      } catch (err) {
        console.tron.log('Erro:', err);
      }
    }

    loadProblems();
  }, [delivery]);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Header />
      <Info>
        <Title>{delivery.product}</Title>
        <ListProblems
          data={problems.dados}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Problem data={item} />}
        />
      </Info>
    </Container>
  );
};

export default ViewProblems;
