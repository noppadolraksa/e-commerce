import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { deleteAllProduct } from "../redux/cartRedux";

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/order", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            itemId: item.item[0]._id,
            quantity: item.quantity,
            price: item.item[0].price,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        const save = await setOrderId(res.data._id);
        dispatch(deleteAllProduct());
      } catch (err) {
        console.error(err);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser, dispatch]);

  const handleClick = useCallback((e) => history.push("/"), [history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }} onClick={handleClick}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
