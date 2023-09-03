import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text>User Dashboard</Text>
      {/* Here you can display the user's monthly earnings, number of duels, wins, losses, and draws */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardScreen;
