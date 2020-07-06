import React, { useState } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Header,
  Info,
  SubmitButton,
  Image,
  AreaTouch,
} from './styles';
import camera from '~/assets/camera.png';
import fundo from '~/assets/signature.jpg';

import api from '~/services/api';
import { updateRequest } from '~/store/modules/delivery/actions';

const ConfirmDelivery = (props) => {
  const deliveryman = useSelector((state) => state.auth.deliveryman);
  const delivery = props.route.params.delivery;
  const [signature, setSignature] = useState();

  const dispatch = useDispatch();

  const optionsImagePicker = {
    title: 'Selecione ou fotografe a assinatura.',
    // customButtons: [
    //   {
    //     name: "fb",
    //     title: "Selecione uma imagem"
    //   }
    // ]
  };

  function imageCallback(data) {
    if (data.didCancel || data.error) {
      return;
    }
    if (!data.uri) {
      console.tron.log('uri não existe');
      return;
    }

    console.tron.log('image', data);
    setSignature(data);
  }

  function handleSubmit() {
    const dataFile = new FormData();
    dataFile.append('file', {
      path: signature.path,
      uri: signature.uri,
      type: 'image/jpeg',
      name: signature.fileName,
    });

    const end_date = new Date().getTime();

    dispatch(
      updateRequest({
        deliveryman_id: deliveryman.id,
        delivery_id: delivery.id,
        end_date,
        dataFile,
      })
    );

    props.navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Header />
      <Info>
        <AreaTouch source={signature ? { uri: signature.uri } : fundo}>
          <TouchableOpacity
            onPress={() =>
              ImagePicker.showImagePicker(optionsImagePicker, imageCallback)
            }
          >
            <Image source={camera} />
          </TouchableOpacity>
        </AreaTouch>
        <SubmitButton onPress={handleSubmit}>Confirmar</SubmitButton>
      </Info>
    </Container>
  );
};

export default ConfirmDelivery;
