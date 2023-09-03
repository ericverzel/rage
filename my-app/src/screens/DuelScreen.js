import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DuelScreen() {
  return (
    <View style={styles.container}>
      <Text>Duel Details</Text>
      {/* Here you can display details of a specific duel */}
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

export default DuelScreen;
