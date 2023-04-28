import { log } from "console";

const prices: Record<string, number> = {
  A: 50,
  B: 30,
  C: 20,
  D: 15,
};

const discount: Record<string, number> = {
  A: 20,
  B: 15,
};

const OFFER_A = 3;
const OFFER_B = 2;

const getPrice = (item: string) => prices[item];

const addSubTotal = (total: number, price: number) => total + price;

const countItems = (itemList: string, item: string) =>
  itemList.split("").filter((current) => current === item).length;

const getDiscount = (item: string) => discount[item];

const calculateDiscount = (
  item: string,
  itemCount: number,
  quantity: number
) => {
  return Math.trunc(itemCount / quantity) * getDiscount(item);
};

const applyDiscount = (itemList: string, item: string, quantity: number) => {
  const aCount = countItems(itemList, item);
  return calculateDiscount(item, aCount, quantity);
};

const calculateTotal = (total: number, itemList: string) => {
  total = itemList.split("").reduce((total, item) => {
    if (!getPrice(item)) throw new Error("Unexpected item received");
    return addSubTotal(total, prices[item]);
  }, total);
  return total;
};

export const checkout = (itemList: string): number => {
  let total = 0;

  total = calculateTotal(total, itemList);
  total -= applyDiscount(itemList, "A", 3);
  total -= applyDiscount(itemList, "B", 2);
  return total;
};
