import React from 'react';
import {
  View,
  Text,
  StatusBar,
  AsyncStorage,
  ToastAndroid,
  Keyboard
} from 'react-native';
import { Container, Input, Submit, Picker } from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      picker: 'Feminino',
      Data: [],
      cc: 1
    };
  }

  handlerInputName = async name => await this.setState({ name });
  handlerInputMail = async email => await this.setState({ email });
  handlerInputPicker = async picker => await this.setState({ picker });
  handlerRegister = async () => {
    let objectJSON = `{
      name: ${this.state.name},
      email: ${this.state.email},
      picker: ${this.state.picker}
    }`;

    await this.setState({
      name: null,
      email: null,
      picker: 'Feminino',
      cc: this.state.cc + 1
    });

    Keyboard.dismiss();

    alert(typeof objectJSON);

    await AsyncStorage.setItem('cadastro', objectJSON);
    ToastAndroid.showWithGravity(
      'Item registred with success! ',
      ToastAndroid.BOTTOM
    );
  };

  handlerShow = async () => {
    const key = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(key);

    result.map(item => alert(JSON.parse(item)));
  };

  render = () => (
    <Container>
      <StatusBar hidden={true} />
      <Input
        onChangeText={name => this.handlerInputName(name)}
        placeholder='Insira seu nome aqui'
      />
      <Input
        onChangeText={email => this.handlerInputMail(email)}
        placeholder='Insira seu email aqui'
      />

      <Picker
        selectedValue={this.state.picker}
        onValueChange={(itemValue, _) => this.handlerInputPicker(itemValue)}
      >
        <Picker.Item label='Feminino' value='Feminino' />
        <Picker.Item label='Masculino' value='Masculino' />
      </Picker>

      <Submit onPress={this.handlerRegister}>
        <Text>
          <Icon name='check' size={18} /> Cadastrar
        </Text>
      </Submit>

      <Submit onPress={this.handlerShow}>
        <Text>
          <Icon name='check' size={18} /> show
        </Text>
      </Submit>
    </Container>
  );
}

export default Home;
