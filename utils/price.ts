export const toNumberPrice = (price: string | number): number => {
    if (typeof price === "number") return price;
    return Number(price);
}