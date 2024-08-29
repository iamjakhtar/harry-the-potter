import { useContext } from "react";
import "./Cart.scss";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart-item/CartItem";
import { calculateCartTotal } from "../../utils/calculateCartTotal";
import { calculateDiscount } from "../../utils/calculateDiscount";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const cartTotal = calculateCartTotal(cartItems);
  const discount = calculateDiscount(cartItems);
  const netTotal = cartTotal - parseFloat(discount);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <span>Title</span>
        <span>Price</span>
        <span>Qty</span>
      </div>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="cart-footer">
        <div>
          <span>Gross Total:</span>
          <span>{cartTotal}</span>
        </div>
        <div>
          <span>Discount:</span>
          <span>{discount}</span>
        </div>
        <div>
          <span>Net Total:</span>
          <span>{netTotal}</span>
        </div>
      </div>
    </div>
  );
};
export default Cart;
