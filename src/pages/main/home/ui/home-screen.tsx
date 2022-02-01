import {reflect} from '@effector/reflect';
import {homeScreenMounted} from '../model';

import {HomeScreenView} from './home-screen-view';

export const HomeScreen = reflect({
  view: HomeScreenView,
  bind: {},
  hooks: {
    mounted: homeScreenMounted.open,
  },
});
