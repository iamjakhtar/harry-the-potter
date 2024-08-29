import { useContext } from "react";
import "./Cart.scss";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart-item/CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-container">
      <div className="cart-header">
        <span>Title</span>
        <span>Price</span>
        <span>Qty</span>
      </div>
      {
        cartItems.map(cartItem => <CartItem  key={cartItem.id} cartItem={cartItem}/>)
      }
    </div>
  )
}
export default Cart