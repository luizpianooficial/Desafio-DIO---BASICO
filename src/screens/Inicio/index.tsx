import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function Inicio(){

    const navigation = useNavigation()


    return(
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                    source={require('../../assets/sirene.png')}
                    style = {styles.Img}
                />
            </View>
            <View style = {styles.ContainerButton}>
                <TouchableOpacity style = {styles.Button}
                onPress={() => navigation.navigate('Forms')}  
                >
                    <Text style = {styles.TextButton}>HELP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1 ,

    },
    containerImg:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    Img:{
        height: 120,
        width: 90,
    },
    ContainerButton:{
        flex:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    Button:{
        backgroundColor: 'red',
        height:150,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    TextButton:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff'
    }
})