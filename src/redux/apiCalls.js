import {
  loginFailure,
  loginStart,
  loginSuccess,
  updateUserCancel,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserAddressSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data)); //name email whatever
    window.location.href = "/";
  } catch (err) {
    if (err.response.data === "Token is not valid!") {
      alert(
        `Error status : ${err.response.status} ${err.response.data} Please sign in again..`
      );
    } else {
      alert(`Error status : ${err.response.status} ${err.response.data}`);
    }
    dispatch(loginFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await userRequest.put(`/user/${id}`, user);
    dispatch(updateUserSuccess({ id, user }));
  } catch (err) {
    if (err.response.data === "Token is not valid!") {
      alert(
        `Error status : ${err.response.status} ${err.response.data} Please sign in again..`
      );
    } else {
      alert(`Error status : ${err.response.status} ${err.response.data}`);
    }

    dispatch(updateUserFailure());
  }
};

export const updateUserAddress = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await userRequest.put(`/user/${id}`, user);
    dispatch(updateUserAddressSuccess({ id, user }));
  } catch (err) {
    if (err.response.data === "Token is not valid!") {
      alert(
        `Error status : ${err.response.status} ${err.response.data} Please sign in again..`
      );
    } else {
      alert(`Error status : ${err.response.status} ${err.response.data}`);
    }
    dispatch(updateUserFailure());
  }
};

export const changeUserPassword = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest
      .post("/auth/findpassword", { _id: id, password: user.oldPassword })
      .then(() => {
        userRequest.put(`/user/${id}`, { password: user.newPassword });
      });
    alert("Password has been changed!");
    dispatch(updateUserCancel());
  } catch (err) {
    if (err.response.data === "Token is not valid!") {
      alert(
        `Error status : ${err.response.status} ${err.response.data} Please sign in again..`
      );
    } else {
      alert(`Error status : ${err.response.status} ${err.response.data}`);
    }
    dispatch(updateUserFailure());
  }
};
