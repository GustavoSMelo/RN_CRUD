import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #101010;
  align-items: center;
  justify-content: center;
  border-top-color: #20832c;
  border-left-color: #135726;
  border-bottom-color: #071f0d;
  border-right-color: #135726;
  border-width: 6px;
  border-radius: 1px;
  elevation: 0;
`;

export const Input = styled.TextInput`
  width: 90%;
  padding: 7px;
  margin-top: 20px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
`;

export const Submit = styled.TouchableOpacity`
  width: 90%;
  padding: 15px;
  margin-top: 20px;
  height: 50px;
  border-radius: 10px;
  background-color: #20832c;
  color: #fff;
  align-items: center;
  font-weight: bold;
`;

export const Picker = styled.Picker`
  background-color: #fff;
  padding: 5px;
  margin-top: 20px;
  width: 90%;
  color: #000;
  border-radius: 10px;
`;
