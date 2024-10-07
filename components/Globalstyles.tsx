import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title_font:{
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
    },
    intro_header:{
      width: "100%",
      height: 50,
      backgroundColor: "orange",
      marginBottom: 50, 
    },
    intro_body:{
        gap: 40,
        justifyContent: 'center',
        
    },
    /**Estilização de home */
    card_space:{
      gap: 25,
      
    },
    card_head:
    {
      backgroundColor: 'orange',
      height: "10%",
      alignItems: 'center',
      padding: 6,
      borderTopEndRadius: 15,
      borderTopStartRadius: 15,
    }, 
    card_body: 
    {
      backgroundColor: 'white',
      width: 300,
      height: 320,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: 'orange',
      gap: 10,
      marginBottom: 10,
    },
    card_body_items:
    {
      paddingTop: 20,
      gap: 20,
      alignItems: 'center',
    },
    button_style:{
      alignSelf:'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
      height: 50,
      backgroundColor: '#ffc054',
      borderRadius: 20,
    },
    form_body:{
      width: "80%",
      gap: 100,
    },

    /**Estilo do Form */

    form_header:
    {
      padding: 40,
    },
    form_item:{
      flexDirection: 'row',
      width: "100%",
      
      height: 40,
      gap: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 20,
    },
    form_name:
    {
      backgroundColor:'#dbdbdb',
      justifyContent: 'center',
      alignContent: 'center',
      width: "30%",
      height: "100%",
      borderTopStartRadius: 20,
      borderBottomStartRadius: 20,
    },
    form_text:
    {
      
      justifyContent: 'center',
      alignContent: 'center',
      width: "30%",
      height: "100%",
    },
    switch:
    {
      flexDirection: 'row',
      width: "100%",
      height: 40,
      gap: 40,
      alignContent: 'center',
      justifyContent: 'center',
    }






})