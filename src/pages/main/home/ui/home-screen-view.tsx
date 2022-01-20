import {Layout} from '@shared/ui/templates/Layout';
import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

interface HomeScreenViewProps {}

export const HomeScreenView: React.FC<HomeScreenViewProps> = () => {
  return (
    <Layout style={styles.container}>
      <Text>{'BodyInfoList'}</Text>
    </Layout>
  );
};

export const styles = StyleSheet.create({
  container: {},
});
