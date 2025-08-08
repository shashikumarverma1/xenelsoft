import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, } from 'react-native';
import SlideUp from '../assets/images/home/SlideUp.png';
import SlideDown from '../assets/images/home/SlideDown.png';
import Profile from '../assets/images/home/profile.png';
import Menu from '../assets/icons/menu.png';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    const handleMenu = () => {
        console.log('Menu pressed');
    };
    const handleSlideUp = () => {
        console.log('Slide Up pressed');
        navigation.navigate('JobPost');
    }
    const handleSlideDown = () => {
        navigation.navigate('MapScreen');
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#7BB88E" barStyle="light-content" />
           <ScrollView style={styles.scrollContainer}>
            <View style={styles.headContainer}>
                <View style={styles.header}>
                    <Image
                        source={Profile}
                        style={styles.profileImage}
                    />


                    <View style={{ paddingLeft: 10 }}>
                        <Text style={styles.greetingText}>{`Hello :)
Jamil Hashem`}</Text>

                        <Text style={styles.greetDescrition}>What are you up to today?</Text>
                    </View>

                </View>
                <TouchableOpacity onPress={handleMenu} style={[{ backgroundColor: "#ffffff", padding: 16, borderRadius: 50, position: "relative", top: -35, left: -15 }]}>
                    <Image
                        source={Menu}
                        style={styles.menu} />
                </TouchableOpacity>
            </View>

          
          <View style={styles.bodyContainer}>
                  <Text style={styles.peopleText}>{
                    `People around you need your 
assistance
start helping and get rewarded`
                }</Text>


                <Text style={styles.needCashText}>NEED Cash?</Text>
                <View style={styles.slideDownContainer}>
                    <Text style={styles.slide}>SLIDE </Text>
                    <Text style={styles.slideDown}>UP</Text>

                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={handleSlideUp} style={{ alignSelf: 'center' }}>
                        <Image
                            source={SlideUp}
                            style={styles.slideUpImage}
                        />
                    </TouchableOpacity>
                    {/* handleSlideDown */}
                    <TouchableOpacity onPress={handleSlideDown} style={{ alignSelf: 'center' }}>
                        <Image
                            source={SlideDown}
                            style={styles.slideDownImage}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.needText}>NEED Assistant?</Text>
                <View style={styles.slideDownContainer}>
                    <Text style={styles.slide}>SLIDE </Text>
                    <Text style={styles.slideDown}>DOWN</Text>

                </View>
                <Text style={styles.bottomText}>
                    {`No worries many people near you\nare glad to help you\nDon't forget to reward them!`}
                </Text>
          </View>
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    bodyContainer:{
           backgroundColor: "#ffffff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -20,
    },
    imageContainer: {
         paddingVertical: 40 
    },
    scrollContainer: {
        backgroundColor: "#ffffff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // marginTop: -20,
    },
    greetDescrition: {
        fontWeight: "400",
        fontSize: 16,
        color: "#ffffff",
        lineHeight: 30
    },
    greetingText: {
        fontWeight: "700",
        fontSize: 24,
        color: "#FFFFFF",
        lineHeight: 30
    },
    headContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#7BB88E",
    },
    menu: {
        width: 15,
        height: 15,
        alignSelf: "center",
    },
    peopleText: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 18,
        color: "#919191",
        paddingTop: 30,
        lineHeight: 24
    },
    slideUp: {
        fontWeight: "700",
        fontSize: 22,
        color: "#919191",
        textAlign: "center",
        marginBottom: 10
    },
    needCashText: {
        fontWeight: "800",
        fontSize: 32,
        color: "#6CCAF0",
        textAlign: "center",
        marginTop: 20
    },
    slideUpImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: "center",
        marginBottom: -4
    },
    slideDownImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: "center",
        marginTop: -4
    },
    needText: {
        fontWeight: "800",
        fontSize: 32,
        color: "#F7C65B",
        textAlign: "center",

    },
    slideDownContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: -5
    },
    slideDown: {
        fontSize: 22,
        color: "#919191",
        fontWeight: "700"
    },
    slide: {
        fontSize: 22,
        color: "#919191",
        fontWeight: "500"
    },
    bottomText: {
        fontWeight: "500",
        fontSize: 18,
        color: "#919191",
        textAlign: "center",
        lineHeight: 25,
        marginTop: 20, 
        paddingBottom: 55
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#7BB88E',
        paddingTop: 60,
        paddingBottom: 80,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    profileImage: {
        width: 114,
        height: 114,
        borderRadius: 30,
    },


});