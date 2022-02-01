import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '@pages/index';

export const withNavigationContainer =
  (component: () => React.ReactNode) => () =>
    (
      <NavigationContainer ref={navigationRef}>
        {component()}
      </NavigationContainer>
    );
