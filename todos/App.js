import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Row from "./components/Row.js"
import AddForm from './components/AddForm.js';
import { useCallback } from 'react';
import uuid from "react-native-uuid"
import useTodoStorage from './hooks/todoStorage.js';

export default function App() {
  const [data, setData] = useTodoStorage()

  const add = useCallback((name) => {
    const newItem = {
      id: uuid.v4(),
      name: name,
      done: false
    }
    setData((prevData) => [...prevData, newItem])
  },[setData])

  const toggleDone = useCallback((id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? {...item, done: !item.done } : item
    )
  )
},[setData])

  return ( 
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <AddForm add={add}/>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Row item={item} toggleDone={toggleDone}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 24
  },
  list: {
    marginLeft: 8,
    marginTop: 16
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  }
});