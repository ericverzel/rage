import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>User Profile</Text>
      {/* Here you can display user details and provide options to edit them */}
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

export default ProfileScreen;
