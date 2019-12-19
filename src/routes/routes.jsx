import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Data, Home, Edit } from '../container/container';
import { createStackNavigator } from 'react-navigation-stack';

const DrawerNav = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },

    Data: {
      screen: Data
    },
    Edit: {
      screen: Edit,
      navigationOptions: {
        drawerLabel: () => null,
        drawerIcon: () => null
      }
    }
  },
  {
    drawerBackgroundColor: '#303030',
    contentOptions: {
      inactiveTintColor: '#000',
      activeTintColor: '#20832c'
    }
  }
);

export default createAppContainer(DrawerNav);
