import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style = {styles.headingText}>FlatCard</Text>
      <View style = {styles.container}>
        <View style = {[styles.card, styles.cardOne]}>
            <Text style = {styles.cardText}>First</Text>
        </View>
        <View style = {[styles.card, styles.cardTwo]}>
            <Text style = {styles.cardText}>React</Text>
        </View>
        <View style = {[styles.card, styles.cardThree]}>
            <Text style = {styles.cardText}>Native</Text>
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
    container : {
        flex : 1,
        flexDirection : "row"
    },
    card: {
        width : 100,
        height : 100,
        borderRadius : 6,
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        margin : 8
    },
    cardOne: {
        backgroundColor : "#758AA2"
    },
    cardTwo: {
        backgroundColor : "#47535E"
    },
    cardThree: {
        backgroundColor : "#758AA2"
    },
    cardText : {
        color : "#FFFFFF",
        fontWeight : "bold",
        fontSize : 20
    }
})