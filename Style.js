import {StyleSheet} from "react-native";

export default StyleSheet.create ({
    container: {
        flex: 1,
        margin: 20,
        backgroundColor: "#FFFF",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column" 
    },

    primaryTitle: {
        fontFamily: "Parisine Plus Std",
        fontSize: 24,
        fontWeight: 700,
        color: "#0F4E4E",
        textAlign: "center"
    },

    secondaryTitle: {
        fontFamily: "Parisine Plus Std",
        fontSize: 20,
        fontWeight: 700,
        color: "#0F4E4E"
    },

    tertiaryTitle: {
        fontFamily: "Parisine Plus Std",
        fontSize: 16,
        fontWeight: 600,
        color: "#0F4E4E"
    },

    currentText: {
        fontFamily: "Bilo",
        fontWeight: 300,
        fontSize: 14,
        color: "#0F4E4E",
        paddingVertical: 20,
        textAlign: "center"
    },

    secondaryCta: {
        elevation: 1,
        backgroundColor: "#c7ebe6",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 12,
        textAlign: "center",
        width: 300
    },

    secondaryCtaText: {
        textTransform: "uppercase",
        fontFamily: "Bilo",
        fontWeight: 500,
        color: "#0F4E4E"
    },

    primaryCta: {
        elevation: 1,
        backgroundColor: "#0F4E4E",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 30,
        textAlign: "center",
        width: 300
    },

    primaryCtaText: {
        textTransform: "uppercase",
        fontFamily: "Bilo",
        fontWeight: 400,
        letterSpacing: 0.2,
        color: "#FFFF"
    },
});