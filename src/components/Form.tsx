import React from 'react';
import { FormikProps } from 'formik';

import Loader from 'react-loader-spinner';
import { MdPerson, MdVpnKey } from 'react-icons/md';

import {
  Form,
  Button
} from '../styles/components/Form';

import { CustomInput } from './CustomInput';
import validaCep from '../services/validaCep';


export interface FormValues {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  age: number;
  cep: string;
  phone: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  number: string;
  localidade: string;
  uf: string;
}

const ButtonText: React.FC<{ isSubmitting: boolean }> = ({ isSubmitting }) => {
  if (isSubmitting) {
    return <Loader type='ThreeDots' color='white' height={30} width={30} />;
  } else {
    return <span>CADASTRAR</span>;
  }
};

const LoginForm: React.FC<FormikProps<FormValues>> = ({
  handleChange,
  values,
  errors,
  touched,
  isValid,
  isSubmitting,
  handleSubmit,
  handleBlur,
  setFieldValue,
  dirty
}) => {

  async function fillAddressValues() {

    if (!!errors.cep || !values.cep) {
      return;
    };

    try {
      validaCep(values.cep).then(response => {

        if (!!response.erro) {
          setFieldValue('cep', '')
          return alert('cep invalido!');
        }

        setFieldValue('complemento', response.complemento);
        setFieldValue('logradouro', response.logradouro);
        setFieldValue('localidade', response.localidade);
        setFieldValue('bairro', response.bairro);
        setFieldValue('uf', response.uf);
      });
    } catch (err) {
      return
    }


  }

  function handleCepBlur(event: React.FocusEvent) {
    handleBlur(event);
    fillAddressValues();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <CustomInput
        error={!!errors.email && touched.email}
        icon={MdPerson}
        type='email'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        name='email'
        placeholder='E-mail'
      />
      <CustomInput
        error={!!errors.password && touched.password}
        icon={MdVpnKey}
        type='password'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        name='password'
        placeholder='Password'
      />
      <CustomInput
        error={!!errors.first_name && touched.first_name}
        icon={MdVpnKey}
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.first_name}
        name='first_name'
        placeholder='Nome'
      />
      <CustomInput
        error={!!errors.last_name && touched.last_name}
        icon={MdVpnKey}
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.last_name}
        name='last_name'
        placeholder='Sobrenome'
      />
      <CustomInput
        masked
        mask={values.phone[5] === '9' ? '(99) 99999-9999' : '(99) 9999-9999'}
        error={!!errors.phone && touched.phone}
        icon={MdVpnKey}
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.phone}
        name='phone'
        placeholder='Telefone'
      />
      <CustomInput
        error={!!errors.age && touched.age}
        icon={MdVpnKey}
        type='number'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.age}
        name='age'
        placeholder='Idade'
      />
      <CustomInput
        masked
        mask='99999-999'
        error={!!errors.cep && touched.cep}
        icon={MdVpnKey}
        type='text'
        onChange={handleChange}
        onBlur={handleCepBlur}
        value={values.cep}
        name='cep'
        placeholder='CEP'
      />
      <CustomInput
        error={!!errors.logradouro && touched.logradouro}
        icon={MdVpnKey}
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.logradouro}
        name='logradouro'
        placeholder='Rua'
      />
      <CustomInput
        error={!!errors.complemento && touched.complemento}
        icon={MdVpnKey}
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.complemento}
        name='complemento'
        placeholder='Complemento'
      />
      <CustomInput
        error={!!errors.number && touched.number}
        icon={MdVpnKey}
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.number}
        name='number'
        placeholder='Numero'
      />
      <CustomInput
        error={!!errors.bairro && touched.bairro}
        icon={MdVpnKey}
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.bairro}
        name='bairro'
        placeholder='Bairro'
      />
      <CustomInput
        error={!!errors.localidade && touched.localidade}
        icon={MdVpnKey}
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.localidade}
        name='localidade'
        placeholder='Cidade'
      />
      <CustomInput
        error={!!errors.uf && touched.uf}
        icon={MdVpnKey}
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.uf}
        name='uf'
        placeholder='UF'
      />
      <Button onClick={() => validaCep(values.cep)} type='submit' disabled={!(isValid && dirty)}>
        <ButtonText isSubmitting={isSubmitting} />
      </Button>
    </Form>
  );
};

export default LoginForm;
