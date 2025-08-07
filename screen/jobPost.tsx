import { View, Text, TouchableOpacity, StatusBar, Image, StyleSheet } from "react-native"
import Profile from '../assets/images/home/profile.png';
import Camera from '../assets/icons/camera.png';
import Location from '../assets/icons/location.png';

export const JobPost = () => {
    return (
        <View>
            <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
            <View style={styles.headContainer}>
                <View style={styles.header}>
                    <Image
                        source={Profile}
                        style={styles.profileImage}
                    />


                    <View style={{ paddingLeft: 10 }}>
                        <Text style={styles.greetingText}>{`No worries Fadi,\n Let’s get you a 
Lifestyle assistant :)`}</Text>

                    </View>

                </View>

            </View>
            <View style={[styles.card, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 35 }]}>

                <View style={{ padding: 18, }}>
                    <Text style={[styles.subHeading,]}>Tell us what you need help with?</Text>
                    <Text style={styles.heading}>Apply for travel visa online</Text>
                    <Text style={[styles.subHeading, styles.applyBoxGap]}>Tell us a bit more about your request so your Lifestyle Assistant knows exactly how to help and be prepared.</Text></View>
            </View>
            <View style={[styles.card, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                <Image
                    source={Location}
                    style={styles.cameraIcon}
                />
                <Text style={styles.subHeading}>Set Location</Text>
            </View>
            <View style={[styles.card, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                <Image
                    source={Camera}
                    style={styles.cameraIcon}
                />
                <Text style={styles.subHeading}>Add Pictures (Optional)</Text>
            </View>
            <View style={[styles.card, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>

                <Text style={styles.subHeading}>{'How much are you willing to reward your \n lifestyle assistant?'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "600",
        fontSize: 18,
        color: "#5A5B5A",
        lineHeight: 24,
        paddingBottom: 20,
        paddingTop: 10
    },
    applyBoxGap: {
        paddingBottom: 60,
    },
    subHeading: {
        fontWeight: "400",
        fontSize: 12,
        color: "#5A5B5A",
        lineHeight: 20
    },
    cameraIcon: {
        marginRight: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 26,
        padding: 16,
        margin: 10,

        // iOS Shadow
        shadowColor: '#0000000D',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Android Shadow
        elevation: 5,
    },
    greetingText: {
        fontWeight: "700",
        fontSize: 24,
        color: "#FFFFFF",
        lineHeight: 30
    },
    header: {
        backgroundColor: '#4CAF50',
        paddingTop: 60,
        paddingBottom: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: "center",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,

    },
    profileImage: {
        width: 114,
        height: 114,
        borderRadius: 30,
    },
    headContainer: {
        // flexDirection: "row",
        // alignItems: "center",
        // backgroundColor: "#4CAF50",

    },
})


