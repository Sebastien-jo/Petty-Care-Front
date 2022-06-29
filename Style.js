import {StyleSheet} from "react-native";

export default StyleSheet.create ({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 40,
        backgroundColor: "#FFFF",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column" 
    },

    primaryTitle: {
        fontFamily: "Parisine Plus Std",
        fontSize: 22,
        fontWeight: 700,
        color: "#0F4E4E",
        textAlign: "center"
    },

    secondaryTitle: {
        fontFamily: "Parisine Plus Std",
        fontSize: 20,
        fontWeight: 700,
        color: "#0F4E4E",
        textAlign: "left"
    },

    tertiaryTitle: {
        fontFamily: "Parisine Plus Std",
        fontSize: 16,
        fontWeight: 600,
        color: "#0F4E4E"
    },

    primaryCta: {
        elevation: 1,
        backgroundColor: "#0F4E4E",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 20,
        textAlign: "center",
        width: 300
    },

    primaryCtaText: {
        textTransform: "uppercase",
        fontFamily: "Bilo",
        fontWeight: 400,
        letterSpacing: 0.4,
        color: "#FFFF"
    },

    secondaryCta: {
        elevation: 1,
        backgroundColor: "#c7ebe6",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 20,
        textAlign: "center",
        width: 300
    },

    secondaryCtaText: {
        textTransform: "uppercase",
        fontFamily: "Bilo",
        fontWeight: 500,
        color: "#0F4E4E"
    },

    logoInline: {
        width: 150,
        height: 35,
        marginTop: 10,
        marginBottom: 30,
        alignSelf: "center"
    },
    
    currentText: {
        fontFamily: "Bilo",
        fontWeight: 300,
        fontSize: 14,
        color: "#151515",
        textAlign: "left",
        paddingTop: 15
    },

    itemTextList: {
        fontFamily: "Bilo",
        lineHeight: 18,
        fontWeight: 300,
        fontSize: 14,
        textAlign: "left",
        marginTop: 10,
        color: "#151515",
    },

    baselineText: {
        fontFamily: "Bilo",
        fontWeight: 300,
        fontSize: 14,
        color: "#151515",
        paddingVertical: 0,
        textAlign: "center"
    },

    imageCircle: {
        borderRadius: 99,
        alignSelf: "center",
        width: 160,
        height: 160,
        margin: 20
    }
});