import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { registrationStackConfig } from './auth';

export const routeNames = {
  home: 'home',
  registration: registrationStackConfig.name,
  onboarding: 'onboarding'
} as const;
export type ParamList = {
  [routeNames.home]: undefined;
  [routeNames.registration]: undefined;
  [routeNames.onboarding]: undefined;

};
type RouteNames = ValueOf<typeof routeNames>;
export type ScreenProps<P extends RouteNames> = {
  navigation: StackNavigationProp<ParamList, P>;
  route: RouteProp<ParamList, P>;
};
export const routeMap = {
  ...routeNames,
} as const;
