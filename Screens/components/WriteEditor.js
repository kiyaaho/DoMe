import React, {useRef, useContext, useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import TodoContext from '../contexts/TodoContext';

function WriteEditor(){
    const duedateRef = useRef();
    const commentRef = useRef();

    const [title, setTitle] = useState('');
    const [duedate, setDueDate] = useState('');
    const [comment, setComment] = useState('');

    const {settingTitle} = useContext(TodoContext);
    const {settingDueDate} = useContext(TodoContext);
    const {settingComment} = useContext(TodoContext);

    return (
            <>
            <View style = {styles.item}>
            <Text style = {styles.titleInput}>Title : </Text>
            <TextInput
            placeholder = "+ add title"
            style ={styles.titleInput}
            returnKeyType = "next"
            onChangeText = {setTitle}
            value = {title}
            onSubmitEditing = {() => {
                settingTitle(title);
                commentRef.current.focus();
            }}
            />
        </View>
        <View style = {styles.item}>
            <Text style = {styles.duedateInput}>Due date : </Text>
            <TextInput
            placeholder = "+ add due date"
            style ={styles.duedateInput}
            returnKeyType = "next"
            onChangeText = {setDueDate}
            value = {duedate}
            ref = {duedateRef}
            onSubmitEditing = {() => {
                settingDueDate(duedate);
                commentRef.current.focus();
            }}
            /> 
        </View>
        <View style = {styles.item}>    
            <Text style = {styles.commentInput}>Comment : </Text>       
            <TextInput
            placeholder = "+ add comment"
            style ={styles.commentInput}
            textAlignVertical = "top"
            onChangeText = {setComment}
            value = {comment}
            ref = {commentRef}
            multiline = {true}
            onSubmitEditing = {() => {
                settingComment(comment);
                todos.comment = comment;
            }}
            />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    titleInput:{
        flex: 1,
        paddingVertical: 0,
        fontSize: 30,
        color: '#EF5A68',
        fontWeight: 'bold',
        alignItems: 'flex-start',
    },
    duedateInput: {
        flex: 1,
        fontSize: 25,
        paddingVertical: 0,
        color: '#EF5A68',
        alignItems: 'flex-start',
    },
    commentInput: {
        flex: 1,
        fontSize: 25,
        paddingVertical: 0,
        color: '#EF5A68',
        alignItems: 'flex-start',
    },
    item:{
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
});
export default WriteEditor;