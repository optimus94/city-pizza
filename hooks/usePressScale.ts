import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const DEFAULT_CONFIG = {
  pressedScale: 0.95,
  duration: 300,
};

type PressScaleConfig = Partial<typeof DEFAULT_CONFIG>;

export const usePressScale = (config?: PressScaleConfig) => {
  const { pressedScale, duration } = { ...DEFAULT_CONFIG, ...config };

  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  const onPressIn = () => {
    scale.value = withTiming(pressedScale, { duration });
  };

  const onPressOut = () => {
    scale.value = withTiming(1, { duration });
  };

  return { animatedStyle, onPressIn, onPressOut };
};
