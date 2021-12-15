import React, {useEffect, useRef} from 'react';
import {createContext, useState} from 'react';
import 'react-native-get-random-values';
import { onChange } from 'react-native-reanimated';
import {v4 as uuidv4} from 'uuid';
import logsStorage from '../storages/logsStorage';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const initialLogsRef = useRef(null);
  const [logs, setLogs] = useState([]);

  const onCreate = ({subtitle, comment, date, now, done, selected , group}) => {
    const log = {
      id: uuidv4(),
      subtitle,
      comment,
      date,
      now,
      done,
      selected,
      group,
    };
    setLogs([log, ...logs]);
  };

  const onModify = modified => {
    // logs 배열을 순회해 id가 일치하면 log를 교체하고 그렇지 않으면 유지
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };

  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

  const onToggle = id => {
    const nextLogs = logs.map(log => (log.id === id ? {...log, done: !log.done} : log));
    setLogs(nextLogs);
  }

  const onSelect = id => {
    const nextLogs = logs.map(log => (log.id === id ? {...log, selected: !log.selected} : log));
    setLogs(nextLogs);
  }

  const onMultipleDelete = () => {
    const nextLogs = logs.filter(log => log.selected !== true);
    setLogs(nextLogs);
  }

 const arr1 = logs.map(item => item);
 const arr2 = logs.map(item => item);

 arr1.sort(function (a, b) {
   if (a.now > b.now) {
     return 1;
   }
   if (a.now < b.now) {
     return -1;
   }
   // a must be equal to b
   return 0;
 });

 const groups1 = Object.values(arr1.reduce((acc, item) => {
   if (!acc[item.group]) acc[item.group] = {
      title: item.group,
      completionRate: 0,
      data: [],
   };
   acc[item.group].data.push({done: item.done, id: item.id, subtitle: item.subtitle, date: item.date, now:item.now});
   return acc;
}, {}))

arr2.sort(function (a, b) {
 if (a.date > b.date) {
   return 1;
 }
 if (a.date < b.date) {
   return -1;
 }
 // a must be equal to b
 return 0;
});

const groups2 = Object.values(arr2.reduce((acc, item) => {
 if (!acc[item.group]) acc[item.group] = {
    title: item.group,
    completionRate: 0,
    data: [],
 };
 acc[item.group].data.push({done: item.done, id: item.id, subtitle: item.subtitle, date: item.date, now:item.now});
 return acc;
}, {}))

let count;
for(let i=0;i<groups1.length;i++){
  count = 0;
  for(let j = 0;j<Object.keys(groups1[i].data).length;j++){
    if(groups1[i].data[j].done === true){
      count++;
    }
  }
  groups1[i].completionRate = ((count/Object.keys(groups1[i].data).length)*100).toFixed(1);
}

for(let i=0;i<groups2.length;i++){
  count = 0;
  for(let j = 0;j<Object.keys(groups2[i].data).length;j++){
    if(groups2[i].data[j].done === true){
      count++;
    }
  }
  groups2[i].completionRate = ((count/Object.keys(groups2[i].data).length)*100).toFixed(1);
}
 

  useEffect(() => {
    // useEffect 내에서 async 함수를 만들고 바로 호출
    // IIFE 패턴
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove, onToggle, onSelect, onMultipleDelete, groups1, groups2}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;