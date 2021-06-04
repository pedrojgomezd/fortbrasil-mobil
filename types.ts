export type TItem = {
    id: string;
    razon_social: string;
    cnpj: string;
    address: {
      id: string;
      bairro: string;
      cep: string;
      complemento: string;
      localidade: string;
      logradouro: string;
      uf: string;
    }
}