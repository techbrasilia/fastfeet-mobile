export function createRequest({ id, delivery_id, description }) {
  return {
    type: '@problem/CREATE_REQUEST',
    payload: {
      id: id ? id : null,
      delivery_id: delivery_id,
      description: description,
    },
  };
}

export function createSuccess(problem) {
  return {
    type: '@problem/CREATE_SUCCESS',
    payload: { problem },
  };
}

export function createFailure() {
  return {
    type: '@problem/CREATE_FAILURE',
  };
}

export function updateRequest(id) {
  return {
    type: '@problem/UPDATE_REQUEST',
    payload: { id },
  };
}

export function updateSuccess(problem) {
  return {
    type: '@problem/UPDATE_SUCCESS',
    payload: { problem },
  };
}

export function updateFailure() {
  return {
    type: '@problem/UPDATE_FAILURE',
  };
}
