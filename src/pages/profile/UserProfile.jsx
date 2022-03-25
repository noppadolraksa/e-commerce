import React, { useState } from "react";
import styled from "styled-components";
import Input1 from "../../components/sidebar/Input1";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import ButtonResult from "../../components/sidebar/ButtonResult";
import InputEmail from "../../components/sidebar/InputEmail";
import InputPhone from "../../components/sidebar/InputPhone";
import InputImage from "../../components/sidebar/InputImage";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { updateUser } from "../../redux/apiCalls";
import { updateUserCancel, updateUserStart } from "../../redux/userRedux";

const inputStyle = {};

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

const Username = styled.p`
  font-weight: 200;
  font-size: 16px;
  margin-left: 20px;
  color: #575757;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 0;
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
  margin-left: 5px;
  margin-top: 0;
  margin-bottom: 0;
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;

const UserProfile = () => {
  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user?.currentUser);
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const defaultValue = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    phone: user?.phone,
    img: user?.img,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue,
  });

  const onSubmit = async (data) => {
    if (file?.name !== undefined && file?.name !== user.img) {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file?.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setLoading(true);
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          console.error(error);
          alert("upload failed!");
        },
        () => {
          try {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                const res = await updateUser(
                  user._id,
                  {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    phone: data.phone,
                    img: downloadURL,
                  },
                  dispatch
                );
                alert("User has been updated successfully!");
              }
            );
          } catch (err) {
            if (err.response.status === 403) {
              alert(err.response.data);
            } else {
              console.error(err);
              alert("something went wrong..");
            }
          }
        }
      );
    } else {
      try {
        const res = await updateUser(
          user._id,
          {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            img: user.img,
          },
          dispatch
        );

        alert("Profile Updated! ");
      } catch (err) {
        if (err.response.status === 403) {
          alert(err.response.data);
        } else {
          console.error(err);
          alert("something went wrong..");
        }
      }
    }
    dispatch(updateUserCancel());
    setLoading(false);
  };

  return (
    <Container>
      <Title>Edit Profile</Title>
      <Desc>fill the personal infomation here..</Desc>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <Topic>Username :</Topic>
          <SpanInput>
            <Username>{user.username}</Username>
          </SpanInput>
        </Section>
        <Section>
          <Topic>First Name :</Topic>
          <SpanInput>
            <Input1
              control={control}
              defaultValue={defaultValue.firstname}
              errors={errors}
              inputName="First Name"
              inputStyle={inputStyle}
              name="firstname"
              floor="3"
              ceil="20"
            />
          </SpanInput>
        </Section>
        <ErrorContainer>
          <Topic />
          <SpanInput>
            {errors.firstname && (
              <ErrorText>{errors.firstname.message}</ErrorText>
            )}
          </SpanInput>
        </ErrorContainer>
        <Section>
          <Topic>Last Name :</Topic>
          <SpanInput>
            <Input1
              control={control}
              defaultValue={defaultValue.lastname}
              errors={errors}
              inputName="Last Name"
              inputStyle={inputStyle}
              name="lastname"
              floor="3"
              ceil="20"
            />
          </SpanInput>
        </Section>
        <ErrorContainer>
          <Topic />
          <SpanInput>
            {errors.lastname && (
              <ErrorText>{errors.lastname.message}</ErrorText>
            )}
          </SpanInput>
        </ErrorContainer>
        <Section>
          <Topic>Email :</Topic>
          <SpanInput>
            <InputEmail
              control={control}
              defaultValue={defaultValue.email}
              errors={errors}
              inputName="Email"
              inputStyle={inputStyle}
              name="email"
            />
          </SpanInput>
        </Section>
        <ErrorContainer>
          <Topic />
          <SpanInput>
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </SpanInput>
        </ErrorContainer>

        <Section>
          <Topic>Phone :</Topic>
          <SpanInput>
            <InputPhone
              control={control}
              defaultValue={defaultValue.phone}
              errors={errors}
              inputName="Phone Number"
              inputStyle={inputStyle}
              name="phone"
              floor={9}
              ceil={10}
            />
          </SpanInput>
        </Section>
        <ErrorContainer>
          <Topic />
          <SpanInput>
            {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
          </SpanInput>
        </ErrorContainer>

        <Section>
          <Topic>Upload Image :</Topic>
          <SpanInput>
            <InputImage
              file={file}
              setFile={setFile}
              control={control}
              img={defaultValue.img}
            />
          </SpanInput>
        </Section>
        <Section>
          <Topic>
            <ButtonResult isFetching={loading} />
          </Topic>
          <SpanInput></SpanInput>
        </Section>
      </form>
    </Container>
  );
};

export default UserProfile;
