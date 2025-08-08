import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BackIcon from '../assets/icons/back.png';
import RedLocation from '../assets/icons/bigRedLocation.png';
import StarRating from '../component/start';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function MapScreen({ navigation }) {
    const handleBack = () => {
        navigation.goBack(); // Navigate back to the previous screen
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack} style={styles.back}>
                <Image source={BackIcon} />
            </TouchableOpacity>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 28.6139,
                    longitude: 77.2090,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                <Marker
                    coordinate={{ latitude: 28.6139, longitude: 77.2090 }}
                    title="New Delhi"
                    description="This is a marker in New Delhi"
                />
            </MapView>
            <View style={[styles.bottomFixed]}>
                <View style={styles.locationContainer}>
                    <Text style={styles.locationText}>{'Packing & organizing\n storage'}</Text>
                    <Image
                        source={RedLocation}
                        style={styles.location} />
                </View>
                <View style={styles.starTextContainer}>
                    <Text style={styles.name}>{'by John Carter'}</Text>
                    <View style={styles.starContainer}>
                        <StarRating />
                    </View>
                </View>
                <TouchableOpacity style={{}}>
                    <LinearGradient
                        colors={['#31C478', '#6DD19D']}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 0 }}
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.buttonLable}>View Profile</Text>
                    </LinearGradient>

                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 100,
        width: windowWidth * .9,
        marginTop: 20,

    },
    buttonLable: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
    },
    bottomFixed: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: '#fff', // or any background color
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        paddingBottom: 50,
    },
    locationContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        paddingHorizontal:15,
    },
    location: {
        width: 50,
        height: 50,
        marginLeft: 10
    },
    starTextContainer: {
        flexDirection: "row",
        alignItems: "center",
       
        width: '100%',
        paddingHorizontal:20,
    },
    starContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20
    },
    name: {
        fontWeight: "600",
        fontSize: 16,
        color: '#000000',
    },
    locationText: {
        fontWeight: "600",
        fontSize: 24,
        color: '#000000',

    },
    card: {
        backgroundColor: '#fff',


        // iOS Shadow
        shadowColor: '#0000000D',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Android Shadow
        elevation: 5,
    },

    back: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 30,
        left: 20,
        zIndex: 200
    },
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});
