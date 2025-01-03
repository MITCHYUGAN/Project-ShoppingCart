import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import styled from 'styled-components'

const StyledHomePage = styled.section`
  display: flex;
  justify-content: space-evenly;
`

const HomePage = () => {
  return (
    <StyledHomePage>
        <div>
          <h1 style={{fontSize: "30px"}}>Shopp Rightt Timee</h1>
          <p style={{fontSize: "20px"}}>Enjoy Shopping and get anything you want</p>
          <Link to="/shop">
            <Button variant='contained' style={{marginTop: "100px"}}>See More</Button>
          </Link>
        </div>
        <ShoppingCartIcon style={{fontSize: "20rem"}} />
    </StyledHomePage>
  )
}

export default HomePage