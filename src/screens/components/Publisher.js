import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
    } from "react-native";

class Publisher extends Component{
    render(){
        return (
            <View style={{
                height: 110,
                width: 110,
                marginLeft: 20
            }}>
                <View style={{
                    height: 80,
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
                            resizeMode: 'contain',
                            // borderRadius: 5,
                        }}
                    />
                </View>

                <View style={{
                    height:20,
                    width: 110,
                    paddingTop: 10,
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 11,
                        fontWeight: '400',
                        color: '#414141',
                    }}>
                        {this.props.name}
                    </Text>
                </View>
            </View>
        );
    }
}
export default Publisher;
