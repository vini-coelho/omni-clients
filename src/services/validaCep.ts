import axios from 'axios';

interface ResponseData {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
  erro?: boolean;
}

export default async function validaCep(cep: string) {
  const response = await axios
    .get<ResponseData>(`http://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json`);

  return response.data;
}
