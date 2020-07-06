import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
} from './actions';

export function* create({ payload }) {
  try {
    const { id, delivery_id, description } = payload;

    if (id) {
      const response = yield call(api.put, `delivery/${id}/problems`, {
        description,
      });

      if (!response) {
        Alert.alert('Erro', 'Erro ao atualizar problema.');
        return;
      }

      yield put(createSuccess(response.data));
      Alert.alert('Sucesso', 'Problema atualizado com sucesso.');
    } else {
      const response = yield call(
        api.post,
        `delivery/${delivery_id}/problems`,
        {
          description,
        }
      );

      if (!response) {
        Alert.alert('Erro', 'Erro ao inserir problema.');
        return;
      }

      yield put(createSuccess(response.data));

      Alert.alert('Sucesso', 'Novo problema cadastrado com sucesso.');
    }
  } catch (error) {
    Alert.alert('Erro', 'Falha ao cadastrar problema.');
    yield put(createFailure());
  }
}

export function* update({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `problem/${id}/cancel_delivery`);

    if (!response) {
      Alert.alert('Erro', 'Erro ao cancelar encomenda.');
      return;
    }

    yield put(updateSuccess(response.data));

    Alert.alert('Sucesso', 'Encomenda cancelada com sucesso.');
  } catch (error) {
    Alert.alert('Erro', 'Falha ao cancelar encomenda.');
    yield put(updateFailure());
  }
}

export default all([
  takeLatest('@problem/CREATE_REQUEST', create),
  takeLatest('@problem/UPDATE_REQUEST', update),
]);
