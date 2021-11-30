import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100vw;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  margin: 0px 0px;
  ${tablet({ fontSize: "20px" })}
`;

const Desc = styled.p`
  margin: 0px, 0px;
  ${tablet({ fontSize: "10px" })}
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
  margin-right: 30px;
  cursor: pointer;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ width: "35px", height: "35px" })}
`;

const iconstyle = {
  marginRight: "30px",
};

const Center = styled.div`
  flex: 1;
  ${tablet({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  ${tablet({ fontSize: "18px", marginBottom: "10px" })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Right = styled.div`
  flex: 1;
  margin-right: 20px;
  ${mobile({ margin: "0px 20px" })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px 20px 0px;
  ${tablet({ fontSize: "12px", margin: "0px 10px 10px 0px" })}
`;

const Payment = styled.img`
  max-height: 20px;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>My-Shop</Logo>
        <Desc>
          My-Shop is the leading online shopping platform in Southeast Asia that
          offers convenient and seamless shopping experience to users that are
          looking to shop anytime, anywhere. With strong payment and logistical
          support, Shopee provides an easy, secure and fast online shopping
          experience.
        </Desc>
        <SocialContainer>
          <Link to={{ pathname: "https://www.facebook.com" }} target="_blank">
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
          </Link>
          <Link to={{ pathname: "https://www.instagram.com" }} target="_blank">
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
          </Link>
          <Link to={{ pathname: "https://www.twitter.com" }} target="_blank">
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
          </Link>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/products/cart">Cart</Link>
          </ListItem>
          <ListItem>
            <Link to="/products/men-fashion">Man Fashion</Link>
          </ListItem>
          <ListItem>
            <Link to="/products/women-fashion">Women Fashion</Link>
          </ListItem>
          <ListItem>
            <Link to="/products/shoes">Shoes</Link>
          </ListItem>
          <ListItem>
            <Link to="/products/accessories">Accessories</Link>
          </ListItem>
          <ListItem>
            <Link to="/maintenance">My Account</Link>
          </ListItem>
          <ListItem>
            <Link to="/maintenance">Order Tracking</Link>
          </ListItem>
          <ListItem>
            <Link to="/maintenance">Wishlist</Link>
          </ListItem>
          <ListItem>
            <Link to="/agreement">Terms</Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={iconstyle} />
          My-Shop building 188/1 sukhumvit rd. 11220
        </ContactItem>
        <ContactItem>
          <Phone style={iconstyle} />
          +6687-560-6096
        </ContactItem>
        <ContactItem>
          <MailOutline style={iconstyle} /> Noppadol.raksa@gmail.com
        </ContactItem>
        <Payment
          alt="payment"
          src="https://firebasestorage.googleapis.com/v0/b/myshop-e-commerce.appspot.com/o/Credit-Card-Icons.jpeg?alt=media&token=4a1357f6-481a-4c57-bbec-e64b951e9f17"
        />
      </Right>
    </Container>
  );
};

export default Footer;
