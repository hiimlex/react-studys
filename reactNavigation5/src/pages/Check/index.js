import React from 'react';
import {Button, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

export default function Check({route, navigation}) {
  const {check} = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          If button is checked the color is{' '}
          <Text style={{color: 'blue'}}>blue</Text> else{' '}
          <Text style={{color: 'red'}}>red</Text>
        </Text>
        <View>
          <Button
            title={check ? 'Ok' : 'NOTOK'}
            color={check ? 'blue' : 'red'}
            style={{marginBottom: 20}}
          />
        </View>
      </View>
      {check ? (
        <View>
          <Text style={styles.message}>Great Job is checked</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.message}>Go check</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
  text: {fontSize: 20, fontWeight: 'bold', marginBottom: 20},
  message: {fontSize: 20, marginTop: 20, marginBottom: 10},
});
