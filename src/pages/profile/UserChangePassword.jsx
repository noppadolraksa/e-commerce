import React, { useRef } from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import ButtonResult from "../../components/sidebar/ButtonResult";

import { changeUserPassword, updateUserAddress } from "../../redux/apiCalls";
import InputPassword from "../../components/sidebar/InputPassword";
import InputRePassword from "../../components/sidebar/InputRePassword";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { userRequest } from "../../requestMethods";

const Container = styled.div`
  flex: 4;
  margin-left: 10px;
`;

const Title = styled.h1`
  color: #555;
  font-weight: 500;
  font-size: 30px;
  margin-left: 20px;
`;

const Desc = styled.p`
  font-weight: 200;
  font-size: 16px;
  margin-left: 20px;
  color: #acacac;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Topic = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin-right: 20px;
  font-size: 14px;
`;

const SpanInput = styled.span`
  flex: 5;
`;

const ErrorText = styled.p`
  color: red;
`;

const UserChangePassword = () => {
  const user = useSelector((state) => state.user?.currentUser);
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const defaultValue = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValue,
  });

  //to dispatch confirm password
  const password = useRef({});
  const history = useHistory();
  password.current = watch("newPassword", "");

  const onSubmit = async (data) => {
    try {
      const res = await changeUserPassword(user._id, data, dispatch);
    } catch (err) {
      console.error(err);
      alert("something went wrong..");
    }
  };

  return (
    <Container>
      <Title>Change Password</Title>
      <Desc>
        new password must contain 10-24 characters and include at least one
        letter and number.
      </Desc>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <Topic>Old Password :</Topic>
          <SpanInput>
            <InputPassword
              control={control}
              defaultValue={defaultValue.oldPassword}
              errors={errors}
              inputName="Old Password"
              name="oldPassword"
              floor="10"
              ceil="24"
            />
          </SpanInput>
        </Section>
        {errors.oldPassword && (
          <ErrorText>{errors.oldPassword.message}</ErrorText>
        )}
        <Section>
          <Topic>New Password :</Topic>
          <SpanInput>
            <InputPassword
              control={control}
              defaultValue={defaultValue.oldPassword}
              errors={errors}
              inputName="New Password"
              name="newPassword"
              floor="10"
              ceil="24"
            />
          </SpanInput>
        </Section>
        {errors.newPassword && (
          <ErrorText>{errors.newPassword.message}</ErrorText>
        )}
        <Section>
          <Topic>Confirm Password :</Topic>
          <SpanInput>
            <InputRePassword
              control={control}
              defaultValue={defaultValue.confirmPassword}
              errors={errors}
              inputName="Confirm Password"
              name="confirmPassword"
              password={password.current}
            />
          </SpanInput>
        </Section>
        {errors.confirmPassword && (
          <ErrorText>{errors.confirmPassword.message}</ErrorText>
        )}

        <ButtonResult isFetching={isFetching} />
      </form>
    </Container>
  );
};

export default UserChangePassword;
