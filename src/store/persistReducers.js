import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfeetfabiorc_techbrasilia',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'deliveryman'],
    },
    reducers
  );

  return persistedReducer;
};
