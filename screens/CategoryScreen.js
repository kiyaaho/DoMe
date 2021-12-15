import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, SectionList, Button} from 'react-native';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import DateHead from '../components/DateHead';
import { RadioButton } from 'react-native-paper';

function CategoryScreen() {
  const today = new Date();
  const {groups1, groups2} = useContext(LogContext);
  const {onToggle} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);
  const [completion, setCompletion] = useState(0);
  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  const [checked, setChecked] = useState('first');

  return (
    <View style={styles.block}>

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
    
    <SectionList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        sections={checked === 'second' ? groups1 : groups2}
        renderItem={({item})=>(
          <View style={styles.bblock}>
            <Text style={styles.title}>{item.subtitle}</Text>
          </View>
        )}
        renderSectionHeader={({section})=>(
          <View style={styles.taskTitle}>
          <Text style={styles.Title}>{section.title}</Text>
          <Text style={styles.Title}>{section.completionRate}%</Text>
          {console.log("---------section start----------------")}
          {console.log(section)}
          {console.log(section.completionRate)}
          {console.log("------------------section end-------------------------")}
        </View>
        )}
        keyExtractor={item=>item.id}
        stickySectionHeadersEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  bblock: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
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
  container: {
    flex: 1,
    backgroundColor: '#eafffe'
  },
  taskItem:{
    padding: 10,
    marginVertical: 15,
    fontSize: 16
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  taskTitle:{
    backgroundColor: "#26a69a",
    padding: 10,
    elevation: 4,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  Title:{
    color: '#ffffff',
    fontSize: 24,
    fontWeight: "bold",
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default CategoryScreen;
