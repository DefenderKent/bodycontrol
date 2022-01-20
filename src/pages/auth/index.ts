import React from 'react';

import {View, StyleSheet} from 'react-native';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return <View style={styles.container}></View>;
};

export const styles = StyleSheet.create({
  container: {},
});
