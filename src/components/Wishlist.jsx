import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishlistItems from "./WishlistItems";

function Wishlist() {
  const wishlist = useSelector((state) => state.cart.wishListItems);

  return (
    <>
      {wishlist.length ? (
        <div className="wishlist">
          <div className="card-deck">
              {wishlist.map((product) => (
                <WishlistItems key={product.id} data={product} />
              ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5rem 0rem 5rem",
          }}
        >
          <div className="card text-center" style={{ padding: "2rem" }}>
            <p>Your WishList is Empty!</p>
            <Link to={"/"}>
              <button className="btn blueBtn">Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
export default Wishlist;
