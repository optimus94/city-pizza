import { usePressScale } from "@/hooks/usePressScale";
import cn from "clsx";
import { useRef } from "react";
import { FlatList, Pressable, Text } from "react-native";
import Animated from "react-native-reanimated";

type Category = { id: string; name: string };
type CategoryParams = {
  categories: Category[];
  active: string;
  onChange: (id: string) => void;
};

const FilterTabItem = ({
  item,
  active,
  onPress,
}: {
  item: Category;
  active: string;
  onPress: (id: string) => void;
}) => {
  const { animatedStyle, onPressIn, onPressOut } = usePressScale();
  return (
    <Pressable
      onPress={() => onPress(item.id)}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={animatedStyle}
        className={cn(
          "px-6 py-3 rounded-2xl border",
          item.id === active
            ? "bg-grey-default"
            : "bg-natural-white border-grey-100"
        )}
      >
        <Text
          className={cn(
            "text-base",
            item.id === active
              ? "text-natural-white font-manrope-bold"
              : "text-grey-default font-manrope-medium"
          )}
        >
          {item.name}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const FilterTabs = ({ categories, active, onChange }: CategoryParams) => {
  const flatListRef = useRef<FlatList>(null);

  const handlePress = (id: string) => {
    onChange(id);
    const index = categories.findIndex((cat) => cat.id === id);
    if (flatListRef.current && index >= 0) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  };

  return (
    <FlatList
      ref={flatListRef}
      data={categories}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="px-4 gap-4"
      extraData={active}
      renderItem={({ item }) => (
        <FilterTabItem
          key={item.id}
          item={item}
          active={active}
          onPress={handlePress}
        />
      )}
    />
  );
};

export default FilterTabs;
