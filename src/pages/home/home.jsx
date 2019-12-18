import React from 'react';
import {
  View,
  Text,
  StatusBar,
  AsyncStorage,
  ToastAndroid,
  Keyboard
} from 'react-native';
import { Container, Input, Submit, Picker, Grouper } from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../../components/navbar';

class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ focus, tintColor }) => {
      if (focus) {
        tintColor = '#20832c';
      }

      return <Icon name='home' color={tintColor} size={24} />;
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      picker: 'Feminino',
      Data: [],
      cc: 1
    };

    this.RegisterNewUser = this.RegisterNewUser.bind(this);
  }

  componentDidMount = async () => {
    const key = await AsyncStorage.getAllKeys();

    key.map(item => this.setState({ cc: this.state.cc + 1 }));
  };

  handlerInputName = async name => await this.setState({ name });
  handlerInputMail = async email => await this.setState({ email });
  handlerInputPicker = async picker => await this.setState({ picker });

  RegisterNewUser = async () => {
    const objectJSON = {
      name: this.state.name,
      email: this.state.email,
      picker: this.state.picker
    };

    const JSONstring = JSON.stringify(objectJSON);

    await this.setState({
      name: '',
      email: '',
      picker: 'Feminino',
      cc: this.state.cc + 1
    });

    Keyboard.dismiss();

    try {
      await AsyncStorage.setItem(`Registro${this.state.cc}`, JSONstring);
    } catch (error) {
      alert(error);
    }
    ToastAndroid.show('Item registred with success! ', ToastAndroid.BOTTOM);
    //alert('Item registred with success');
  };

  handlerShow = async () => {
    /*const key = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(key);

    return await result.map(item => alert(item));*/

    await AsyncStorage.clear();
    return ToastAndroid.show(
      'All itens removed with success! ',
      ToastAndroid.BOTTOM
    );
  };

  render = () => (
    <Container>
      <Navbar navigation={this.props.navigation} />
      <StatusBar hidden={true} />
      <Grouper>
        <Input
          onChangeText={name => this.handlerInputName(name)}
          placeholder='Insira seu nome aqui'
          value={this.state.name}
        />
        <Input
          onChangeText={email => this.handlerInputMail(email)}
          placeholder='Insira seu email aqui'
          value={this.state.email}
        />

        <Picker
          selectedValue={this.state.picker}
          onValueChange={(itemValue, _) => this.handlerInputPicker(itemValue)}
        >
          <Picker.Item label='Feminino' value='Feminino' />
          <Picker.Item label='Masculino' value='Masculino' />
        </Picker>

        <Submit onPress={this.RegisterNewUser}>
          <Text>
            <Icon name='check' size={18} /> Cadastrar
          </Text>
        </Submit>

        <Submit onPress={this.handlerShow}>
          <Text>
            <Icon name='check' size={18} /> show
          </Text>
        </Submit>
      </Grouper>
    </Container>
  );
}

export default Home;
