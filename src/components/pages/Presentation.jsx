import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as WebBrowser from 'expo-web-browser';


export default function Presentation(props) {
    const [image, setImage] = useState('https://mir-s3-cdn-cf.behance.net/project_modules/fs/a5a6d114982833.5628b87ee0043.png');

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    const openLinkedin = () => {
        WebBrowser.openBrowserAsync("https://www.linkedin.com/in/sandric-courant/")
    }
    const openGithub = () => {
        WebBrowser.openBrowserAsync("https://github.com/SandricCourant")
    }
    const openFacebook = () => {
        WebBrowser.openBrowserAsync("https://www.facebook.com/sandriccourant/")
    }
    const openSms = () => {
        Linking.openURL("sms:0606060606")
    }
    const openTel = () => {
        Linking.openURL("tel:0606060606")
    }
    const openEmail = () => {
        Linking.openURL("mailto:jean.bon@gmail.com")
    }
    return (
        <View style={{flex: 0.8}}>
            <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={pickImage}>
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                </TouchableOpacity>
                <Text style={styles.title}>{props.nom} {props.prenom}</Text>
            </View>
            <View style={styles.description}>
                <Text style={[styles.text, {fontWeight:'bold', textDecorationLine: 'underline',}]}>Bio</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eveniet mollitia sint, quae maiores aliquid et quasi, laboriosam, aspernatur excepturi labore? Veniam laudantium nemo quibusdam vero voluptatum necessitatibus voluptatibus assumenda?</Text>
            </View>
            <View style={{flex:0.7, alignItems: 'center', justifyContent: 'space-between', flexDirection:'row'}}>
                <TouchableOpacity style={styles.button} onPress={openLinkedin}><Text style={styles.text}>Linkedin</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={openGithub}><Text style={styles.text}>Github</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={openFacebook}><Text style={styles.text}>Facebook</Text></TouchableOpacity>
            </View>
            <View style={{flex:0.7, alignItems: 'center', justifyContent: 'space-between', flexDirection:'row'}}>
                <TouchableOpacity style={styles.button} onPress={openSms}><Text style={styles.text}>📱 SMS</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={openTel}><Text style={styles.text}>📞 TEL</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={openEmail}><Text style={styles.text}>✉️ EMAIL</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#5c807a',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
        paddingVertical: 4,
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
    description:{
        flex:1,
        justifyContent: 'center',
        backgroundColor:'#59bf9e',
        borderRadius:8,
        paddingHorizontal:8,
    },
    title:{
        color:'white',
        fontSize: 20,
        fontWeight:'bold',
        backgroundColor:'#59bf9ecf',
        textTransform:'capitalize',
        paddingHorizontal:6,
        borderRadius:8,
        paddingVertical:5,
    }
});