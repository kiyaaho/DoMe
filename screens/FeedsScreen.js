import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import DateHead from '../components/DateHead';
import { RadioButton } from 'react-native-paper';

function FeedsScreen() {
  const today = new Date();
  const {logs} = useContext(LogContext);
  const {onToggle} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  const [checked, setChecked] = useState('first');

  let count = 0;
  for(let i=0; i < logs.length; i++) {
    if(logs[i].done == true)  {
      count++;
    }
  }
  if(logs.length>0){
    count = ((count/logs.length)*100).toFixed(1)
  }
  else{
    count = 0;
  }

  return (
    <View style={styles.block}>
      <DateHead date = {today} completion={count}/>

      <View style={styles.radio}>
        <Text style={styles.title}>Sort by</Text>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked': 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={styles.title}>DueDate</Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
      <Text style={styles.title}>AddedDate</Text>
    </View>


      <FeedList logs={checked === 'second' ?   logs.sort(function (a, b) {
    if (a.now > b.now) {
      return 1;
    }
    if (a.now < b.now) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }):   logs.sort(function (a, b) {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }) } onScrolledToBottom={onScrolledToBottom} onToggle={onToggle}/>
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  radio:{
    flexDirection:'row',
    alignItems:'center',
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default FeedsScreen;