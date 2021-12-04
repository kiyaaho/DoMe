import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {viewStyles, barStyles} from './styles';
import WriteItem from './components/WriteItem';
import LogContext from './components/LogContext';
import Write from './components/Write';

function AddScreen(){
    const [title, onChangeTitle] = useState('');
    const [duedate, onChangeDueDate] = useState('');
    const [comment, onChangeComment] = useState('');
    const navigation = useNavigation();

    const {onCreate} = useContext(LogContext);

    const onSave = () => {
        onCreate({
            title, 
            duedate,
            comment,
        });
        navigation.pop();
    };

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={barStyles.statusbar}/>
            <WriteItem
            title = {title}
            duedate = {duedate}
            comment = {comment}
            onChangeTitle = {onChangeTitle}
            onChangeDueDate = {onChangeDueDate}
            onChangeComment = {onChangeComment}/>
            <Write onSave = {onSave}/>
        </SafeAreaView>
    );
}

export default AddScreen;