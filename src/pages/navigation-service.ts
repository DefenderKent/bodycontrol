import React from 'react';
import {
  CommonActions,
  NavigationContainerRef,
  ParamListBase,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef<ParamListBase>>();

function navigate(...args: Parameters<typeof StackActions.push>) {
  navigationRef.current?.navigate(...args);
}

function goBack() {
  navigationRef.current?.goBack();
}

function push(...args: Parameters<typeof StackActions.push>) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute();
}

function reset(dropRoutes: string[]) {
  return navigationRef.current?.dispatch(state => {
    const routes = state.routes.filter(r => !dropRoutes.includes(r.name));

    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
}

const navigationService = {
  navigate,
  goBack,
  push,
  reset,
  getCurrentRoute,
};

export default navigationService;
