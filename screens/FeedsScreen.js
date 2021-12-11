import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import DateHead from '../components/DateHead';

function FeedsScreen() {
  const {logs} = useContext(LogContext);
  const {onToggle} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);
  const today = new Date();

  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };
  return (
    <View style={styles.block}>
      <DateHead date = {today}/>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} onToggle={onToggle}/>
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;