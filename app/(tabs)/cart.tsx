import PrimaryButton from "@/components/PrimaryButton";
import { icons, images } from "@/constants";
import { usePressScale } from "@/hooks/usePressScale";
import useCartStore from "@/store/cart.store";
import useLayoutStore from "@/store/layout.store";
import { useNavigation } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

type CartItemProps = {
  item: any;
  onPress: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

const QuantityButton = ({
  icon,
  onPress,
}: {
  icon: any;
  onPress: () => void;
}) => {
  const { animatedStyle, onPressIn, onPressOut } = usePressScale();

  return (
    <Pressable
      className="cart-item__actions"
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View style={animatedStyle}>
        <Image source={icon} className="size-4" resizeMode="contain" />
      </Animated.View>
    </Pressable>
  );
};

const DeleteButton = ({ onPress }: { onPress: () => void }) => {
  const { animatedStyle, onPressIn, onPressOut } = usePressScale();

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={animatedStyle}>
        <View className="flex-center bg-grey-50 p-3.5 rounded-xl">
          <Image source={icons.trash} className="size-5" resizeMode="contain" />
        </View>
      </Animated.View>
    </Pressable>
  );
};

const CartItem = ({
  item,
  onPress,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  const { animatedStyle, onPressIn, onPressOut } = usePressScale();

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View style={animatedStyle} className="cart-item">
        {/* Image */}
        <View className="cart-item__image">
          <Image
            source={item.image}
            className="size-4/5 rounded-lg"
            resizeMode="cover"
          />
        </View>

        {/* Text + Qty */}
        <View className="flex-1 ml-3">
          <Text className="font-manrope-bold text-lg text-grey-default">
            {item.title}
          </Text>

          <Text
            className="font-manrope-regular text-sm text-grey-300 mb-1"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.description}
          </Text>

          <View className="w-full flex-row justify-between items-center mt-1">
            <Text className="font-manrope-bold text-xl text-red-default">
              ${item.totalPrice.toFixed(2)}
            </Text>

            <View className="flex-row gap-2">
              <View className="flex flex-row items-center gap-x-4 px-3 py-2 bg-red-50 rounded-xl">
                <QuantityButton icon={icons.minus} onPress={onDecrease} />

                <Text className="pb-1 font-manrope-bold text-grey-default">
                  {item.quantity}
                </Text>

                <QuantityButton icon={icons.plus} onPress={onIncrease} />
              </View>

              {/* Delete button */}
              <DeleteButton onPress={onRemove} />
            </View>
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
};

const CartSummary = ({
  totalItems,
  subTotal,
  tax,
  total,
  onCheckout,
}: {
  totalItems: number;
  subTotal: number;
  tax: number;
  total: number;
  onCheckout: () => void;
}) => (
  <>
    <View className="bg-natural-white px-4 py-4 rounded-2xl gap-2">
      <View className="flex-row justify-between items-center">
        <Text className="font-clashdisplay-bold text-xl text-grey-default">
          Order Summary
        </Text>
        <Text className="font-manrope-medium text-grey-400 text-md">
          {totalItems} items
        </Text>
      </View>

      {/* Subtotal */}
      <View className="flex-row justify-between mb-2">
        <Text className="font-manrope-regular text-grey-400 text-base">
          Subtotal
        </Text>
        <Text className="font-manrope-bold text-grey-default text-lg">
          ${subTotal.toFixed(2)}
        </Text>
      </View>

      {/* Tax */}
      <View className="flex-row justify-between mb-2">
        <Text className="font-manrope-regular text-grey-400 text-base">
          Tax (13%)
        </Text>
        <Text className="font-manrope-bold text-grey-default text-lg">
          ${tax.toFixed(2)}
        </Text>
      </View>

      {/* Total */}
      <View className="flex-row justify-between">
        <Text className="font-manrope-bold text-lg text-grey-default">
          Total
        </Text>
        <Text className="font-manrope-bold text-xl text-red-default">
          ${total.toFixed(2)}
        </Text>
      </View>
    </View>
    {/* Button Section */}
    <View>
      <PrimaryButton
        containerClassName="w-full mt-4"
        label="Proceed to Checkout"
        onPress={onCheckout}
      />
    </View>
  </>
);

const EmptyCart = () => (
  <View className="flex-1 items-center justify-center">
    <Image
      source={images.emptyCart}
      className="w-48 h-48 mb-6"
      resizeMode="contain"
    />
    <View className="items-center justify-center gap-2">
      <Text className="text-grey-default font-manrope-bold text-lg">
        Your cart is empty.
      </Text>
      <Text className="text-grey-300 font-manrope-medium text-base">
        Add some delicious pizzas to get started!
      </Text>
    </View>
  </View>
);

const Cart = () => {
  const {
    items,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    subTotal,
    tax,
    total,
  } = useCartStore();
  const { headerHeight } = useLayoutStore();
  const navigation = useNavigation<any>();

  const totalItems = items.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  const renderItem = ({ item }: any) => (
    <CartItem
      item={item}
      onPress={() =>
        navigation.navigate("PizzaDetails", {
          variantId: item.variantId,
        })
      }
      onIncrease={() => increaseQty(item.variantId)}
      onDecrease={() => decreaseQty(item.variantId)}
      onRemove={() => removeItem(item.variantId)}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-bg-default">
      <View
        className="flex-row px-4 py-3 border-b border-red-100 bg-natural-white justify-between items-center"
        style={{ height: headerHeight }}
      >
        <Text className="text-2xl font-clashdisplay-bold">My Cart</Text>
        <Pressable onPress={() => clearCart()} className="header-cta">
          <Text className="header-cta-text">Clear Cart</Text>
        </Pressable>
      </View>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.variantId}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 16,
            gap: 16,
            paddingBottom: 96,
          }}
          ListFooterComponent={
            <CartSummary
              totalItems={totalItems}
              subTotal={subTotal()}
              tax={tax()}
              total={total()}
              onCheckout={() => console.log("Proceed Button Pressed!")}
            />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default Cart;