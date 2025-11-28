import AsyncStorage from "@react-native-async-storage/async-storage";

export const setFirstTimeComplete = async () => {
  await AsyncStorage.setItem("first_time", "done");
};

export const isFirstTime = async () => {
  const value = await AsyncStorage.getItem("first_time");
  return value === null;
};