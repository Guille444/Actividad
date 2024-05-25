// src/screens/Autos.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Autos = () => {
  const colors = [
    { name: 'Honda Ridgeline', image: require('../img/auto1.jpg') },
    { name: 'Honda Pilot', image: require('../img/auto2.jpg') },
    { name: 'Honda Civic Sedan', image: require('../img/auto3.jpg') },
    { name: 'Honda Accord Hybrid', image: require('../img/auto4.jpg') },
    { name: 'Honda Civic Type R', image: require('../img/auto5.jpg') },
    { name: 'Honda Odyssey', image: require('../img/auto6.jpg') },
    
    { name: 'Nissan Rogue', image: require('../img/auto7.jpg') },
    { name: 'Nissan Pathfinder', image: require('../img/auto8.jpg') },
    { name: 'Nissan ARIYA', image: require('../img/auto9.jpg') },
    { name: 'Nissan Kicks', image: require('../img/auto10.jpg') },
    { name: 'Nissan Murano', image: require('../img/auto11.jpg') },
    { name: 'Nissan Armada', image: require('../img/auto12.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>HONDA</Text>
      <View style={styles.section}>
        {colors.slice(0, 6).map((color, index) => (
          <View key={index} style={styles.colorBox}>
            <Image style={styles.image} source={color.image} />
            <Text style={styles.colorName}>{color.name}</Text>
            <Text style={styles.colorCode}>{color.hex}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.header}>NISSAN</Text>
      <View style={styles.section}>
        {colors.slice(6).map((color, index) => (
          <View key={index} style={styles.colorBox}>
            <Image style={styles.image} source={color.image} />
            <Text style={styles.colorName}>{color.name}</Text>
            <Text style={styles.colorCode}>{color.hex}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  colorBox: {
    width: '45%',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  colorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  colorCode: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default Autos;