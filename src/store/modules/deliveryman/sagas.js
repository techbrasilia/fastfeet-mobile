import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
  createSuccess,
  createFailure,
  deleteSuccess,
  deleteFailure,
  editSuccess,
} from './actions';

export function* create({ payload }) {
  try {
    const { id, name, email, avatar_id } = payload;

    if (id) {
      const response = yield call(api.put, `deliverymen/${id}`, {
        name,
        email,
        avatar_id,
      });

      if (!response) {
        Alert.alert('Erro', 'Erro ao atualizar encomenda.');
        return;
      }

      yield put(createSuccess(response.data));
      Alert.alert('Sucesso', 'Entregador atualizado com sucesso.');
    } else {
      const response = yield call(api.post, 'deliverymen', {
        name,
        email,
        avatar_id,
      });

      if (!response) {
        Alert.alert('Erro', 'Erro ao inserir entregador.');
        return;
      }

      yield put(createSuccess(response.data));
      Alert.alert('Sucesso', 'Novo entregador cadastrado com sucesso.');
    }
  } catch (error) {
    Alert.alert('Erro', 'Falha ao cadastrar novo entregador.');
    yield put(createFailure());
  }
}

export function* excluir({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `deliverymen/${id}`);

    if (!response) {
      Alert.alert('Erro', 'Erro ao excluir entregador.');
      return;
    }

    yield put(deleteSuccess(response.data));
    Alert.alert('Sucesso', response.data.message);
  } catch (error) {
    Alert.alert('Erro', error.response.data.message);
    yield put(deleteFailure());
  }
}

export function* edit({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `deliverymen/${id}`);

    yield put(editSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro', 'Erro ao buscar dados para edição');
  }
}

export default all([
  takeLatest('@deliveryman/CREATE_REQUEST', create),
  takeLatest('@deliveryman/DELETE_REQUEST', excluir),
  takeLatest('@deliveryman/EDIT_REQUEST', edit),
]);
