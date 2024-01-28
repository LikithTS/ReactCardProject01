import { Button, Image, Linking, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
  return (
    <View>
      <Text style = {styles.headerText}>ActionCard</Text>
      <View style = {[styles.card, styles.cardElevation]}>
        <Image source={{uri: 'https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg'}} style = {styles.cardImage}/>
        <View style = {styles.cardLableContent}>
            <Text style = {styles.cardTitle}>Tiger</Text>
            <Text style = {styles.cardDescription}>Want to read more about tiger? Touch or Click below.</Text>
            <View  style = {styles.cardButtonContainer}>
                <Pressable onPress={readMore}>
                    <Text style = {styles.buttonTitle}>Read More...</Text>
                </Pressable>
            </View>
            <View style ={styles.touchContainerStyle}>
                <TouchableOpacity onPress={followMe}>
                    <Text style ={styles.touchTextStyle}>Follow Me On GitHub</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}

function readMore() {
    Linking.openURL('https://www.britannica.com/animal/tiger')
}

function followMe() {
    Linking.openURL('https://github.com/LikithTS')
}

const styles = StyleSheet.create({
    headerText : {
        fontSize : 20,
        fontWeight : "bold",
        paddingStart : 20,
        paddingTop : 10
    },
    card : {
        height : 450,
        borderRadius : 8,
        margin : 8
    }, 
    cardElevation : {
        backgroundColor : "#218F76",
        elevation : 4,
        shadowOffset : {
            width : 1,
            height : 1
        },
        shadowColor : '#333',
        shadowOpacity : 0.4
    },
    cardImage : {
        height : 260,
        borderTopLeftRadius : 8,
        borderTopRightRadius : 8
    },
    cardLableContent : {
        flex : 1,
        flexGrow : 1
    },
    cardTitle : {
        color : "#FFFFFF",
        fontWeight : 'bold',
        fontSize : 22,
        marginLeft : 10,
        marginTop : 10,
        marginBottom : 6,
        flexGrow : 1
    },
    cardDescription : {
        color : "#FFFFFF",
        fontSize : 13,
        marginLeft : 10,
        marginBottom : 6,
        marginEnd: 10,
        alignItems : 'stretch',
        flexGrow : 2
    },
    cardButtonContainer : {
        width : '35%',
        height : '20%',
        alignItems : 'flex-start',
        backgroundColor : '#F0DF87',
        justifyContent: 'center',
        marginStart: 10,
        borderRadius : 4,
        elevation : 4
    },
    touchTextStyle : {
        fontSize : 20,
        fontWeight : "bold",
        paddingStart : 20,
        paddingTop : 10,
        paddingBottom : 10,
        color : "#FFFFFF",
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    buttonTitle : {
        fontSize : 20,
        fontWeight : "bold",
        justifyContent : 'center',
        alignItems : 'center',
        padding : 2
    },
    touchContainerStyle : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        elevation : 6
    }
})