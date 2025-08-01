/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledNav = styled.nav`
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  color: black;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 20px;
`;

const Navbar = ({ ItemsInCart }) => {
  return (
    <StyledNav>
      <h1>
        <Link style={{ textDecoration: "none" }} to="/">
          ShopRT
        </Link>
      </h1>
      <StyledUl>
        <Link to="/">HomePage</Link>
        <Link to="/shop">ShopPage</Link>
      </StyledUl>
      <Link to="/cart">
        <div className="cartIcon">
          <p className="cartNumber">{ItemsInCart.length}</p>
          <ShoppingCartIcon
            style={{ color: "cornflowerBlue", cursor: "pointer" }}
            color="primary"
          />
        </div>
      </Link>
    </StyledNav>
  );
};

// Navbar.propTypes = {
//   numberOfItemsInCart: PropTypes.Array
// }

export default Navbar;
