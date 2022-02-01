export * as routerConfig from '../../pages/config';
import {createEvent} from 'effector';

import '@processes/login';

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {routerConfig} from '@pages/index';

import {RegistrationStack} from './registration';
import {HomeScreen} from '@pages/main/home';
import {reflect} from '@effector/reflect';
import {$isOnboardingFinished} from '@entities/storage';

const Stack = createStackNavigator<routerConfig.ParamList>();

interface RouterProps {
  isOnboardingFinished: boolean;
  user: boolean;
}

const Router: React.FC<RouterProps> = ({isOnboardingFinished, user: _}) => {
  return (
    <Stack.Navigator
      screenOptions={screenProps => ({
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {paddingStart: 24},
        headerTitleAlign: 'center',
        headerTitle: () => null,
        headerBackTitleStyle: {backgroundColor: 'red'},
        headerStyle: {
          shadowOffset: {
            width: 0,
            height: 0,
          },
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      })}>
      {isOnboardingFinished ? (
        <>
          <Stack.Screen
            name={routerConfig.routeMap.home}
            options={{
              headerShown: false,
              cardStyle: {
                backgroundColor: 'white',
              },
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name={routerConfig.routeMap.registration}
            options={{headerShown: false}}
            component={RegistrationStack}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={routerConfig.routeMap.onboarding}
            component={HomeScreen}
            options={{
              headerRight: () => (
                <TouchableOpacity onPress={() => console.log('endonboarding')}>
                  <Text>Пропустить</Text>
                </TouchableOpacity>
              ),
              headerRightContainerStyle: {paddingRight: 24},
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
const appMounted = createEvent();
export default reflect({
  view: Router,
  bind: {
    isOnboardingFinished: $isOnboardingFinished,
  },
  hooks: {
    mounted: appMounted,
  },
});
