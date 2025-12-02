import HeaderBar from "@/components/HeaderBar";
import PrimaryButton from "@/components/PrimaryButton";
import { deals, icons, images } from "@/constants";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const Home = () => {
  const TAB_BAR_HEIGHT = 80;
  const insets = useSafeAreaInsets();

  // Calculate dynamic width available for content (Screen width minus horizontal margins/padding of 16 * 2 = 32)
  const contentWidth = width - 32;

  // Calculate dynamic height for the image based on its aspect ratio (148/361)
  const imageHeight = contentWidth * (148 / 361);

  const renderDeal = ({ item }: any) => (
    <Pressable>
      <View className="w-full px-4 mb-4">
        <View className="bg-natural-white rounded-3xl shadow" style={{overflow: "hidden"}}>
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
                From:{" "} </Text>
                <Text className="text-2xl text-red-default font-manrope-bold">
                  {item.price}
                </Text>
              
            </View>

            {/* Button Section */}
            <View>
              <PrimaryButton
                label="Get Started"
                onPress={() => console.log("Get Started Pressed")}
              />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const ListHeader = () => (
    <View className="flex-col gap-4">
      <HeaderBar />

      <View className="w-full px-4">
        <TouchableOpacity activeOpacity={0.7}>
          <View className="flex-row items-center justify-between p-4 bg-red-100/25 rounded-3xl">
            <View className="flex-row items-center gap-3">
              <Image
                source={icons.pizzaSlice}
                className="size-8"
                resizeMode="contain"
              />
              <Text className="text-base font-manrope-medium">
                Equal Slice Program: {"\n"}Education, Mentorship & Grants
              </Text>
            </View>
            <Image source={icons.caretNext} className="size-4" />
          </View>
        </TouchableOpacity>
      </View>

      <View className="w-full px-4">
        <Image
          source={images.offerBanner}
          resizeMode="cover"
          style={{ width: contentWidth, height: imageHeight }}
        />
      </View>

      <View className="w-full px-4 pb-4">
        <Text className="text-xl text-grey-default font-clashdisplay-bold">
          Featured Deals
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={deals}
        renderItem={renderDeal}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={{
          paddingBottom: TAB_BAR_HEIGHT - insets.bottom + 16,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
