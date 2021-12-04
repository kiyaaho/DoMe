import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {textStyles} from '../styles';
import { theme } from '../theme';
import Menu from './Menu';

function AppHead(){

    return (
        <View style = {styles.block}>
            <Text style={textStyles.title}>TODO List</Text>
            <TouchableOpacity
            style={styles.buttonStyle}>
            <Menu/>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    block:{
        padding: 16,
        flexDirection : 'row', //title과 menu icon이 한 줄에 배열
    },
    icon: {
        tintColor: theme.text,
        width: 30,
        height: 30,
        margin: 10,
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width : 48,
        height: 48,
        flex: 1,
    },
})
export default AppHead;