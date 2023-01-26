import { useSelector, useDispatch } from "react-redux"
import CartItems from "./CartItems";
import { openModal } from "../Features/Modal/modalSlice";

const CartContainer = () => {
	const dispatch = useDispatch()
	const { cartItems, total, amount } = useSelector((store) => store.cart);

	if (amount < 1) {
		return (
			<section className="cart">
				<header>
					<h2>your bag</h2>
					<h4 className="empty-cart"> is currentl empty</h4>
				</header>
			</section>
		);
	}

	return (
		<section className="cart">
			<header>
				<h2>your bag</h2>
			</header>
			<div>
				{cartItems.map((item) => {
					return <CartItems key={item.id} {...item} />
				})}
			</div>
			<footer>
				<hr />
				<h4>
					total <span>${total.toFixed(2)} </span>
				</h4>
				<div>
					<button
						className="btn clear-btn"
						onClick={() => dispatch(openModal())}
					>clear cart
					</button>
				</div>
			</footer>
		</section>
	)
}


export default CartContainer