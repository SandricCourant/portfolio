import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import groupes from '../../../assets/experiences.json';
import { ImageBackground } from 'react-native';
const image = { uri: 'https://i.pinimg.com/236x/3c/68/da/3c68dab83506f9299e8ebf2e1579de47.jpg' }

const Experiences = () => {
  const afficherCartes = () => {
    return groupes.sort((function(a, b){return a.année-b.année})).map((groupe, index) => (
      <View key={index} style={styles.container}>
        <ImageBackground borderRadius={15} source={image} resizeMode='cover' style={styles.carte}>
        <Text style={[styles.titre, styles.text, styles.font]}>{groupe["nom Entreprise"]}</Text>
        <View style={styles.font}>
          <Text style={styles.text}>{groupe["année"]}</Text>
          <Text style={styles.text}>{groupe["poste"]}</Text>
          <Text style={styles.text}>{groupe["description"]}</Text>
        </View>
      </ImageBackground>
      </View>
      
    ));
  }
  return (
    <View style={{flex:1}}>
      <Text style={[styles.titre, styles.title]}>EXPERIENCES</Text>
      <ScrollView contentContainerStyle={styles.scrollConteneur}>
        {afficherCartes()}
      </ScrollView>
    </View>
  );
}

export default Experiences

const styles = StyleSheet.create({
  container:{
    width:'80%',
  },
  scrollConteneur: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carte: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
  },
  titre: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    color: 'white',
    fontSize:8,
  },
  font: {
    backgroundColor: '#2f82b7bf',
    borderRadius: 15,
    padding: 8,
  },
  title:{
    alignSelf:'center'
  },
});