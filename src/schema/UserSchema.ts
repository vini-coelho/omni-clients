import * as Yup from 'yup';

const phoneRegex = /^(\([0-9]{2}\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  password: string;
  phone: string;
  cep: string;
  logradouro: string;
  complemento: string;
  number: string;
  bairro: string;
  localidade: string;
  uf: string;
  created_at: Date;
  updated_at: Date;
}

export default Yup.object().shape({
  first_name: Yup
    .string()
    .test(value => /^[A-Za-z]+$/.test(value))
    .required(),
  last_name: Yup
    .string()
    .test(value => /^[A-Za-z]+$/.test(value))
    .required()
    .min(1),
  age: Yup
    .number()
    .positive()
    .required(),
  cep: Yup
    .string()
    .test(value => /^[0-9]{5}-[0-9]{3}$/.test(value))
    .required(),
  logradouro: Yup
    .string()
    .required(),
  complemento: Yup
    .string(),
  number: Yup
    .string()
    .required(),
  bairro: Yup
    .string()
    .required(),
  localidade: Yup
    .string()
    .required(),
  uf: Yup
    .string()
    .min(2)
    .max(2)
    .required(),
  password: Yup
    .string()
    .min(8)
    .max(50)
    .required(),
  email: Yup
    .string()
    .email()
    .required(),
  phone: Yup
    .string()
    .test(value => phoneRegex.test(value))
    .required()
});
