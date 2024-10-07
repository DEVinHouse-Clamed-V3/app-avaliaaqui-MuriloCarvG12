import { useEffect, useState } from 'react'
import { View, Button, Text, ScrollView, TouchableOpacity, Switch } from 'react-native'
import { globalStyles } from '../components/Globalstyles'
import  Card  from '.././components/Card'
import {products} from '.././db.json'
import axios from 'axios'

export default function home({navigation}:any){
    const [products, setProducts] = useState([])

    function productRating()
    {
        navigation.navigate("Form")
    }

    useEffect(() => {
        axios
        .get('https://ff74-187-183-36-59.ngrok-free.app/products')
        .then((response) => {
            setProducts(response.data)
            console.log('teste')
        })
        .catch(() => {
            console.log("Não foi possivel obter a lista de biscoitos" )
        })
    }, [])
    console.log(products)
    //https://23f9-187-183-36-59.ngrok-free.app/products

    return(
    <View style={globalStyles.container}>
        <Text style={globalStyles.title_font}>Explore Nossos Produtos!</Text>
        <ScrollView>
        <View style={globalStyles.card_space}>
        {

            products.map(product => (
                <>
                
                <Card
                name={product.name}
                description={product.description}
                image={product.image}
                brand={product.brand}
                price={product.price}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Form", {product})} style={globalStyles.button_style}>
                    <Text>Avalie-me!</Text>
                </TouchableOpacity>
                </>
            ))
        }
        </View>
        </ScrollView>
    </View>
    )
}