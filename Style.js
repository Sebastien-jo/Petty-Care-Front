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
        flexDirection: "column",
    },

    scrollview: {
        flex: 1,
        width: "100%",
        paddingTop: 20,
        paddingBottom: 40
    },

    containerView: {
        justifyContent: "center",
        alignItems: "center",
    },

    primaryTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0F4E4E",
        textAlign: "center"
    },

    secondaryTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#0F4E4E",
        textAlign: "left"
    },

    tertiaryTitle: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#0F4E4E"
    },

    primaryCta: {
        elevation: 1,
        backgroundColor: "#0F4E4E",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 20,
        marginBottom: 15,
        alignItems: "center",
        width: 300
    },

    primaryCtaText: {
        textTransform: "uppercase",
        fontWeight: "bold",
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
        alignItems: "center",
        width: 300
    },

    secondaryCtaText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#0F4E4E"
    },

    tertiaryCta: {
        elevation: 1,
        backgroundColor: "#FFFF",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#742942",
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 20,
        alignItems: "center",
        width: 300
    },

    tertiaryCtaText: {
        textTransform: "uppercase",
        fontWeight: "bold",
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
        fontWeight: "bold",
        fontSize: 24,
        color: "#0F4E4E",
        textAlign: "center"
    },

    subtitleText: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#0F4E4E",
        textAlign: "center"
    },
    
    currentText: {
        fontWeight: "normal",
        fontSize: 14,
        color: "#0F4E4E",
        textAlign: "left",
        paddingTop: 15
    },

    currentBoldText: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#0F4E4E",
        textAlign: "left",
        paddingTop: 15
    },

    baselineText: {
        fontWeight: "normal",
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
        margin: 15
    },

    labelText: {
        fontSize : 14,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#0F4E4E",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10,
        marginBottom: 10,
        textAlign: "left",
        maxWidth: "100%"
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
        fontSize: 14,
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
        height: 220
    },

    headerAnimal: {
        flexDirection: "column",
        padding: 15,
        marginTop: 60
    },

    headerAnimalTitle: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold"
    },

    headerAnimalText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
    },

    headerAnimalStatut: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
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