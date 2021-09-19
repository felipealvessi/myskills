/* eslint-disable react-native/no-inline-styles */
import React, { useState }from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const [newSkill, setNewSkill] = useState('');
  const [mySkill, setmySkill] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Felipe!</Text>

      <TextInput 
      style={styles.input} 
      placeholder='New Skill'
      placeholderTextColor='#555'
      />

      <TouchableOpacity
       style={styles.button}
       activeOpacity={.7}
       >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 50}]}>
        My Skills
      </Text>

      <Text style={styles.skill}>
      teste
      </ Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7
  }, 
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
});