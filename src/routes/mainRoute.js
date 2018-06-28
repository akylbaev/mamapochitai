import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Cart from '../screens/Cart';
import Books from '../screens/Books';
import Profile from '../screens/Profile';

class Route extends Component{
    render(){
        return (
            <AppTabNavigator />
        );
    }
}
export default Route;

const AppTabNavigator = createBottomTabNavigator({
    cart: {
        screen: Cart,
        navigationOptions: {
            tabBarLabel: 'CART',
            tabBarIcon: ({tintColor}) => (
                <IonIcon name = "ios-cart" color={tintColor} size={24} />
            )
        }
    },
    home: {
        screen: BooksStackNavigator = createStackNavigator({
            books: {
                screen: Books
            }
        }),
        navigationOptions: {
            tabBarLabel: 'BOOKS',
            tabBarIcon: ({tintColor}) => (
                <IonIcon name = "md-home" color={tintColor} size={24} />
            )
        }
    },
    user: {
        screen: ProfileStackNavigator = createStackNavigator({
            profile: {
                screen: Profile
            }
        }),
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({tintColor}) => (
                <IonIcon name = "md-contact" color={tintColor} size={24} />
            )
        }
    },
},{
    tabBarOptions: {
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
        //   shadowOffset: { width: 5, height: 3 },
        //   shadowColor: '#000',
        //   shadowOpacity: 0.5,
        //   elevation: 5
        },
        activeTintColor: '#f67101',
        inactiveTintColor: '#e5e5e5',
        showIcon: true,
        showLabel: false,
        // labelStyle: {
        //   fontSize: 8
        // },
      },
      initialRouteName: 'home'
})

// const BooksStackNavigator = createStackNavigator({
//     books: {
//         screen: Books
//     }
// })

// const ProfileStackNavigator = createStackNavigator({
//     profile: {
//         screen: Profile
//     }
// })