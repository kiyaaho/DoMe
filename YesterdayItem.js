import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function YesterdayItem({id, text, done, onToggle}){
    return (
        <View style = {styles.item}>
            <TouchableOpacity onPress = {() => onToggle(id)}>
                <View style = {[styles.circle, done && styles.filled]}>
                    {done ? <Image source = {require('../../assets/check_white.png')}/> : null}
                </View>
            </TouchableOpacity>
            <Text styles = {[styles.text, done && styles.lineThrough]}>{text}</Text>
        </View>
    );
}
 
const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        padding: 16,
        borderBottomColor: '#e0e0e0',
        alignItems: 'center',
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: '#26a69a',
        borderWidth: 1,
        marginRight: 16,
    },
    filled: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26a69a',
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: '#212121',
    },
    lineThrough:{
        color: '#9e9e9e',
        textDecorationLine: 'line-through',
    },
});
export default YesterdayItem;