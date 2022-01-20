import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

interface BodyInfoUpdateScreenProps {}

export const BodyInfoUpdateScreen: React.FC<BodyInfoUpdateScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>{'BodyInfoList'}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {},
});
