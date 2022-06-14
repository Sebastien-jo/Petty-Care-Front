import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image,SafeAreaView,FlatList , ScrollView, } from 'react-native';

const Install = ({navigation}) => {




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
        <View>

        <Text style={{lineHeight : 25, fontSize : 15, paddingLeft : 10, padding : 10,}}>{item.title}</Text>
        </View>
      );
    return(
        
        <View style={styles.Install}>
            
            <View>
            <Image style={{width : 161.55, borderRadius : 99,  alignSelf : "center",}}  source={require("./ImgRad.png")} />  
               <Image source={require("../assets/Text.png")}  style={{width : 138, height : 31,marginVertical : 10,alignSelf : "center"}}  />
            </View>
            
            <View style={{flex : 2}}>

            <Text style={{ fontSize : 20, color : "#0F4E4E",padding :10}}>Lançons-nous ! Voici ce que vous devez faire avant de commencer :</Text>
            <FlatList style={{paddingVertical : 50}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
                </View>
            
                
                
                <TouchableOpacity onPress={() => navigation.navigate("CGU")}  style={styles.ButtonB}>
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
       
        textAlign : "center",
        marginVertical : 10
       
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
        paddingHorizontal: 10,
        marginVertical : 32,
        width : 300,
        marginLeft : "auto",
        marginRight : "auto"
         
      },

})