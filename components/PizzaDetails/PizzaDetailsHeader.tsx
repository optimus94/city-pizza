import { icons } from "@/constants";
import { usePressScale } from "@/hooks/usePressScale";
import useLayoutStore from "@/store/layout.store";
import { Image, Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";

const PizzaDetailsHeader = ({ onBack }: { onBack: () => void }) => {
  const { headerHeight } = useLayoutStore();
  const { animatedStyle, onPressIn, onPressOut } = usePressScale();
  return (
    <View
      className="flex-row px-4 gap-4 border-b border-red-100 bg-natural-white justify-start items-center"
      style={{ height: headerHeight }}
    >
      <Pressable onPress={onBack} onPressIn={onPressIn} onPressOut={onPressOut}>
        <Animated.View style={animatedStyle}>
            <View className="flex-center p-3.5 bg-red-50/80 rounded-xl">
          <Image
            source={icons.arrowLeft}
            className="size-5"
            resizeMode="contain"
          />
        </View>
        </Animated.View>
      </Pressable>

      <Text className="flex-1 font-clashdisplay-bold text-2xl"> Customized Pizza </Text>
    </View>
  );
};

export default PizzaDetailsHeader;
