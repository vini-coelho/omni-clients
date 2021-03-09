import Head from "next/head";
import { Formik } from "formik";

import api from "../services/api";

import {
  Container,
  Name,
  Subtitle,
  LinksContainer,
  Footer
} from '../styles/pages/Home';

import { FaGithub } from 'react-icons/fa';

import Form, { FormValues } from "../components/Form";
import ClientSchema from "../schema/ClientSchema";

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
        <title>Omni Clients</title>
      </Head>
      <Name>Omni Clients</Name>
      <Subtitle>Preencha o formulario para cadastrar clientes.</Subtitle>
      <LinksContainer>
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
          validationSchema={ClientSchema}
          onSubmit={handleSubmit}
        />
      </LinksContainer>
      <Footer>
        <FaGithub />
        <a
          href='http://github.com/vini-coelho'
          target='_blank'
          rel='noreferrer'
        >
          Made with ♥ by Vinicius Coelho.
        </a>
      </Footer>
    </Container>
  )
}
