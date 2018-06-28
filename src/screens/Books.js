import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Font } from 'expo';

import Popular from './components/Popular';
import Publisher from './components/Publisher';
import Toy from './components/Toy';

class Books extends Component{

    static navigationOptions = {
        // headerTitle: (
        //     <Image style = {{height: 36, width: 150}} source={require('../assets/logo.png')} />
        // )
        header: null
    }

    state = {
        fontLoaded: false,
    }

    async componentDidMount(){
        await Font.loadAsync({
            'openSansBold': require('../assets/fonts/OpenSans-Bold.ttf'),
            'openSansExtraBold': require('../assets/fonts/OpenSans-ExtraBold.ttf'),
            'openSansLight': require('../assets/fonts/OpenSans-Light.ttf'),
            'openSansRegular': require('../assets/fonts/OpenSans-Regular.ttf'),
            'openSansSemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
        });

        this.setState({fontLoaded: true})
    }


    render(){
        return (
            <View style={styles.container}>
                <View style = {{
                    marginHorizontal: 20,
                    marginTop: 20,
                    flexDirection: 'row',
                    paddingTop: 10,
                    justifyContent: 'space-between'

                }}>
                    <Image 
                        source = {require('../assets/logo.png')}
                        style ={{
                            width: 165,
                            height: 36
                        }}
                    />

                    <IonIcon name="md-heart-outline" size = {26} color={'#c2c4c3'} />

                </View>
                <ScrollView>
                <View style ={{
                    flexDirection: 'row',
                    padding: 10,
                    marginTop: 15,
                    backgroundColor: '#f1f2f2',
                    marginHorizontal: 20,
                    // shadowOffset: {width:0, height:0},
                    // shadowColor: '#000',
                    // shadowOpacity: 0.2,
                    // elevation: 1,
                    borderRadius: 7
                }}>
                    <TextInput
                        selectionColor="#f67101"
                        underlineColorAndroid="transparent"
                        placeholder="Поиск Книги"
                        placeholderTextColor="#c2c4c3"
                        style={{
                            flex: 1,
                            fontSize: 16,
                            fontWeight: '500',
                            backgroundColor: '#f1f2f2',
                            marginLeft: 15,
                        }}
                    />
                    <IonIcon 
                        name="ios-search" 
                        size={25}
                        color={'#c2c4c3'}
                        style={{
                            marginRight: 15
                        }}
                    />
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    paddingTop: 15,
                }}>

                    {/* Popular content*/}
                    <View style={{
                        marginHorizontal: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        {
                            this.state.fontLoaded ? (
                                <Text style={{
                                    fontSize:24,
                                    fontWeight: '700',
                                    color: '#414141',
                                    fontFamily: 'openSansBold'
                                }}>
                                    Популярное
                                </Text>
                            ) : null
                        }
                        <Text style={{
                            fontSize:12,
                            fontWeight: '300',
                            color: '#f67101',
                        }}>
                            Все
                        </Text>
                    </View>
                    <View style={{
                            height: 210,
                            marginTop: 10
                        }}>
                            <ScrollView
                                horizontal = {true}
                                showsHorizontalScrollIndicator = {false}
                            >
                                <Popular
                                    imageUri={require('../assets/book.jpg')}
                                    name = "Пчелка Мелли"
                                    author = "Квентин Гребан"
                                />
                                <Popular
                                    imageUri={require('../assets/book2.jpg')}
                                    name = "Пчелка Мелли"
                                    author = "Квентин Гребан"
                                />
                                <Popular
                                    imageUri={require('../assets/book.jpg')}
                                    name = "Пчелка Мелли"
                                    author = "Квентин Гребан"
                                />
                                <Popular
                                    imageUri={require('../assets/book2.jpg')}
                                    name = "Пчелка Мелли"
                                    author = "Квентин Гребан"
                                />
                            </ScrollView>
                        </View>


                        {/* Authors content */}

                        <View style={{
                            marginHorizontal: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20
                        }}>
                            {
                                this.state.fontLoaded ? (
                                    <Text style={{
                                        fontSize:24,
                                        fontWeight: '700',
                                        color: '#414141',
                                        fontFamily: 'openSansBold'
                                    }}>
                                        Издательства
                                    </Text>
                                ) : null
                            }
                            <Text style={{
                                fontSize:12,
                                fontWeight: '300',
                                color: '#f67101',
                            }}>
                                Смотреть все
                            </Text>
                    </View>
                    <View style={{
                            height: 110,
                            // marginTop: 10
                        }}>
                            <ScrollView
                                horizontal = {true}
                                showsHorizontalScrollIndicator = {false}
                            >
                                <Publisher
                                    imageUri={require('../assets/aruna.jpg')}
                                    name = "Аруна"
                                />
                                <Publisher
                                    imageUri={require('../assets/clever.png')}
                                    name = "Клевер"
                                />
                                <Publisher
                                    imageUri={require('../assets/aruna.jpg')}
                                    name = "Аруна"
                                />
                                <Publisher
                                    imageUri={require('../assets/clever.png')}
                                    name = "Клевер"
                                />
                            </ScrollView>
                        </View>

                        {/* Toys content */}

                        <View style={{
                            marginHorizontal: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10
                        }}>
                            {
                                this.state.fontLoaded ? (
                                    <Text style={{
                                        fontSize:24,
                                        fontWeight: '700',
                                        color: '#414141',
                                        fontFamily: 'openSansBold'
                                    }}>
                                        Игрушки
                                    </Text>
                                ) : null
                            }
                            <Text style={{
                                fontSize:12,
                                fontWeight: '300',
                                color: '#f67101',
                            }}>
                                СМОТРЕТЬ ВСЕ
                            </Text>
                        </View>
                        <View style={{
                                height: 210,
                                marginTop: 10
                            }}>
                            <ScrollView
                                horizontal = {true}
                                showsHorizontalScrollIndicator = {false}
                            >
                                <Toy
                                    imageUri={require('../assets/book.jpg')}
                                    name = "Пчелка Мелли"
                                    author = "Квентин Гребан"
                                />
                                <Toy
                                    imageUri={require('../assets/book2.jpg')}
                                    name = "Пчелка Мелли"
                                    author = "Квентин Гребан"
                                />
                                <Toy
                                    imageUri={require('../assets/book.jpg')}
                                    name = "Пчелка Мелли"
                                    author = "Квентин Гребан"
                                />
                                <Toy
                                    imageUri={require('../assets/book2.jpg')}
                                    name = "Пчелка Мелли"
                                    author = "Квентин Гребан"
                                />
                            </ScrollView>
                        </View>
                </View>
                </ScrollView>
            </View>
        );
    }
}
export default Books;

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: '#fff'
    }
});