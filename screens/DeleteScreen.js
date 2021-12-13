import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import JustList from '../components/JustList';
import DeleteButton from '../components/DeleteButton';
import LogContext from '../contexts/LogContext';
import DateHead from '../components/DateHead';

function DeleteScreen({navigation}) {
  const {logs} = useContext(LogContext);
  const {onSelect, onMultipleDelete} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);
  const today = new Date();

  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  
  return (
    <View style={styles.block}>
      <JustList logs={logs} onScrolledToBottom={onScrolledToBottom} onSelect={onSelect}/>
      <DeleteButton hidden={hidden} onMultipleDelete={onMultipleDelete}/>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default DeleteScreen;