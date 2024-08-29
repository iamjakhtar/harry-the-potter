import { useContext } from "react";
import "./Header.scss";
import { CartContext } from "../../context/CartContext";
import Cart from "../cart/Cart";

const Header = () => {
  const { toggleCart, isCartOpen } = useContext(CartContext);

  return (
    <>
    <header>
      <nav>
        <a href="/">Harry The Potter</a>
        <a href="/">Home</a>
        <a href="/checkout">Checkout</a>
        <button onClick={toggleCart}>Cart</button>
      </nav>
    </header>
    { isCartOpen && <Cart />}
    </>
  )
}
export default Header