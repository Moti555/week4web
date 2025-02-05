import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function AddForm({add}) {
    const [name, setName] = useState("")

    const save = () => {
        add(name)
        setName("")
    }

  return (
    <View style={styles.container}>
      <TextInput
        style = {styles.form}
        value = {name}
        onChangeText={text => setName(text)}
        placeholder = "Enter Task"
      />
      <Button title = "Save" onPress={save}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    margin: 8,
  }
});