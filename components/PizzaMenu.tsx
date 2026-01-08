import { icons } from "@/constants";
import useCartStore from "@/store/cart.store";
import { toNumberPrice } from "@/utils/price";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import SizeSelector from "./SizeSelector";

type PizzaMenuParams = {
  items: any[];
  onPress?: (item: any) => void;
};

const PizzaMenu = ({ items, onPress }: PizzaMenuParams) => {
  const { addItem } = useCartStore();

  const [activePizza, setActivePizza] = useState<any>(null);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, any>>({});
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const openDropDown = (item: any) => {
    setActivePizza(item);
    setDropdownVisible(true);
  };

  const handleSelectSize = (size: any) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [activePizza.id]: {
        ...size,
        price: toNumberPrice(size.price),
      },
    }));
  };

  // Adding items into cart handling event
  const handleAddItem = (item: any) => {
    const hasSizes = Array.isArray(item.sizes) && item.sizes.length > 0;
    const size = selectedSizes[item.id];

    const label = hasSizes && size ? size.label : "size.label";
    const variantId = `${item.id} - ${label}`;

    addItem({
      id: item.id,
      variantId,
      title: hasSizes && size ? `${item.title} (${size.label})` : item.title,
      image: item.image,
      unitPrice: toNumberPrice(hasSizes && size ? size.price : item.price),
      description: item.description,
    });
  };

  return (
    <>
      <View className="flex-row flex-wrap justify-between px-4">
        {items.map((item) => {
          const hasSizes = Array.isArray(item.sizes) && item.sizes.length > 0;

          const selectedSize = hasSizes
            ? selectedSizes[item.id] ?? {
                ...item.sizes[0],
                price: toNumberPrice(item.sizes[0].price),
              }
            : null;

          return (
            <Pressable
              key={item.id}
              className="w-[48%] mb-4 rounded-3xl overflow-hidden bg-natural-white items-center"
            >
              <View className="w-full h-20 items-center px-4 pt-4 mb-8">
                <Image
                  source={item.image}
                  className="size-40"
                  resizeMode="contain"
                />
              </View>

              <View className="w-full bg-natural-white px-4 py-4 items-start gap-1">
                <Text className="font-manrope-bold text-lg" numberOfLines={1}>
                  {item.title}
                </Text>
                <Text className="text-grey-300 text-sm">{selectedSize?.calories}</Text>
                <Text className="text-grey-200 text-sm" numberOfLines={2}>
                  {item.description}
                </Text>

                {/* Dropdown (pizza only) */}
                {hasSizes && (
                  <Pressable
                    onPress={() => openDropDown(item)}
                    className="w-full flex-row items-center justify-between mt-3 px-4 py-3 border border-grey-200 rounded-2xl"
                  >
                    {/* Text */}
                    <View className="flex-1 mr-1">
                      <Text
                        className="text-base font-manrope-medium"
                        numberOfLines={1}
                      >
                        {selectedSize?.label}
                      </Text>
                    </View>

                    {/* Icon */}
                    <Image
                      source={icons.caretDown}
                      className="size-4"
                      resizeMode="contain"
                    />
                  </Pressable>
                )}
              </View>

              <View className="w-full flex-row justify-between items-center px-4 pb-4">
                <View>
                  <Text className="flex-1 text-base text-grey-400 font-manrope-medium">
                    From:
                  </Text>
                  <Text className="text-red-default font-manrope-bold text-lg">
                    $
                    {toNumberPrice(
                      hasSizes ? selectedSize!.price : item.price
                    ).toFixed(2)}
                  </Text>
                </View>
                <View>
                  <PrimaryButton
                    label="Add"
                    onPress={() => handleAddItem(item)}
                  />
                </View>
              </View>
            </Pressable>
          );
        })}
      </View>

      {/* Dropdown Selections */}
      {activePizza && (
        <SizeSelector
          visible={dropdownVisible}
          sizes={activePizza.sizes}
          selected={selectedSizes[activePizza.id]}
          onSelect={handleSelectSize}
          onClose={() => setDropdownVisible(false)}
        />
      )}
    </>
  );
};

export default PizzaMenu;
