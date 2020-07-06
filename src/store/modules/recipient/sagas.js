import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
  createSuccess,
  createFailure,
  deleteSuccess,
  deleteFailure,
} from './actions';

export function* create({ payload }) {
  try {
    const { id, name, rua, numero, complemento, estado, cidade, cep } = payload;

    if (id) {
      const response = yield call(api.put, `recipients/${id}`, {
        name,
        rua,
        numero,
        complemento,
        estado,
        cidade,
        cep,
      });

      if (!response) {
        Alert.alert('Erro', 'Erro ao atualizar destinatário.');
        return;
      }

      yield put(createSuccess(response.data));

      Alert.alert('Sucesso', 'Destinatário atualizado com sucesso.');
    } else {
      const response = yield call(api.post, 'recipients', {
        name,
        rua,
        numero,
        complemento,
        estado,
        cidade,
        cep,
      });

      if (!response) {
        Alert.alert('Erro', 'Erro ao inserir destinatário.');
        return;
      }

      yield put(createSuccess(response.data));

      Alert.alert('Erro', 'Novo destinatário cadastrado com sucesso.');
    }
  } catch (error) {
    Alert.alert('Erro', 'Falha ao cadastrar novo destinatário.');
    yield put(createFailure());
  }
}

export function* excluir({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `recipients/${id}`);

    if (!response) {
      Alert.alert('Erro', 'Erro ao excluir destinatário.');
      return;
    }

    yield put(deleteSuccess(response.data));

    Alert.alert('Sucesso', response.data.message);
  } catch (error) {
    Alert.alert('Erro', error.response.data.message);
    yield put(deleteFailure());
  }
}

export default all([
  takeLatest('@recipient/CREATE_REQUEST', create),
  takeLatest('@recipient/DELETE_REQUEST', excluir),
]);
