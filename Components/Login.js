import React,{useState} from "react"
import { View, Text,StyleSheet,Image,TextInput, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox';



const Login = () => {
    const [isChecked, setChecked] = useState(false); //checkbox
    const [username , setUsername] = useState("") //input username
    const [password , setPassword] = useState("") // input password

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Text.png")}  style={{width : 178, height : 31,marginVertical : 10,alignSelf : "center"}}  />
      <Text  style={{textAlign : "center",marginVertical : 15,fontSize : 22,color : "#0F4E4E"}}>Connexion à votre compte</Text>
      <View style={{marginVertical : 25}}>
      <Text style={styles.label}>Votre identifiant</Text>
      <TextInput value={username} onChangeText={(username) => setUsername(username)} placeholder='identifiant' style={styles.input} /> 
   
      </View>
      <View style={{marginVertical : 5}}>
      <Text style={styles.label}>Votre mot de passe</Text>
      <TextInput value={password} onChangeText={(password) => setPassword(password)} secureTextEntry={true} placeholder='Mot de passe' style={styles.input} />

      </View>
      <View style={{flexDirection : "row", justifyContent : "space-around"}} >
       
        <View style={{flexDirection : "row",}}>

      <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
          />
        <Text style={{color : "#0F4E4E"}}>Se souvenir de moi</Text>



          </View>
          <Text style={{color : "#0F4E4E", textDecorationLine : "underline"  }}>Mot de passe oublié</Text>
      </View>

      <TouchableOpacity   style={styles.ButtonB}>
                            <Text style={styles.ButtonTextB}>Se connecter</Text>
    </TouchableOpacity>

    <Text style={{textAlign : "center"}}>Vous n'avez pas de compte ?</Text>


    <TouchableOpacity   style={styles.ProduitBtn}>
                <Text style={styles.ProduitBtnText}>Découvrez nos produits</Text>
    </TouchableOpacity>

    
    </View>
  )
}

export default Login


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
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius : 10,
        
      },
      label : {
        fontSize : 14,
        paddingLeft : 10
        
      },
      checkbox : {
        marginHorizontal : 5,
        width : 18,
        height : 18
      },
      ProduitBtn : {
        elevation: 1,
        backgroundColor: "#ffff",
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginVertical : 32,
        width : 300,
        marginLeft : "auto",
        marginRight : "auto",
        borderColor : "#742942",
        borderWidth : 2
        
      },
      ProduitBtnText : {
        fontSize: 16,
        color: "#742942",
        alignSelf: "center",
        textTransform: "uppercase",
        lineHeight : 21,
      }
})