import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    } from "react-native";

class Book extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style = {{
                    marginHorizontal: 20,
                    marginTop: 40,
                }}>

                    <View style = {{
                        marginTop: 20,
                        position: 'absolute',
                        width: '100%',
                        height: 350,
                        backgroundColor: '#fff',
                    }}>
                    
                    </View>
                    <View style={{
                        height: 160,
                        width: 110,
                        shadowOffset: {width:0, height:3},
                        shadowColor: '#000',
                        shadowOpacity: 1,
                        elevation: 3,
                    }}>
                        <Image source={require('')}
                            style = {{
                                flex: 1,
                                width: null,
                                height: null,
                                resizeMode: 'cover',
                                borderRadius: 5,
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
export default Book;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#fbfcfc',
    }
});