import React from "react";
import { Image, Text, View } from "react-native";

type DetailHeaderProps = {
  item: any;
  price: number;
  calories?: string;
}

const DetailsHeader = ({ item, price, calories }: DetailHeaderProps) => {
  return (
    <>
      <View className="bg-natural-white p-4 gap-4 rounded-2xl mb-4">
        <View className="w-full h-48 items-center pt-4 bg-red-50 overflow-hidden rounded-2xl">
          <Image source={item.image} className="size-72" resizeMode="contain" />
        </View>

        <View className="flex-1 items-start gap-1">
          <Text className="font-clashdisplay-bold text-2xl" numberOfLines={1}>
            {item.title}
          </Text>
          {calories && <Text className="text-grey-300 text-sm">{calories}</Text>}
          <Text className="text-grey-200 text-sm" numberOfLines={2}>
            {item.description}
          </Text>
          <Text className="font-manrope-bold text-xl text-red-default">${price.toFixed(2)}</Text>
        </View>
      </View>
    </>
  );
};

export default DetailsHeader;
