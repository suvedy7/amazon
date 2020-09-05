export const initialState = {
  basket: [
    {
      id: "123123",
      title: "The Lean Startup , Eric Ries",
      price: "{11.98}",
      rating: "{5}",
      image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
    },
    {
      id: "123123",
      title: "The Lean Startup , Eric Ries",
      price: "{11.98}",
      rating: "{5}",
      image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //lOGIC FOR REMOVING FROM BASKET

      //    We cloned the basket
      let newBasket = [...state.basket];

      //
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //  remove item from basket
        newBasket.splice(index, 1);
      } else {
        console.warn();
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
