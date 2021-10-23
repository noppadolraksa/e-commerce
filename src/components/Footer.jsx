import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  margin: 0px 0px;
`;

const Desc = styled.p`
  margin: 0px, 0px;
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
`;

const Center = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 30px;
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
`;

const Right = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px 20px 0px;
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
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Shoes</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          My-Shop building 188/1 sukhumvit rd. 11220
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +6687-560-6096
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          Noppadol.raksa@gmail.com
        </ContactItem>
        <Payment src="http://cdn30.us1.fansshare.com/image/mastercard/visa-mastercard-logo-transparent-logo-328509012.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
