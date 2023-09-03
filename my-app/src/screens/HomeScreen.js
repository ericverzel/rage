import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function HomeScreen() {
  const cards = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    // Add more cards as needed
  ];

  const Separator = () => (
    <View style={{ height: 1, backgroundColor: 'gray', marginVertical: 8 }} />
  );

  return (
    <View style={styles.container}>
      <Text>Available Duels</Text>
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.contentContainer}
      >
        {cards.map((card) => (
          <View key={card.id} style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Separator />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollArea: {
    height: 200,
    width: '80%',
    borderRadius: 8,
    borderWidth: 1,
  },
  contentContainer: {
    padding: 4,
  },
  cardContainer: {
    marginBottom: 8,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;