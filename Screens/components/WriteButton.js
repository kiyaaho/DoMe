import React from 'react';
import {StyleSheet, TouchableOpacity, Pressable, Image} from 'react-native';
import {images} from '../images';
import { theme } from '../theme';
export default function WriteButton({onSave}){
    return(
        <TouchableOpacity style = {iconStyle.view}>
            <Pressable
                style={iconStyle.menuItem}
                onPress = {onSave}
            >
              <Image source = {images.write} style={iconStyle.icon}/>
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