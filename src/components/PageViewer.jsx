import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import Presentation from './pages/Presentation';
import Experiences from './pages/Experiences';
import Recommandations from './pages/Recommandations';
import Formations from './pages/Formations';

export default function PageViewer(){
  const desc = "Entreprise américaine la plus puissante du monde"
  return (
    <View style={{flex:1, top:'5%', marginHorizontal:12}}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <Presentation nom='courant' prenom='sandric'/>
        </View>
        <View style={[styles.page, {flexDirection:'row'}]} key="2">
          <Experiences/>
          <Formations/>
        </View>
        <View style={styles.page} key="3">
          <Recommandations name="United Groups" description={desc}/>
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});