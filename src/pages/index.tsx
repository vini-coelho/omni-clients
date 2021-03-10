import Head from "next/head";
import Link from "next/link";

import api from "../services/api";

import {
  Container,
  Name,
  Subtitle,
  Body,
  Footer,
  Button,
  UsersListContainer,
  UserItemContainer,
  UserName,
  UserEmail,

} from '../styles/pages/Home';

import { FaGithub } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { User } from "../schema/UserSchema";
import { MdPlace } from "react-icons/md";

export default function Home() {
  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    async function getUsers() {
      const response = await api.get<User[]>('/users');

      setUsers(response.data)
    }
    getUsers();
  }, []);

  return (
    <Container>
      <Head>
        <title>Omni Clients | Home</title>
      </Head>
      <Name>Omni Clients</Name>
      <Subtitle>Clientes cadastrados</Subtitle>
      <Body>
        <UsersListContainer>
          {
            users.map(item => (
              <UserItemContainer key={item.id}>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${item.logradouro}, ${item.number} - ${item.bairro}, ${item.localidade} - ${item.uf}`}
                  target='_blank'
                  rel='noreferrer'>
                  <MdPlace />
                </a>
                <div>
                  <UserName>{item.first_name} {item.last_name}, {item.age}</UserName>
                  <UserEmail>{item.email}</UserEmail>
                  <UserEmail>{item.phone}</UserEmail>
                </div>
              </UserItemContainer>
            ))
          }

        </UsersListContainer>
        <Link href='/new-user'>
          <Button>Cadastrar novo usuario</Button>
        </Link>
      </Body>
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
