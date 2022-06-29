import { View, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import React from 'react';
import Style from '../Style';

const CGU = ({navigation}) => {

    const DATA = [
        {
          id: '1',
          title: '1. Vous choisissez qui peut voir et contrôler vos produits Petty Care.',
        },
        {
          id: '2',
          title: '2. Nous améliorons constamment nos produits et services, c’est la raison pour laquelle certaines fonctions ou fonctionnalités sont susceptibles d’évoluer au fil du temps.',
        }
      ];

      const renderItem = ({item}) => (
          <View>
              <Text style={Style.itemTextList}>{item.title}</Text>
          </View>
      );

  return (
      <View style={Style.container}>

          <View>
              <Text style={Style.secondaryTitle}>Conditions d’utilisation</Text>

              <Text style={Style.currentText}>Nos conditions d’utilisation indiquent à quoi vous attendre de notre part et ce que nous attenons de votre part.</Text>
          </View>

          <View>
              <Text style={Style.currentText}>Nous vous recommandons de lire l’intégralité des informations, mais nous tenons à souligner les deux points suivants :</Text>

              <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
              />

              <Text style={Style.currentText} >
                  Vous pouvez lire l’intégralité des Conditions d’utilisation ci-dessous. Vous souhaitez les relire ? Elles sont égalements disponibles dans la section Paramètres.
              </Text>
          </View>

          <View>
              <Text style={Style.baselineText}>
                  Acceptez-vous ces conditions d’utilisation ?
              </Text>

              <TouchableOpacity onPress={() => navigation.navigate("Confidential")} style={Style.primaryCta}>
                  <Text style={Style.primaryCtaText}>J'accepte</Text>
              </TouchableOpacity>
          </View>

      </View>
  )
}

export default CGU
