import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Container, MenuButton, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

function Header({title}) {
  const navigation = useNavigation();
  return (
    <Container>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={45} color="#000" />
      </MenuButton>
      <Title>{title}</Title>
    </Container>
  );
}

export default Header;
