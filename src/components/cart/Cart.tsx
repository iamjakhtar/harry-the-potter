import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { calculateCartTotal } from "../../utils/calculateCartTotal";
import { calculateDiscount } from "../../utils/calculateDiscount";
import CartItem from "../cart-item/CartItem";
import "./Cart.scss";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const cartTotal = calculateCartTotal(cartItems);
  const discount = calculateDiscount(cartItems);
  const netTotal = cartTotal - parseFloat(discount);

  return (
    <div className="cart-container" data-testid="cart-container">
      <div className="cart-header">
        <span>Title</span>
        <span>Price</span>
        <span>Qty</span>
      </div>
      { cartItems.length === 0 ? <p>Cart is empty</p> :
      cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="cart-footer">
        <div>
          <span>Gross Total:</span>
          <span>€{cartTotal}</span>
        </div>
        <div>
          <span>Discount:</span>
          <span>€{discount}</span>
        </div>
        <div>
          <span>Net Total:</span>
          <span>€{netTotal}</span>
        </div>
      </div>
    </div>
  );
};
export default Cart;
