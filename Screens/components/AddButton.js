import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, Pressable, Image} from 'react-native';
import {images} from '../images';
import { theme } from '../theme';
export default function Add(){
    const navigtaion = useNavigation();

    const onPress = () => {
        navigtaion.navigate('Write');
    };
    return(
        <TouchableOpacity style = {iconStyle.view}>
            <Pressable
                style={iconStyle.menuItem}
                onPress = {onPress}
            >
              <Image source = {images.add} style={iconStyle.icon}/>
            </Pressable>
        </TouchableOpacity>
    )
}

const iconStyle = StyleSheet.create({
    view : {
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
    icon: {
        tintColor: theme.text,
        width: 50,
        height: 50,
        margin: 10,
    },
    menuItem: {
        borderRadius: 20,
        padding: 10,
    },
});