import PrimaryButton from "@/components/PrimaryButton";
import { router } from "expo-router";
import { Dimensions, Image, Text, View } from "react-native";
import { icons, images } from "../../constants";
import { setFirstTimeComplete } from "../../utils/storage";

const { height } = Dimensions.get("screen");

export default function Index() {
    const handleContinue = async () => {
    await setFirstTimeComplete();

    // Prevent back navigation to index.tsx
    router.replace("/(auth)/signin");
  };

  return (
    <View className="flex-1 bg-natural-black">
      {/* Hero Image */}
      <View
        className="w-full"
        style={{ height: height * 0.5 }}
      >
        <Image
          source={images.bgImage}
          className="w-full h-full"
          resizeMode="stretch"
        />
      </View>

      {/* Content */}
      <View className="flex-1 px-4 justify-center items-center">
        <Image
          source={images.brandLogo}
          className="mb-6"
          resizeMode="contain"
        />

        <Text className="w-full text-3xl text-center text-natural-white font-clashdisplay-bold mb-4">
          Fresh Pizza{"\n"}
          Delivered Fast with{"\n"}
          Just One Click!
        </Text>

        <Text className="text-lg text-center text-natural-white font-manrope-bold mb-8">
          Your Ultimate App for Every Craving{"\n"}
          Any Pizza, Anytime.
        </Text>

        {/* CTA Button */}
        <PrimaryButton label="Get Started" icon={icons.arrowNext} onPress={handleContinue}/>
      </View>
    </View>
  );
}