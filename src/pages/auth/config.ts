import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {routerConfig} from '@pages/index';

export const name = 'registration';

export const routeNames = {
  registartion: 'registartion',
} as const;

export type ParamList = {
  [routeNames.registartion]: undefined;

};

export type ScreenProps<P extends ValueOf<typeof routeNames>> = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ParamList, P>,
    routerConfig.ScreenProps<
      ValueOf<typeof routerConfig.routeNames>
    >['navigation']
  >;
  route: RouteProp<ParamList, P>;
};

export const routeMap = {
  stackName: name,
  ...routeNames,
} as const;
