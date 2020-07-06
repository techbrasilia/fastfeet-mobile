export function updateRequest({
  deliveryman_id,
  delivery_id,
  end_date = null,
  dataFile,
}) {
  return {
    type: '@delivery/UPDATE_REQUEST',
    payload: {
      id: deliveryman_id,
      delivery_id,
      end_date,
      file: dataFile,
    },
  };
}

export function updateSuccess(delivery) {
  return {
    type: '@delivery/UPDATE_SUCCESS',
    payload: { delivery },
  };
}

export function updateFailure() {
  return {
    type: '@delivery/UPDATE_FAILURE',
  };
}
