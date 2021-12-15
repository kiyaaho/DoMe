import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import LogContext from '../contexts/LogContext';

function WriteScreen({route}) {
  const log = route.params?.log;
  const [subtitle, setsubTitle] = useState(log?.subtitle ?? '');
  const [comment, setComment] = useState(log?.comment ?? '');
  const navigation = useNavigation();
  const [date, setDate] = useState(log ? new Date(log.date) : new Date());
  const [done, setDone] = useState(log?.done ?? false);
  const [now, setNow] = useState(log ? new Date(log.now) : new Date() );
  const [group, setGroup] = useState(log?.group ?? '');
  const {onCreate, onModify, onRemove} = useContext(LogContext);

  const onAskRemove = () => {
    Alert.alert(
      'Delete',
      'Want to delete?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          onPress: () => {
            onRemove(log?.id);
            navigation.pop();
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: date.toISOString(),
        subtitle,
        comment,
        done,
        group,
        now,
      });
    } else {
      onCreate({
        subtitle,
        comment,
        date: date.toISOString(),
        done :false,
        selected: false,
        now: now.toISOString(),
        group,
      });
    }
    
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
          date={date}
          onChangeDate={setDate}
        />

        <WriteEditor
          subtitle={subtitle}
          comment={comment}
          onChangesubTitle={setsubTitle}
          onChangeComment={setComment}
          group={group}
          onChangeGroup={setGroup}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;