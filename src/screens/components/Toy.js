import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
    } from "react-native";

class Toy extends Component{
    render(){
        return (
            <TouchableOpacity style={{
                height: 210,
                width: 110,
                marginLeft: 20
            }}>
                <View style={{
                    height: 160,
                    width: 110,
                    shadowOffset: {width:0, height:3},
                    shadowColor: '#000',
                    shadowOpacity: 1,
                    elevation: 3,
                }}>
                    <Image source={this.props.imageUri}
                        style = {{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: 'cover',
                            borderRadius: 5,
                        }}
                    />
                </View>

                <View style={{
                    height:50,
                    width: 110,
                    paddingTop: 10,
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        color: '#414141',
                    }}>
                        {this.props.name}
                    </Text>

                    <Text style={{
                        fontSize: 11,
                        fontWeight: '400',
                        color: '#c2c4c3',
                    }}>
                        {this.props.author}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export default Toy;
