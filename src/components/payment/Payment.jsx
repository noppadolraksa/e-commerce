// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import StripeCheckout from "react-stripe-checkout";
// const axios = require("axios").default;

// const Container = styled.div`
//   height: 100vh;
//   width: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Button = styled.button`
//   padding: 10px;
//   background-color: #ddd;
//   border: 1px solid gray;
//   cursor: pointer;
//   border-radius: 5px;
// `;

// const KEY =
//   "pk_test_51JpXxcCf0gBflmxrhvWvRXSCCugjg5CbheYZWFAtKq3qj78PFRVBpOsssGJTRicCu7u9JjELnP02ScTco5XujJCk00zAkhUDlE";

// const Pay = () => {
//   const [stripeToken, setStripeToken] = useState(null);

//   const onToken = (token) => {
//     setStripeToken(token);
//   };

//   useEffect(() => {
//     const makeRequest = async () => {
//       try {
//         const res = await axios.post("https://my-shop-ecommerces.herokuapp.com/stripe/payment", {
//           tokenId: stripeToken.id,
//           amount: 1000,
//         });
//         console.log(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     stripeToken && makeRequest;
//   }, [stripeToken]);

//   return (
//     <Container>
//       <StripeCheckout
//         name="my-shop"
//         image="https://cdn.dribbble.com/users/2060702/screenshots/4373888/media/9c9ba355679e318f9bed9bec7ab74fcd.png?compress=1&resize=400x300"
//         billingAddress
//         shippingAddress
//         description="your total is $50"
//         amount={1000}
//         token={onToken}
//         stripeKey={KEY}
//       >
//         <Button>PAY</Button>
//       </StripeCheckout>
//     </Container>
//   );
// };

// export default Pay;
