import {StyleSheet} from "react-native";

export default StyleSheet.create ({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 40,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column"
    },

    containerNavigator: {
        flex: 1,
        height: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column"
    },

    scrollview: {
        flex: 1,
        width: "100%",
        paddingTop: 20,
        paddingBottom: 40
    },

    tapbar: {
        activeTintColor: "#151515",
        fontSize: 12
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
        color: "#FFFFFF"
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

    tertiaryCta: {
        elevation: 1,
        backgroundColor: "#FFFF",
        borderRadius: 25,
        border: "1px solid #742942",
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10,
        textAlign: "center",
        width: 300
    },

    tertiaryCtaText: {
        textTransform: "uppercase",
        fontFamily: "Bilo",
        fontWeight: 500,
        color: "#742942"
    },

    submitCenter: {
        width: "100%",
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },

    optionActions: {
        paddingTop: 30,
        justifyContent: "center",
        alignItems: "center"
    },

    logoInline: {
        width: 150,
        height: 35,
        marginTop: 10,
        marginBottom: 30,
        alignSelf: "center"
    },

    hightText: {
        fontSize: 24,
        fontWeight: 700,
        color: "#0F4E4E",
        textAlign: "center"
    },

    subtitleText: {
        fontFamily: "Parisine Plus Std",
        fontSize: 14,
        fontWeight: 700,
        color: "#0F4E4E",
        textAlign: "center"
    },
    
    currentText: {
        fontFamily: "Bilo",
        fontWeight: 300,
        fontSize: 14,
        color: "#0F4E4E",
        textAlign: "left",
        paddingTop: 15
    },

    currentBoldText: {
        fontFamily: "Bilo",
        fontWeight: 500,
        fontSize: 14,
        color: "#0F4E4E",
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
        color: "#0F4E4E",
    },

    baselineText: {
        fontFamily: "Bilo",
        fontWeight: 300,
        fontSize: 14,
        color: "#0F4E4E",
        paddingVertical: 0,
        textAlign: "center"
    },

    imageCircle: {
        borderRadius: 99,
        alignSelf: "center",
        width: 160,
        height: 160,
        margin: 20
    },

    labelText: {
        fontSize : 14,
        backgroundColor: "#FFFFFF",
        border: "1px solid #0F4E4E",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10,
        marginBottom: 10,
        textAlign: "left",
        width: "100%"
    },

    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 8,
        marginRight: 5
    },

    legendCheckbox: {
        fontSize: 12,
        color: "#0F4E4E"
    },

    linkText: {
        fontSize: 12,
        color: "#0F4E4E",
        textDecorationLine: "underline"
    },

    alertLink: {
        color: "#FF6480",
        textDecorationLine: "underline",
        fontSize: 12,
        paddingTop: 20
    },

    errorText: {
        fontSize: 12,
        color: "#FF6480",
        textAlign : "center",
        marginTop: 10
    },

    card: {
        marginTop: 25
    },

    halfCard: {
        flexDirection: "column", 
        backgroundColor: "#E2F1EF",
        width: "48%",
        padding: 30,
        margin: 2,
        marginTop: 8,
        borderRadius: 18,
        justifyContent: "space-between",
        alignItems: "center"
    },

    wholeCard: {
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#E2F1EF",
        padding: 30,
        margin: 2,
        marginTop: 8,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center"
    },

    headerParameters: {
        width: "100%",
        paddingTop: 20
    },

    blockParameters: {
        width: "100%",
        paddingTop: 20
    },

    parametersCard: {
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#E2F1EF",
        padding: 15,
        margin: 2,
        marginTop: 8,
        borderRadius: 18,
        justifyContent: "space-between",
    },

    parametersTab: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15
    },

    parametersText: {
        fontFamily: "Bilo",
        fontSize: 14,
        fontWeight: 400,
        color: "#0F4E4E"
    },

    chevrons: {
        width: 8,
        height: 8
    },

    headerDashboard: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        marginTop: 15
    },

    headerProfile: {
        width: "100%",
        height: "220px"
    },

    headerAnimal: {
        flexDirection: "column",
        padding: 15,
        marginTop: 60
    },

    headerAnimalTitle: {
        color: "#FFFFFF",
        fontSize: "22px",
        fontWeight: "500"
    },

    headerAnimalText: {
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "Bilo"
    },

    headerAnimalStatut: {
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "Bilo",
        paddingTop: 10
    },

    historyCards: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },

    iconHelp: {
        height: 16,
        width: 16,
        marginRight: 15
    },

    iconNotif: {
        height: 16,
        width: 16
    }
});