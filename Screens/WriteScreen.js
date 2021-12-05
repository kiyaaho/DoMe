import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {viewStyles, barStyles} from './styles';
import WriteEditor from './components/WriteEditor';
import WriteButton from './components/WriteButton';
import TodoContext from './contexts/TodoContext';

function WriteScreen(){

    return (
        <TodoContext.Provider value = {'', '','', ()=> {}, () => {}, () => {}}>
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={barStyles.statusbar}/>
            <WriteEditor/>
            <WriteButton/>
        </SafeAreaView>
        </TodoContext.Provider>

    );
}

export default WriteScreen;