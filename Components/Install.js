import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image,SafeAreaView,FlatList  } from 'react-native';
const Install = () => {

    const DATA = [
        {
          id: '1',
          title: '1. Prenez connaissance de nos Conditions d’utilisation et de notre Politique de confidentialité',
        },
        {
          id: '2',
          title: '2. Choissiez les données que nous pouvons utiliser pour personnaliser votre expérience et optimiser nos produits ',
        },
        {
          id: '3',
          title: '3. Sélectionnez le type de communications que vous souhaitez recevoir dans l’application',
        },
      ];

      const renderItem = ({ item }) => (
        <Text style={{lineHeight : 28, fontSize : 20, paddingLeft : 10}}>{item.title}</Text>
      );
    return(
        
        <View style={styles.Install}>
            <View>
            <Image style={{width : 161.55, borderRadius : 99,height : 161.55,marginBottom : 20}} source={require("./ImgRad.png")} />  
               
            </View>
                <FlatList style={{paddingVertical : 150}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
                <TouchableOpacity  style={styles.ButtonB}>
                            <Text style={styles.ButtonTextB}>Continuer</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Install


const styles = StyleSheet.create({
    Install : {
        flex : 1,
        alignItems : "center",
        justifyContent : "space-between",
        flexDirection : "column",
        textAlign : "center"
    },
  
 
      ButtonTextB: {
        fontSize: 16,
        color: "#ffff",
       
        alignSelf: "center",
        textTransform: "uppercase",
        
        lineHeight : 21,
      
      },
      ButtonB : {
        elevation: 1,
        backgroundColor: "#0F4E4E",
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 100,
        marginVertical : 32,
        
      },

})