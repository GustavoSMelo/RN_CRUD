import React from 'react';
import { AsyncStorage, Text } from 'react-native';
import {
  Container,
  UserInfoContainer,
  UserInfoText,
  MiniUser,
  Group,
  DeleteBtn,
  DeleteText
} from './styled';
import UserSource from '../../../assets/user.png';
import Navbar from '../../components/navbar';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Data extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Data',
    drawerIcon: ({ focus, tintColor }) => {
      if (focus) {
        tintColor = '#20832c';
      }

      return <Icon name='database' size={24} color={tintColor} />;
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      index: [],
      data: []
    };
  }

  componentDidMount = async () => {
    const key = await AsyncStorage.getAllKeys();

    //const Info = await AsyncStorage.multiGet(key);

    key.map(index => {
      AsyncStorage.getItem(index).then(item =>
        this.setState({
          index: this.state.index.concat(index),
          data: this.state.data.concat(JSON.parse(item))
        })
      );
    });

    /*await Info.map(item => {
      this.setState({ data: this.state.data.concat(item) });
    });*/
  };

  render() {
    return (
      <Container>
        <Navbar navigation={this.props.navigation} />
        <Group>
          {this.state.data.map(item => (
            <UserInfoContainer>
              <MiniUser source={UserSource} />

              <UserInfoText>
                {' \n'}Name: {item.name}
                {' \n'}Email: {item.email}
                {' \n'}Sex: {item.picker}
              </UserInfoText>
              <DeleteBtn>
                <DeleteText>
                  {' '}
                  <Icon name='trash' size={16} color='#fff' />
                  Delete
                </DeleteText>
              </DeleteBtn>
            </UserInfoContainer>
          ))}
        </Group>
      </Container>
    );
  }
}

export default Data;
