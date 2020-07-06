import React, { useMemo, useState } from 'react';
import { DatePickerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container, DateButton, DateText } from './styles';

const DateInput = ({ date, onChange }) => {
  const dateFormated = useMemo(
    () => format(date, "dd 'de' MMM 'de' yyyy", { locale: pt }),
    [date]
  );

  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
      minDate: new Date(),
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      onChange(selectedDate);
    }
  }

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormated}</DateText>
      </DateButton>
    </Container>
  );
};

export default DateInput;
