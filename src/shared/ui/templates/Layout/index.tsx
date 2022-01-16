import React from 'react';
import {View, ViewProps, StyleSheet} from 'react-native';

export const Layout: React.FC<ViewProps> = ({style, ...props}) => {
  return <View style={[styles.container, style]} {...props} />;
};

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
});
