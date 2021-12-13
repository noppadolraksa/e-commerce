import React from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import ButtonResult from "../../components/sidebar/ButtonResult";

import { updateUserAddress } from "../../redux/apiCalls";
import TextAreaAddress from "../../components/sidebar/TextAreaAddress";

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
`;

const SpanInput = styled.span`
  flex: 5;
`;

const ErrorText = styled.p`
  color: red;
`;

const UserAddress = () => {
  const user = useSelector((state) => state.user?.currentUser);
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const defaultValue = {
    address: user?.address,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue,
  });

  const onSubmit = async (data) => {
    try {
      const res = await updateUserAddress(
        user._id,
        {
          address: data.address,
        },
        dispatch
      );
      alert("updated!");
    } catch (err) {
      if (err.response.status === 403) {
        alert(err.response.data);
      } else {
        console.error(err);
        alert("something went wrong..");
      }
    }
  };

  return (
    <Container>
      <Title>Edit Address</Title>
      <Desc>
        house number / street / sub-distinct / sub-area / postal code ..
      </Desc>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <SpanInput>
            <TextAreaAddress
              control={control}
              defaultValue={defaultValue.address}
              errors={errors}
              inputName={"Address"}
              name="address"
              floor="5"
              ceil="300"
            />
          </SpanInput>
        </Section>

        {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
        <ButtonResult isFetching={isFetching} />
      </form>
    </Container>
  );
};

export default UserAddress;
