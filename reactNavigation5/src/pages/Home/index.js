import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('Check', {check: true});
        }}>
        <Text style={styles.text}>Check</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('Check', {check: false});
        }}>
        <Text style={styles.text}>No Check</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
