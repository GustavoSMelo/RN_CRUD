import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #101010;
  color: #fff;
  flex: 1;
`;

export const UserInfoContainer = styled.View`
  width: 90%;
  border-radius: 10px;
  border-color: #206431;
  border-width: 6px;
  background-color: #fff;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const UserInfoText = styled.Text`
  margin: 5px;
  padding: 5px;
  font-weight: bold;
`;

export const MiniUser = styled.Image`
  width: 60px;
  height: 60px;
  align-items: center;
  margin: 5px;
`;

export const Group = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const DeleteBtn = styled.TouchableOpacity`
  background-color: #f02711;
  color: #fff;
  padding: 5px;
  margin: 3px;
  height: 30px;
  border-radius: 10px;
  justify-content: flex-end;
`;

export const DeleteText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
