import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import Toast from "react-native-toast-message";
import "./globals.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "ClashDisplay-Bold": require("../assets/fonts/ClashDisplay-Bold.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("../assets/fonts/Manrope-Medium.ttf"),
    "Manrope-SemiBold": require("../assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
  });

  const [firstTime, setFirstTime] = useState<boolean | null>(null);
  const [appReady, setAppReady] = useState<boolean>(false);

  // Check if app opened before
  useEffect(() => {
    const check = async () => {
      const opened = await AsyncStorage.getItem("hasOpened");

      if (opened === null) {
        setFirstTime(true);
        await AsyncStorage.setItem("hasOpened", "true");
      } else {
        setFirstTime(false);
      }
    };

    check();
  }, []);

  // When fonts + first-time check are done
  useEffect(() => {
    if (fontsLoaded && firstTime !== null) {
      setAppReady(true);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, firstTime]);

  if (!appReady) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        {firstTime ? (
          <Stack.Screen name="(auth)" />
        ) : (
          <Stack.Screen name="(auth)/signin" />
        )}
      </Stack>
      <Toast />
    </>
  );
}
