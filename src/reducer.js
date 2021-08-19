export const initialState = {
  basket: [],
  user: null
};

// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, .0);

  const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Book":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Remove":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if(index >= 0) {
          newBasket.splice(index, 1);
      } else {
          console.warm(
              `cant remove product(id: ${action.id}) as its not in basket!`
          )
      }
      return {
          ...state,
          basket: newBasket
      }
      case "SET_USER":
      return {
          ...state,
          user: action.user
      }
    default:
      return state;
  }
};

export default reducer;