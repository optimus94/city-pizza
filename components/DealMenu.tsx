import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import PrimaryButton from "./PrimaryButton";

type DealMenuParams = {
  item: any;
  contentWidth: number;
  imageHeight: number;
  onPress?: () => void;
};

const DealMenu = ({
  item,
  contentWidth,
  imageHeight,
  onPress,
}: DealMenuParams) => {
  return (
    <Pressable>
      <View className="w-full px-4 my-2">
        <View
          className="bg-natural-white rounded-3xl"
          style={{ overflow: "hidden" }}
        >
          <Image
            source={item.image}
            resizeMode="cover"
            style={{ width: contentWidth, height: imageHeight }}
          />
          <View className="px-4 pb-4">
            <Text className="text-lg font-manrope-bold mt-2">{item.title}</Text>
            <Text className="text-sm text-grey-300">{item.description}</Text>
          </View>

          <View className="w-full flex-row justify-between items-center px-4 pb-4">
            {/* Price Section */}
            <View className="justify-start items-start">
              <Text className="text-base text-grey-400 font-manrope-medium">
                From:{" "}
              </Text>
              <Text className="text-2xl text-red-default font-manrope-bold">
                {item.price}
              </Text>
            </View>

            {/* Button Section */}
            <View>
              <PrimaryButton label="Get Started" onPress={() => (0)}/>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default DealMenu;
