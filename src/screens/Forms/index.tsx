import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView,Image } from "react-native";
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    nome: yup.string().required("Informe seu Nome"),
    telefone: yup.string().required("Informe seu Telefone"),
    localizacao: yup.string().required("Informe seu Localizacão"),
    obs: yup.string().required("Informe sua observação"),
});

export default function Forms() {
    const { handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const [credenciaisIncorretas, setCredenciaisIncorretas] = useState(false);

    const Validar = (data: {nome:string}) => {
        if (data.nome !== '') {
            alert('Socorro está indo até você! Mantenha a calma');
            reset();
        } else {
            setCredenciaisIncorretas(true);
        }
    }

    return (
        <View style={styles.Container}>
            <View style={styles.containerImg}>
                <Image
                    source={require('../../assets/sirene.png')}
                    style = {styles.Img}
                />
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                
                <View style={styles.ContainerForms}>
                    <Controller
                        control={control}
                        name="nome"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder='Nome'
                                style={styles.Input}
                                onChangeText={onChange}
                                value={value}
                                placeholderTextColor="#ccc" // Cor do texto do placeholder
                            />
                        )}
                    />
                    {errors.nome && <Text style={styles.labelError}>{errors.nome.message}</Text>}
                    <Controller
                        control={control}
                        name="telefone"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder='Telefone'
                                style={styles.Input}
                                onChangeText={onChange}
                                value={value}
                                placeholderTextColor="#ccc" // Cor do texto do placeholder
                            />
                        )}
                    />
                    {errors.telefone && <Text style={styles.labelError}>{errors.telefone.message}</Text>}
                    <Controller
                        control={control}
                        name="localizacao"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder='Localização'
                                style={styles.Input}
                                onChangeText={onChange}
                                value={value}
                                keyboardType="name-phone-pad"
                                placeholderTextColor="#ccc" // Cor do texto do placeholder
                            />
                        )}
                    />
                    {errors.localizacao && <Text style={styles.labelError}>{errors.localizacao.message}</Text>}

                    <Controller
                        control={control}
                        name="obs"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder='Observação'
                                style={styles.Input}
                                onChangeText={onChange}
                                value={value}
                                placeholderTextColor="#ccc" // Cor do texto do placeholder
                            />
                        )}
                    />
                    {errors.obs && <Text style={styles.labelError}>{errors.obs.message}</Text>}

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSubmit(Validar)}>
                        <Text style={styles.buttonText}>SOCORRO</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    ContainerForms: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20, 
        marginTop: 150
    },
    scrollViewContainer: {
        flexGrow: 1
    },
    Input: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: 350,
        height: 60,
        borderRadius: 12,
        marginBottom: 10, 
        paddingLeft: 10,
    },
    labelError: {
        alignSelf: 'center',
        color: '#ff375b',
        marginBottom: 8,
    },
    button:{
        backgroundColor: 'red',
        margin: 50,
        width: 150,
        height: 85,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerImg:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    Img:{
        height: 120,
        width: 90,
        marginTop:150
    },
});
