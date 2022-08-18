export const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CARD":
      return { ...state, card: [{ ...action.payload }, ...state.card] };
    case "REMOVE_FROM_CARD":
      return {
        ...state,
        card: state.card.filter((item) => item.id !== action.payload.id),
      };
    case "CHANGE_CARD_QUANTITY":
      return {
        ...state,
        card: state.card.filter((item) =>
          item.id === action.payload.id
            ? (item.quantity = action.payload.quantity)
            : item.quantity
        ),
      };
    default:
      break;
  }
};
