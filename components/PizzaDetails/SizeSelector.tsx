import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type SizeSelectionProps = {
  sizes: any[];
  selected: any;
  onSelect: (s: any) => void;
};

const SizeSelector = ({
  sizes = [],
  selected,
  onSelect,
}: SizeSelectionProps) => {
  if (!Array.isArray(sizes) || sizes.length === 0) return null;
  return (
    <View className="bg-natural-white rounded-2xl p-4 mb-4 gap-2">
      <Text className="flex-1 font-manrope-bold text-lg text-grey-900">
        Size
      </Text>
      <View className="flex-row w-full gap-2">
        {sizes.map((s) => {
          const active = selected?.label === s.label;

          const labelParts = (s.label || "").split(" ");
          const sizeNumber = labelParts[0];
          const sizeLabel = labelParts[1];

          return (
            <Pressable
              key={s.label}
              onPress={() => onSelect(s)}
              className={`flex-1 p-2 rounded-xl border justify-center items-center ${
                selected.label === s.label
                  ? "bg-red-50 border-red-400"
                  : "border-grey-200"
              }`}
            >
              <Image
                key={`${s.label}-${active}`}
                source={s.image}
                className={`size-10`}
                resizeMode="contain"
                style={{ tintColor: active ? "#B70F0A" : "null" }}
              />
              <View className="items-center mt-1">
                <Text
                  className={`text-sm font-manrope-bold ${
                    active ? "text-red-default" : "text-grey-900"
                  }`}
                >
                  {sizeNumber}
                </Text>
                <Text
                  className={`text-sm font-manrope-medium ${
                    active ? "text-red-default" : "text-grey-400"
                  }`}
                  numberOfLines={1}
                >
                  {sizeLabel}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default SizeSelector;
