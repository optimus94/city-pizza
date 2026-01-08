import { usePressScale } from "@/hooks/usePressScale";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";

type OptionGroupProps = {
  title: string;
  options: string[];
  selected?: string[];
  onToggle: (value: string) => void;
};

type OptionChipProps = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};

const OptionChip = ({ label, isActive, onPress }: OptionChipProps) => {
  const { animatedStyle, onPressIn, onPressOut } = usePressScale();

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={animatedStyle}
        className={`px-4 py-3 rounded-xl ${
          isActive ? "bg-red-default" : "bg-red-50"
        }`}
      >
        <Text
          className={`font-manrope-medium ${
            isActive ? "text-natural-white" : "text-grey-default"
          }`}
        >
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const OptionGroups = ({
  title,
  options,
  selected = [],
  onToggle,
}: OptionGroupProps) => {
  const selectedCount = selected.length;

  return (
    <View className="bg-natural-white p-4 mb-4 rounded-2xl shadow-sm">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="flex-1 font-manrope-bold text-lg text-grey-900">
          {title}
        </Text>
        {selectedCount > 0 && (
          <View className="bg-red-600 rounded-lg px-3 py-1">
            <Text className="text-natural-white font-manrope-bold text-sm">
              {selectedCount} Selected
            </Text>
          </View>
        )}
      </View>

      <View className="flex-row flex-wrap gap-2">
        {options.map((option) => (
          <OptionChip
            key={option}
            label={option}
            isActive={selected.includes(option)}
            onPress={() => onToggle(option)}
          />
        ))}
      </View>
    </View>
  );
};

export default OptionGroups;