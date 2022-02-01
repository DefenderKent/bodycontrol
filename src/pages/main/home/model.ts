import {createEffect, guard} from 'effector';
import {createGate} from 'effector-react';



import {routerConfig} from '@pages/index';
import navigationService from '@pages/navigation-service';
import { getUserDataFx } from '@shared/api/users';


export const openHomeFx = createEffect(() => {
  navigationService.navigate(routerConfig.routeMap.home);
});

export const homeScreenMounted = createGate();

guard({
  clock: [homeScreenMounted.open,{userId:1}],
  filter: homeScreenMounted.status,
  source:{userId:1},
  target: getUserDataFx,
});
