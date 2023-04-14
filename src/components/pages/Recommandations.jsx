import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps"
const image = 'https://rootsandshoots.fr/wp-content/uploads/2018/08/onu-logo-transparent.png';

const Recommandations = (props) => {
    const [comments, setComments] = useState([]);
    const [index, setIndex] = useState(0)
    const comment = comments[index]
    useEffect(() => {
        getComments();
    }, []);

    const getComments = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const json = await response.json();
            setComments(json);
        } catch (error) {
            console.log(error);
        }

    }
    const handleNextComment = () => {
        if (index < comments.length - 1) {
            setIndex(index + 1);
        }
    }

    const handlePreviousComment = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }
    return (
        <View style={{flex:1}}>
            <View style={{alignItems:'center', flex:1}}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text>{props.name}</Text>
            </View>
            <View style={[styles.fontText, {flex:1}]}>
                <Text style={styles.text}>PAGE COMMENTS</Text>
                <Text style={styles.text}>{comment?.email}</Text>
                <Text style={styles.text}>{comment?.body}</Text>

                <View style={styles.button}>
                    <Button color='#75bbe7' title="Précédent" onPress={handlePreviousComment} />
                    <Button color='#75bbe7' title="Suivant" onPress={handleNextComment} />
                </View>
            </View>
            <View style={{flex:1}}>
                <MapView style={styles.map} initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                    <Marker coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                        title={props.name}
                        description={props.description} />
                </MapView>
            </View>
        </View >
    );
}

export default Recommandations

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    fontText: {
        backgroundColor: '#75bbe7',
        borderRadius:15,
        justifyContent:'center'
    },
    text: {
        paddingBottom: 15,
        color: 'white',
        textAlign: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
});