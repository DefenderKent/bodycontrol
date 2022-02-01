import { createEvent, createStore } from "effector";

export const onboardingFinished = createEvent();

export const $isOnboardingFinished = createStore(
    true,
  ).on(onboardingFinished, () => true);

//   onboardingFinished.watch(() => {
//     ()=> true, true);
//   });