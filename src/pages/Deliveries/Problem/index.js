import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, View } from 'react-native';

import {
  Container,
  Header,
  Info,
  SubmitButton,
  ViewMessage,
  TextArea,
} from './styles';
import { createRequest } from '~/store/modules/problem/actions';

const Problem = (props, { navigation }) => {
  const delivery = props.route.params.delivery;
  const loading = useSelector((state) => state.auth.loading);
  const [idProblem, setIdProblem] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(
      createRequest({
        id: idProblem,
        delivery_id: delivery.id,
        description: description,
      })
    );
    props.navigation.navigate('Detail');
  }
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Header />
      <Info>
        <ViewMessage>
          <TextArea
            multiline={true}
            maxLength={100}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={description}
            onChangeText={setDescription}
          />
        </ViewMessage>
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Enviar
        </SubmitButton>
      </Info>
    </Container>
  );
};

export default Problem;
