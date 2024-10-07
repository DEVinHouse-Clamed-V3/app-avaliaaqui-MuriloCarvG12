import {Text, View, Button, Image} from 'react-native';
import { globalStyles } from './Globalstyles';




export default function card({name, description, price, brand, image,id}:any){
    return (
        <View style={globalStyles.card_body}>
            <View style={globalStyles.card_head}>
                <Text> {name} </Text>
            </View>
            <View style={globalStyles.card_body_items}>
                <Image source={{ uri: image, width: 50, height: 50 }}/>
                <Text> {brand} </Text>
                <Text> {description} </Text>
                <Text> {price} </Text>

                
            </View>
        </View>
    )
}
