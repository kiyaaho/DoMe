import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import YesterdayItem from './YesterdayItem';

function Yesterday({todos, onToggle}){
    return (
        <FlatList
            ItemSeparatorComponent= {() => <View style = {styles.separator} />}
            style = {styles.list}
            data = {todos}
            renderItem = {({item}) => (<YesterdayItem id = {item.id} text = {item.text} onToggle = {onToggle}/>)}
            keyExtractor = {item => item.id.toString()}
            />
    );
}

const styles = StyleSheet.create({
    separator:{
        backgroundColor: '#e0e0e0',
        height: 1,
    },
    list:{
        flex: 1,
    },
});

export default Yesterday;