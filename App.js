import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';
import PageViewer from './src/components/PageViewer';

const image = { uri: 'https://w0.peakpx.com/wallpaper/108/638/HD-wallpaper-underwater-earth-ocean-sea-under-water.jpg' };

export default function App() {
  return (
    <View style={styles.container}>
        <PageViewer/>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
