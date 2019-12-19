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

class Edit extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null
  };
  constructor(props) {
    super(props);

    this.state = {
      indexProps: this.props.navigation.state.params.index,
      name: '',
      email: '',
      picker: '',
      JSONvalue: ''
    };

    this.handlerEditRegistry = this.handlerEditRegistry.bind(this);
  }

  componentDidMount = async () => {
    const key = await AsyncStorage.getAllKeys();
    await key.map((item, index) => {
      if (index === this.state.indexProps) {
        AsyncStorage.getItem(item).then(value => {
          const JSONV = JSON.parse(value);
          this.setState({
            name: JSONV.name,
            email: JSONV.email,
            picker: JSONV.picker,
            JSONvalue: item
          });
        });
      }
    });
  };

  handlerNameChange = async name => await this.setState({ name });

  handlerEmailChange = async email => await this.setState({ email });

  handlerSexChange = async sex => await this.setState({ picker: sex });

  handlerEditRegistry = async () => {
    const value = {
      name: this.state.name,
      email: this.state.email,
      picker: this.state.picker
    };

    const JSONconverted = JSON.stringify(value);

    await AsyncStorage.setItem(this.state.JSONvalue, JSONconverted);
    ToastAndroid.show('Item updated', ToastAndroid.BOTTOM);

    this.props.navigation.navigate('Data');
  };

  render = () => (
    <Container>
      <StatusBar hidden={true} />
      <Grouper>
        <Input
          placeholder='Insira seu nome aqui'
          value={this.state.name}
          onChangeText={name => this.handlerNameChange(name)}
        />
        <Input
          placeholder='Insira seu email aqui'
          value={this.state.email}
          onChangeText={email => this.handlerEmailChange(email)}
        />

        <Picker
          selectedValue={this.state.picker}
          onValueChange={sex => this.handlerSexChange(sex)}
        >
          <Picker.Item label='Feminino' value='Feminino' />
          <Picker.Item label='Masculino' value='Masculino' />
        </Picker>

        <Submit onPress={this.handlerEditRegistry}>
          <Text>
            <Icon name='clock-o' size={18} /> Update
          </Text>
        </Submit>
      </Grouper>
    </Container>
  );
}

export default Edit;
