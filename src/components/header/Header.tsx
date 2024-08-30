import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "../cart/Cart";
import CartIcon from "./cart-shopping.svg";
import "./Header.scss";

const Header = () => {
  const { toggleCart, isCartOpen } = useContext(CartContext);

  return (
    <>
    <header>
      <nav>
        <a href="/">Harry The Potter</a>
        <button onClick={toggleCart}>
         <img src={CartIcon} alt="Cart Icon" />
        </button>
      </nav>
    </header>
    { isCartOpen && <Cart/>}
    </>
  )
}
export default Header