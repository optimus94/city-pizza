import { toNumberPrice } from "@/utils/price";
import React from "react";
import { Modal, Pressable, Text } from "react-native";

type SizeSelectorProps = {
  visible: boolean;
  sizes: any[];
  selected: any;
  onSelect: (size: any) => void;
  onClose: () => void;
};

const SizeSelector = ({
  visible,
  sizes,
  selected,
  onSelect,
  onClose,
}: SizeSelectorProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      presentationStyle="overFullScreen"
    >
      {/* Backdrop */}
      <Pressable
        onPress={onClose}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.45)",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {/* Card */}
        <Pressable
          onPress={() => {}}
          style={{
            width: "100%",
            backgroundColor: "white",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 16,
          }}
        >
          <Text className="text-lg font-manrope-bold mb-4">
            Select Size & Crust
          </Text>

          {sizes.map((size, index) => {
            const isSelected = selected?.label === size.label;

            return (
              <Pressable
                key={index}
                onPress={() => {
                  onSelect(size);
                  onClose();
                }}
                className={`py-3 px-3 rounded-xl flex-row justify-between ${
                  isSelected ? "bg-red-50" : ""
                }`}
              >
                <Text className="text-base text-grey-400 font-manrope-medium">{size.label}</Text>
                <Text className="text-lg text-red-default font-manrope-bold">
                  ${toNumberPrice(size.price).toFixed(2)}
                </Text>
              </Pressable>
            );
          })}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default SizeSelector;
