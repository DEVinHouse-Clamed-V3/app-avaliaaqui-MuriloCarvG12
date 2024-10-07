import {useState, useEffect} from 'react'
import {TextInput, View, Text, Switch, TouchableOpacity, ScrollView, Alert}  from 'react-native'
import { globalStyles } from '../components/Globalstyles'

export default function Form({route , navigation}:any){
    const [Product, setProduct] = useState('')
    const [isSpecial, setIsSpecial] = useState(false)
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Exp, setExp] = useState('')

    function sendFeedback()
    {
        if (Name === '') {
            Alert.alert("Aviso", "O nome é obrigatório")
        } else if (Email === '') {
            Alert.alert("Aviso", "o email é obrigatório")
        } else if (Exp === ''){
            Alert.alert("Aviso", "A experiencia é obrigatória")
        }

        if(Name && Email && Exp !== ''){
        console.log(' ' + Name + Email + Exp )

        }
    }
    useEffect(() => {
        const produto = route.params.product.name
        setProduct(produto)
      }, [])

    return(
        <ScrollView>
        <View style={globalStyles.container}>
        
        <View style={globalStyles.form_header}>
            <Text style={globalStyles.title_font}> Avaliação do Produto - {route.params.product.name}</Text>
            <Text> Seu feedback é importante</Text>
        </View>
        
        <View style={globalStyles.form_body}>
            
            <View style={globalStyles.form_item}>
                <View style={globalStyles.form_name}>
                    <Text>Seu Nome</Text>
                </View>
                <View style={globalStyles.form_text}>
                    <TextInput placeholder='Nome' value={Name} onChangeText={setName}></TextInput>
                </View>
            </View> 
            
            <View style={globalStyles.form_item}>
                <View style={globalStyles.form_name}>
                    <Text>Seu Email</Text>
                </View>
                <View style={globalStyles.form_text}>
                    <TextInput placeholder='Email' value={Email} onChangeText={setEmail}></TextInput>
                </View>
            </View>    

            <View style={globalStyles.form_item}>
                <View style={globalStyles.form_name}>
                    <Text>Sua Experiencia</Text>
                </View>
                <View style={globalStyles.form_text}>
                    <TextInput placeholder='Experiencia' value={Exp} onChangeText={setExp}></TextInput>
                </View>
            </View>  

            <View style={globalStyles.switch}>
                
                <Text>Recomendaria</Text>
                
                <Switch value={isSpecial} onValueChange={setIsSpecial}/>
                
            </View>    
            
            <TouchableOpacity style={globalStyles.button_style} onPress={sendFeedback}>
                <Text>Envie sua avaliação</Text>
            </TouchableOpacity>
            
            
            </View>
        
        </View>
        </ScrollView>
    )
}