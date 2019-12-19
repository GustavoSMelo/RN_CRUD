import React from 'react';
import { AsyncStorage, Text, ToastAndroid } from 'react-native';
import {
  Container,
  UserInfoContainer,
  UserInfoText,
  MiniUser,
  Group,
  DeleteBtn,
  DeleteText,
  EditBtn,
  EditText
} from './styled';
import UserSource from '../../../assets/user.png';
import Navbar from '../../components/navbar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Edit } from '../../container/container';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

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

  handleDelete = async index => {
    await this.state.index.map((value, indexValue) => {
      if (indexValue == index) {
        AsyncStorage.removeItem(value);
        ToastAndroid.show('Item removed with success !', ToastAndroid.BOTTOM);
      }
    });

    this.forceUpdate();
  };
  render() {
    return (
      <Container>
        <Navbar navigation={this.props.navigation} />
        <Group>
          {this.state.data.map((item, index) => (
            <UserInfoContainer key={item.name}>
              <MiniUser source={UserSource} />

              <UserInfoText>
                {' \n'}Name: {item.name}
                {' \n'}
                {' \n'}Email: {item.email}
                {' \n'}
                {' \n'}Sex: {item.picker}
                {' \n'}
                {' \n'}Index: {index}
                {' \n'}
              </UserInfoText>
              <DeleteBtn onPress={() => this.handleDelete(index)}>
                <DeleteText>
                  {' '}
                  <Icon name='trash' size={16} color='#fff' /> Delete
                </DeleteText>
              </DeleteBtn>
              <EditBtn
                onPress={() =>
                  this.props.navigation.navigate('Edit', {
                    index: index,
                    navigation: this.props.navigation
                  })
                }
              >
                <EditText>
                  <Icon name='pencil-alt' size={16} color='#000' /> Edit
                </EditText>
              </EditBtn>
            </UserInfoContainer>
          ))}
        </Group>
      </Container>
    );
  }
}
export default Data;
