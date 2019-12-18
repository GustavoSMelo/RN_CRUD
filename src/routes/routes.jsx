import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Data, Home } from '../container/container';

const DrawerNav = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },

    Data: {
      screen: Data
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
