import Head from "next/head";
import { Formik } from "formik";

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

export default function Home() {

  async function handleSubmit(values: FormValues) {
    console.log(values)
    try {
      const response = await api.post('/users', values)
      console.log(response.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <Container>
      <Head>
        <title>Omni Clients | Cadastro</title>
      </Head>
      <Name>Omni Clients</Name>
      <Subtitle>Preencha o formulario para cadastrar usuarios.</Subtitle>
      <Body>
        <Formik
          component={Form}
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
  )
}
