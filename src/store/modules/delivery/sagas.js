import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateSuccess, updateFailure } from './actions';

/**
 * Se não passar o end_date sera considerado retirada para entrega
 * Com end_date será confirmação de entrega
 */
export function* update({ payload }) {
  try {
    const { id, delivery_id, end_date, file } = payload;

    const response = yield call(api.put, `/deliveryman/${id}/removal`, file, {
      params: {
        delivery_id,
        end_date,
      },
    });

    if (response.data.error) {
      Alert.alert('Erro', response.data.error);
      return;
    }

    yield put(updateSuccess(response.data));

    Alert.alert('Sucesso', response.data.message);
  } catch (err) {
    Alert.alert('Erro', 'Falha ao confirmar entrega encomenda');
    yield put(updateFailure());
  }
}

export default all([takeLatest('@delivery/UPDATE_REQUEST', update)]);
