import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const PrimaryButton = ({
  label,
  onPress,
  icon,
  containerClassName = "",
  textClassName = "",
  disabled = false,
}: PrimaryButtonProps) => {
  return (
    <View className="w-full">
      <TouchableOpacity
        activeOpacity={0.85}
        disabled={disabled}
        onPress={onPress}
        className={`w-full p-3 rounded-3xl ${disabled ? "bg-red-100" : "bg-red-default"} ${containerClassName}`}
      >
        <View className="flex-row items-center justify-between ml-6">
            <Text className={`text-natural-white text-lg font-manrope-bold ${textClassName}`}>{label}</Text>
            {icon && (
                <Image source={icon} resizeMode="contain" className="w-[56px] h-[56px]"/>
            )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
