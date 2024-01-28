import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style = {styles.headingText}>FancyCard</Text>
      <View style = {[styles.card, styles.cardDesign]}>
        <Image source={{uri : 'https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg'}} style = {styles.cardImage}/>
        <View style = {styles.cardMain}>
            <Text style = {styles.cardTitle}>Taj Mahal</Text>
            <Text style = {styles.cardLabel}>Delhi, Agra</Text>
            <Text style = {styles.cardDescription}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.</Text>
            <Text style = {styles.cardFooter}>ETA : 2 Days 5 Hours</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 20,
        fontWeight : "bold",
        paddingStart : 20,
        paddingTop : 10
    },
    card : {
        height : 380,
        margin : 8,
        borderRadius : 8
    },
    cardDesign : {
        backgroundColor : "#487EB0"
    },
    cardImage : {
        height : 180,
        borderTopLeftRadius : 8,
        borderTopRightRadius : 8
    },
    cardMain: {
        flex : 1,
        flexGrow : 1
    },
    cardTitle: {
        color : "#FFFFFF",
        fontWeight : 'bold',
        fontSize : 22,
        marginLeft : 10,
        marginTop : 10,
        marginBottom : 6,
        flexGrow : 1
    },
    cardLabel: {
        color : "#FFFFFF",
        fontSize : 15,
        marginLeft : 10,
        marginBottom : 6,
        flexShrink : 1
    },
    cardDescription: {
        color : "#FFFFFF",
        fontSize : 17,
        marginLeft : 10,
        marginBottom : 6,
        marginEnd: 10,
        alignItems : 'stretch',
        flexGrow : 2
    },
    cardFooter: {
        color : "#FFFFFF",
        fontSize : 14,
        marginLeft : 10,
        marginBottom : 6,
        flexShrink : 1
    }
})