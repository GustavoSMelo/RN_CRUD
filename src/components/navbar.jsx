import { Data, Home } from '../container/container';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import React from 'react';

const style = StyleSheet.create({
  Navbar: {
    marginLeft: 30,
    marginRight: 5,
    marginTop: 30,
    marginBottom: 5,
    alignItems: 'flex-start'
  }
});

class Navbar extends React.Component {
  render = () => (
    <Icon
      style={style.Navbar}
      name='bars'
      size={36}
      onPress={() => this.props.navigation.toggleDrawer()}
      color={'#fff'}
    />
  );
}

export default Navbar;
