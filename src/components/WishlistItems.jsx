import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Stars from "./Stars";
import {
  addToCart,
  deleteFromCart,
  addToWishlist,
} from "../redux/reducers/cartSlice";
import { FaHeart } from "react-icons/fa";
import { useRef } from "react";
import { BsFillCartFill } from "react-icons/bs";

function WishlistItems(props) {
  const { id, title, price, category, image, rating} = props.data;

  let productPrice = price;

  let roundPrice = (Math.floor(productPrice * 100) / 100).toFixed(2);

  const priceString = String(roundPrice);
  const priceArr = priceString.split("");
  const mainPrice = priceArr.slice(0, priceArr.indexOf("."));
  const subPrice = priceArr.slice(priceArr.indexOf(".") + 1);
  const heart = useRef();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let isItemInCart = cart.cartItems.find((item) => item.id === id);
  const atcBtn = useRef();
  let isItemInWish = cart.wishListItems.find((item) => item.id === id);

  function handleATCclick() {
    if (atcBtn.current.innerText === "Add to Cart") {
      dispatch(addToCart(props.data));
    } else {
      dispatch(deleteFromCart(props.data));
    }
  }

  function handleHeartClick() {
    dispatch(addToWishlist(props.data));
  }

  return (
    <>
      <div className="card cartDiv">
      <div className="productHeartDivContainer">
            <div
              className="productHeartDiv"
              ref={heart}
              onClick={handleHeartClick}
            >
              <FaHeart
                size={"1.3rem"}
                className={isItemInWish ? "productHeart" : null}
              />
            </div>
          </div>
        <div className="imageDiv">
          <img src={image} alt={title} />
        </div>
        <div className="contentDiv">
          <div>
            <h6>
              {category.toUpperCase()}
              <p style={{ color: "grey" }}>{title}</p>
            </h6>
          </div>
          <div className="priceDiv">
          <Stars stars={rating.rate} reviews={rating.count} />
            <div className="productPriceDiv">
              <p className="dollarSign">$</p>
              <p className="mainPrice">{mainPrice}</p>
              <p className="subPrice">{subPrice}</p>
            </div>
          </div>
          <div className="wishPageBtnDivContainer">
            <button
              id="b"
              onClick={handleATCclick}
              ref={atcBtn}
              className={
                isItemInCart
                  ? "btn redBtn addToCartBtnInAllProducts "
                  : "btn blueBtn addToCartBtnInAllProducts"
              }
            >
              {isItemInCart ? (
                <MdDeleteForever size={"20px"} />
              ) : (
                <BsFillCartFill size={"20px"} />
              )}
              {isItemInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default WishlistItems;
