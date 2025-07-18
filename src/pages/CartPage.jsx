import "../style/CartPage.css";
import PropTypes from "prop-types"

const CartPage = ({ ItemsInCart }) => {
  if (ItemsInCart.length == 0) {
    return (
      <div className="cartPage">
        <h1>ShopRT Cart Page</h1>
        <p>No Items in Cart</p>
      </div>
    );
  }

  return (
    <main className="cartPage">
      <h1>ShopRT Cart Page</h1>
      <div className="cartProducts">
        {ItemsInCart.map(({ title, price, image, noOfItems }) => {
          return (
            <div className="cartProduct" key={title}>
              <img className="image" src={image} alt="" />
              <div className="cartProductContents">
                <p className="productName"><span>Product Name: </span>{title}</p>
                <p className="price"><span>Price: </span>{price}</p>
                <p className="noOfItems"><span>No of Items: </span>{noOfItems}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

CartPage.propTypes = {
  ItemsInCart: PropTypes.array.isRequired
}

export default CartPage;
