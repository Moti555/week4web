import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useTodoStorage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem("tasks");
        if (savedData) {
          setData(JSON.parse(savedData));
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    };
    saveData();
  }, [data]);

  return [data, setData];
}