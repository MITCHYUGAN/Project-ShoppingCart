import { useEffect, useState } from "react";
import "../style/ShopPage.css";
import PropTypes from "prop-types";

const ProductCard = ({ ItemsInCart, setItemsInCart, image, title, price, id}) => {
  const [numberOfItems, setNumberOfItems] = useState(1);

  const handleAddToCart = () => {
    const count = parseInt(numberOfItems);

    if (!count || count < 1) {
      alert("No Of Items cannot be empty or less than 1");
      return;
    }

    for (const item of ItemsInCart) {
      if (item.title == title && item.image === image) {
        alert("Items Already exist in cart");
        return;
      }
    }

    setItemsInCart([
      ...ItemsInCart,
      {
        id,
        title,
        price,
        image,
        noOfItems: count,
      },
    ]);
  };

  return (
    <div className="product">
      <img src={image} className="image" alt="" />
      <div className="title_price">
        <p>{title}</p>
        <span>{price}</span>
      </div>
      <div className="controls">
        <input
          type="number"
          value={numberOfItems}
          min={1}
          onChange={(e) => setNumberOfItems(e.target.value)}
          className="productinput"
        />
        <button className="addItemsBtn" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

const ShopPage = ({ItemsInCart, setItemsInCart}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        console.log("Products", json);
      });
  }, []);

  return (
    <main className="shoppage">
      <section className="shoppageheader">
        <h1>Shopping Page</h1>
        <p>Pick items you want, add to cart, checkout and get your product</p>
      </section>
      <section className="shoppageproducts">
        <h1>Products</h1>
        <hr />
        <div className="products">
          {products.map(({ id, title, price, image }) => {
            return (
              <ProductCard ItemsInCart={ItemsInCart} setItemsInCart={setItemsInCart} key={id} title={title} price={price} image={image} />
            );
          })}
        </div>
      </section>
    </main>
  );
};

ShopPage.propTypes = {
  ItemsInCart: PropTypes.array.isRequired,
  setItemsInCart: PropTypes.func.isRequired,
};

ProductCard.propTypes = {
  ItemsInCart: PropTypes.array.isRequired,
  setItemsInCart: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ShopPage;
