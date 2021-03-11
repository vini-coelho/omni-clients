import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import { Formik, FormikProps } from "formik";

import api from "../services/api";

import {
  Container,
  Name,
  Subtitle,
  Body,
} from '../styles/pages/new-user';

import UserSchema from "../schema/UserSchema";

import Form, { FormValues } from "../components/Form";
import { CustomFooter } from "../components/CustomFooter";
import { NotificationModal } from "../components/NotificationModal";

export default function Home() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  async function handleSubmit(values: FormValues, { resetForm }) {
    console.log(values)
    try {
      const response = await api.post('/users', values)
      console.log(response.data)
      resetForm();
      setModalVisible(true);
    } catch (err) {
      console.log(err.message)
      resetForm();
    }
  }

  function handleCancel() {
    setModalVisible(false);
    router.push('/');
  }

  function handleConfirm() {
    setModalVisible(false);
  }

  return (
    <>
      <NotificationModal
        visible={modalVisible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
      <Container>
        <Head>
          <title>Omni Clients | Cadastro</title>
        </Head>
        <Name>Omni Clients</Name>
        <Subtitle>Preencha o formulario para cadastrar usuarios.</Subtitle>
        <Body>
          <Formik
            component={Form}
            reset
            initialValues={{
              email: '',
              password: '',
              first_name: '',
              last_name: '',
              phone: '',
              age: null,
              cep: '',
              logradouro: '',
              complemento: '',
              bairro: '',
              localidade: '',
              number: '',
              uf: ''
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}
          />
        </Body>
        <CustomFooter />
      </Container>
    </>
  )
}
