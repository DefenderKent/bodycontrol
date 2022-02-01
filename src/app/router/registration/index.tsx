import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {registrationStackConfig} from '@pages/auth';
import {RegistrationScreen} from '@pages/auth/registration';

const Stack = createStackNavigator<registrationStackConfig.ParamList>();

export const RegistrationStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={registrationStackConfig.routeNames.registartion}
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  );
};
