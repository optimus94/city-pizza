import cn from "clsx";
import { useState } from "react";
import { Platform, Text, TextInput, TextStyle, View } from "react-native";

const CustomInput = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
  includeFontPadding,
  style: externalStyle,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const resolvedIncludeFontPadding =
    typeof includeFontPadding === "boolean"
      ? includeFontPadding
      : Platform.OS === "android"
      ? false
      : true;

  return (
    <View
      className={cn("w-full bg-natural-white border rounded-3xl px-5 py-3", "input", isFocused ? "border-red-200" : "border-grey-100")}
    >
      <Text className="label text-sm font-manrope-regular">{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor="#999"
        className="text-xl font-manrope-semibold"
        style={[
          {
            includeFontPadding: resolvedIncludeFontPadding,
            paddingVertical: 0,
            textAlignVertical: Platform.OS === "android" ? "center" : undefined,
          } as TextStyle,
          externalStyle as any,
        ]}
      />
    </View>
  );
};

export default CustomInput;
