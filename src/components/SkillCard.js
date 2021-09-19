import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


export function SkillCard(){
  return (
    <TouchableOpacity key={skill} style={styles.buttonSkill}>
    <Text style={styles.textskill}>
       {skill}
    </ Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textskill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
});
