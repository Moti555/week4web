import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

export default function Row({item, toggleDone}) {
  return (
    <Pressable onPress={() => {toggleDone(item.id)}}>
      <Text style={[styles.row, item.done && styles.done]}>{item.name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  row: {
    fontSize: 20,
    marginBottom: 15,
  },
  done: {
    textDecorationLine: "line-through"
  }
});