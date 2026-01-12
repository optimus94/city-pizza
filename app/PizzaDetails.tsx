import DetailsHeader from "@/components/PizzaDetails/DetailsHeader";
import OptionGroups from "@/components/PizzaDetails/OptionGroups";
import PizzaDetailsHeader from "@/components/PizzaDetails/PizzaDetailsHeader";
import SizeSelector from "@/components/PizzaDetails/SizeSelector";
import PrimaryButton from "@/components/PrimaryButton";
import { TOPPINGS, pizza } from "@/constants";
import usePizzaSelectionStore from "@/store/sizeselection.store";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PizzaDetails = ({ route }: any) => {
  const searchParams = useLocalSearchParams();
  const params = route?.params ?? searchParams;

  let cartItem = params?.cartItem;
  if (!cartItem && params?.variantId) {
    const raw = params.variantId as string;
    const idStr = raw.split(" - ")[0];
    const id = Number(idStr);
    cartItem = pizza.find((p: any) => p.id === id) || null;
  }

  const navigation = useNavigation<any>();

  const selectedSizes = usePizzaSelectionStore((state) => state.selectedSizes);
  const setSelectedSize = usePizzaSelectionStore(
    (state) => state.setSelectedSize
  );

  const size = selectedSizes[cartItem.id] ?? {
    ...cartItem.sizes[0],
    price: cartItem.sizes[0].price,
  };

  const [toppings, setToppings] = useState<string[]>(
    cartItem.toppings || cartItem.defaultToppings || []
  );

  const toggle = (value: string) => {
    setToppings((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const price = parseFloat(size.price || cartItem.price);

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, paddingBottom: 16, backgroundColor: "#F3F7F8" }}
    >
      <PizzaDetailsHeader onBack={() => navigation.goBack()} />
      <ScrollView
        className="px-4"
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <DetailsHeader item={cartItem} price={price} />
        <SizeSelector
          sizes={cartItem.sizes}
          selected={size}
          onSelect={(s) =>
            setSelectedSize(cartItem.id, {
              ...s,
              price: s.price,
            })
          }
        />

        <OptionGroups
          title="Toppings"
          options={TOPPINGS}
          selected={toppings}
          onToggle={toggle}
        />
      </ScrollView>
      <View className="px-4">
        <PrimaryButton
          label="Update Item"
          onPress={() => navigation.goBack()}
          containerClassName="w-full"
        />
      </View>
    </SafeAreaView>
  );
};

export default PizzaDetails;
