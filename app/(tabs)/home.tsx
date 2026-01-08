import DealMenu from "@/components/DealMenu";
import FilterTabs from "@/components/FilterTabs";
import HeaderBar from "@/components/HeaderBar";
import PizzaMenu from "@/components/PizzaMenu";
import {
  categories,
  CATEGORY_TITLES,
  categoryDataMap,
  icons,
  images,
} from "@/constants";
import { useMemo, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
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

  const [activeCategory, setActiveCategory] = useState("deals");
  const data = useMemo(() => {
    return categoryDataMap[activeCategory] || [];
  }, [activeCategory]);

  const categoryTitle = useMemo(() => {
    return CATEGORY_TITLES[activeCategory] ?? "Featured Deals";
  }, [activeCategory]);

  const ListHeader = () => (
    <View className="flex-col gap-4 pt-4">
      <FilterTabs
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

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
          {categoryTitle}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-bg-default">
      <HeaderBar />
      {activeCategory === "pizza" ||
      activeCategory === "combo" ||
      activeCategory === "chicken" ? (
        <ScrollView>
          <View style={{ flex: 1, paddingBottom: TAB_BAR_HEIGHT - insets.bottom + 16 }}>
            <ListHeader />
            <PizzaMenu
              items={data}
            />
          </View>
        </ScrollView>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <DealMenu
              item={item}
              contentWidth={contentWidth}
              imageHeight={imageHeight}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={ListHeader}
          contentContainerStyle={{
            paddingBottom: TAB_BAR_HEIGHT - insets.bottom + 24,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
