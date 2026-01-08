import PrimaryButton from "@/components/PrimaryButton";
import { icons } from "@/constants";
import { router } from "expo-router";
import { View } from "react-native";

const Profile = () => {
  const handleSignOut = async () => {
    router.replace("/(auth)/signin");
  }

  return (
    <View className="bg-bg-default w-full flex-1 justify-center items-center px-4">
      <PrimaryButton
        label="Sign Out"
        icon={icons.secured}
        onPress={handleSignOut}
      />
    </View>
  );
};

export default Profile;
