import React, { useState } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  clearBasket,
  removeFromBasket,
  selectBasketItemWithId,
} from "../store/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  const clearItemsFromBasket = () => {
    dispatch(clearBasket());
  };

  return <Text>DishRow</Text>;
};

export default DishRow;
