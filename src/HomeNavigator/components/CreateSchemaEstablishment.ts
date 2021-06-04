import * as Yup from "yup";

export const CreateSchema = Yup.object().shape({
  cnpj: Yup.string()
    .required("Cnpj is required!")
    .min(14, "Cnpj debe ter 14 numeros")
    .max(14, "Cnpj max 14 numeros"),
  razon_social: Yup.string().required("Razon social is required!"),
  address: Yup.object().shape({
    cep: Yup.string().required("CEP is required!").min(8, 'Min 8 numeros'),
    logradouro: Yup.string().required("Logradouro is required!"),
    complemento: Yup.string().required("Complemento is required!"),
    bairro: Yup.string().required("Bairro is required!"),
    localidade: Yup.string().required("Localidade is required!"),
    uf: Yup.string().required("UF is required!"),
  }),
});