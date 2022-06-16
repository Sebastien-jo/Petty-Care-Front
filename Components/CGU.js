import { View, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'

const CGU = ({navigation}) => {


    const DATA = [
        {
          id: '1',
          title: '1.Vous choisissez qui peut voir et contrôler vos produits Petty Care.',
        },
        {
          id: '2',
          title: '2. Nous améliorons constamment nos produits et services, c’est la raison pour laquelle certaines fonctions ou fonctionnalités sont susceptibles d’évoluer au fil du temps.',
        },
      ];



      const renderItem = ({ item }) => (
        <View>
        <Text style={{lineHeight : 25, fontSize : 15, paddingLeft : 5, padding : 10,}}>{item.title}</Text>
        </View>
      );

  return (
    <View style={styles.container}>
      <Text style={{fontSize : 25, lineHeight : 25, color : "#0F4E4E"}}>Conditions d’utilisation</Text>
      <Text style={styles.Texte}>Nos conditions d’utilisation indiquent à quoi vous attendre de notre part et ce que nous attenons de votre part</Text>
      <Text>Nous vous recommandons de lire l’intégralité des informations, mais nous tenons à souligner les deux points suivants :</Text>
      <FlatList style={{paddingVertical : 50}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
      <Text style={{fontSize : 14}} >Vous pouvez lire l’intégralité des Conditions d’utilisation ci-dessous. Vous souhaitez les relire ? Elles sont égalements disponibles dans la section Paramètres.</Text>
      <Text style={{textAlign : "center",marginVertical : 20}}>Acceptez-vous ces conditions d’utilisation ?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Politique de confidentialité")}   style={styles.ButtonB}>
                            <Text style={styles.ButtonTextB}>j'accepte</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CGU


const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        marginVertical : 20,
        paddingLeft : 10,
       textAlign : "center",
       
    },

    Texte : {
        fontSize : 14,
        lineHeight : 18,
        color : "#151515",
        marginVertical : 20
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