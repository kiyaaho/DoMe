import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';

function FilterScreen({navigation}) {
  const {logs} = useContext(LogContext);
  const truetrue = "true";
  const falsefalse = "false";
  const undone_filtered =
  falsefalse === ''
    ? []
    : logs.filter((log) => [log.done].some((bool) => (bool) === false));

  const done_filtered =
    truetrue === ''
      ? []
      : logs.filter((log) => [log.done].some((bool) => (bool) === true));

  return (
    <View style={styles.block}>
      <Text styles={styles.title}>UnDone</Text>
      <FeedList logs={undone_filtered} />
      <Text styles={styles.title}>Done</Text>
      <FeedList logs={done_filtered}/>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 24,
        flex: 1,
      },
  title: {
    color: '#263238',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FilterScreen;