import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Data, Home } from '../container/container';

const DrawerNav = createDrawerNavigator({
  Home: {
    screen: Home
  },

  Data: {
    screen: Data
  }
});

export default createAppContainer(DrawerNav);
