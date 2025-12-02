import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Location = () => {
  return (
    <SafeAreaView>
      <View className="w-full flex-1 justify-center items-center">
        <Text>Location</Text>
      </View>
    </SafeAreaView>
  );
};

export default Location;
