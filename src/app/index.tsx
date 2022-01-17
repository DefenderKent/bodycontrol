import React from 'react';

import {View, StyleSheet} from 'react-native';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return <View style={styles.container}></View>;
};

export const styles = StyleSheet.create({
  container: {},
});
