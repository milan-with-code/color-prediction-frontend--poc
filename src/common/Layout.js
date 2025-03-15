import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

const Layout = ({
  children,
  style,
  inlineStyle,
  translucent = true,
  statusBarStyle = 'dark-content',
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, inlineStyle]}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor="transparent"
        translucent={translucent}
      />

      <ScrollView
        contentContainerStyle={[styles.content, style]}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A1C26',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 20,
  },

  content: {
    flexGrow: 1,
  },
});

export default Layout;
