import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

interface BodyInfoListProps {}

export const BodyInfoList: React.FC<BodyInfoListProps> = () => {
  return (
    <View style={styles.container}>
      <Text>{'BodyInfoList'}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {},
});
