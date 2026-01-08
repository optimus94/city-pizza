import React from "react";
import { Pressable, Text, View } from "react-native";

type SizeSelectionProps = {
  sizes: any[];
  selected: any;
  onSelect: (s: any) => void;
};

const SizeSelector = ({ sizes = [], selected, onSelect }: SizeSelectionProps) => {
    if(!Array.isArray(sizes) || sizes.length === 0) return null;
  return (
    <View className="bg-natural-white rounded-2xl p-4 mb-4 gap-2">
      <Text className="flex-1 font-manrope-bold text-lg text-grey-900">
        Size
      </Text>
      <View className="flex-row flex-wrap gap-2">
        {sizes.map((s) => {
          const active = selected?.label === s.label;
          return (
            <Pressable
              key={s.label}
              onPress={() => onSelect(s)}
              className={`px-4 py-2 rounded-xl border ${
                selected.label === s.label
                  ? "bg-red-50 border-red-400"
                  : "border-grey-200"
              }`}
            >
              <Text
                className={
                  active
                    ? "text-red-default"
                    : "text-grey-400"
                }
              >
                {s.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default SizeSelector;
