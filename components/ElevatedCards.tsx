import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal ={true} showsHorizontalScrollIndicator={false}>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text style = {styles.cardText}>Tap</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text style = {styles.cardText}>Me</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text style = {styles.cardText}>To</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text style = {styles.cardText}>See</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text style = {styles.cardText}>The</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text style = {styles.cardText}>magic</Text>
        </View>
      </ScrollView>
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
    card: {
        width : 100,
        height : 100,
        borderRadius : 4,
        margin : 8,
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    cardElevated: {
        backgroundColor : "#616C6F",
        elevation : 4,
        shadowOffset : {
            width :1,
            height: 1
        },
        shadowColor : '#FF0000',
        shadowOpacity : 0.4,
        shadowRadius : 4
    }, 
    cardText : {
        fontSize : 16,
        fontWeight: 'bold',
        color : "#FFFFFF"
    }
})