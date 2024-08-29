import { CartItem as Item } from "../../types/CartItem";
import "./CartItem.scss";

const CartItem = ({ cartItem }: { cartItem: Item}) => {
  return (
    <div className="cart-item-container">
        <span>{cartItem.title}</span>
        <span>{cartItem.price}</span>
        <span>{cartItem.quantity}</span>
    </div>
  )
}
export default CartItem