import { PrimaryButtonProps } from "@/type";
import React from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";

const PrimaryButton = ({
  label,
  onPress,
  icon,
  containerClassName = "",
  textClassName = "",
  disabled = false,
  isLoading = false,
}: PrimaryButtonProps) => {
  const hasIcon = !!icon;

  const paddingSize = hasIcon
    ? "pt-2 pb-2 pr-2 pl-8"   // icon → 8px top/bottom, 32px right
    : "py-4 px-4";  // no icon → 16px top/bottom, 12px left/right

  const textSize = hasIcon ? "text-natural-white text-lg font-manrope-bold" : 
  "text-natural-white text-base";

  const roundedSize = hasIcon ? "rounded-3xl" : "rounded-2xl";

  return (
    <View className="w-full">
      <TouchableOpacity
        activeOpacity={0.85}
        disabled={disabled}
        onPress={onPress}
        className={`
          self-center
          ${roundedSize}
          ${paddingSize}
          ${disabled ? "bg-red-100" : "bg-red-default"}
          ${containerClassName}
        `}
      >
        <View
  className={`
    flex-row items-center
    ${hasIcon ? "justify-between w-full" : "justify-center"}
  `}
>
  {isLoading ? (
    <ActivityIndicator className="w-full py-5 justify-center items-center" size="small" color="white" />
  ) : (
    <>
      <Text className={`${textSize} ${textClassName}`}>{label}</Text>

      {hasIcon && (
        <Image
          source={icon}
          resizeMode="contain"
          className="w-[56px] h-[56px] ml-4"
        />
      )}
    </>
  )}
</View>

      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
