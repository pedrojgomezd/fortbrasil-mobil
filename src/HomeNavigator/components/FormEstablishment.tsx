import { useFormik } from "formik";
import React, { useCallback, useContext, useState } from "react";
import { TextInput } from "../../authentication/components/Form";
import { Box, Button, Text } from "../../components";
import AvartarUpload from "./AvatarUpload";
import clientHttp from "../../services/clientHttp";
import { CreateSchema } from "./CreateSchemaEstablishment";
import { AuthContext } from "../../Routes/AuthProviders";

interface FormEstablishmentProps {
  urlForm: String;
  method: "post" | "get" | "put";
  onSuccess: () => void
}
const FormEstablishment = ({ urlForm, method, onSuccess }: FormEstablishmentProps) => {
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setValues,
    values,
  } = useFormik({
    validationSchema: CreateSchema,
    initialValues: {
      cnpj: "",
      razon_social: "",
      address: {
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
      },
    },
    onSubmit: (value) => {
      setLoading(true);
      setError(false);

      clientHttp.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${user.token}`;

      clientHttp[method](urlForm, value)
        .then(() => {
          setLoading(false);
          onSuccess()
        })
        .catch((e) => {
          console.log(e);
          setError(true);
        });
    },
  });

  const searchCEP = useCallback(() => {
    console.log(`http://viacep.com.br/ws/${values.address?.cep}/json/`);
    fetch(`http://viacep.com.br/ws/${values.address?.cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setValues({ ...values, address: data });
      });
  }, [values.address?.cep]);

  return (
    <Box padding="m">
      <Box>
        <Box marginBottom="m">
          <TextInput
            icon="user"
            placeholder="Razon social"
            onChangeText={handleChange("razon_social")}
            onBlur={handleBlur("razon_social")}
            error={errors.razon_social}
            touched={touched.razon_social}
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => true}
          />
        </Box>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="user"
              placeholder="cnpj Establishment"
              onChangeText={handleChange("cnpj")}
              onBlur={handleBlur("cnpj")}
              error={errors.cnpj}
              touched={touched.cnpj}
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => true}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              icon="user"
              placeholder="CEP"
              onChangeText={handleChange("address.cep")}
              onBlur={() => {
                handleBlur("address.cep");
                searchCEP();
              }}
              error={errors.address?.cep}
              touched={touched.address?.cep}
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => true}
            />
          </Box>

          <Box marginBottom="m">
            <TextInput
              icon="User"
              placeholder="Logradouro"
              onChangeText={handleChange("address.logradouro")}
              onBlur={handleBlur("address.logradouro")}
              error={errors.address?.logradouro}
              touched={touched.address?.logradouro}
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => true}
              value={values.address.logradouro}
            />
          </Box>

          <Box marginBottom="m">
            <TextInput
              icon="User"
              placeholder="Complemento"
              onChangeText={handleChange("address.complemento")}
              onBlur={handleBlur("address.complemento")}
              error={errors.address?.complemento}
              touched={touched.address?.complemento}
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => true}
              value={values.address.complemento}
            />
          </Box>

          <Box marginBottom="m">
            <TextInput
              icon="User"
              placeholder="Bairro"
              onChangeText={handleChange("address.bairro")}
              onBlur={handleBlur("address.bairro")}
              error={errors.address?.bairro}
              touched={touched.address?.bairro}
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => true}
              value={values.address.bairro}
            />
          </Box>

          <Box marginBottom="m">
            <TextInput
              icon="User"
              placeholder="Localidade"
              onChangeText={handleChange("address.localidade")}
              onBlur={handleBlur("address.localidade")}
              error={errors.address?.localidade}
              touched={touched.address?.localidade}
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => true}
              value={values.address.localidade}
            />
          </Box>

          <Box marginBottom="m">
            <TextInput
              icon="User"
              placeholder="UF"
              onChangeText={handleChange("address.uf")}
              onBlur={handleBlur("address.uf")}
              error={errors.address?.uf}
              touched={touched.address?.uf}
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => true}
              value={values.address.uf}
            />
          </Box>
          <Box alignItems="center" marginTop="l">
            <Button
              variant="primary"
              label="Save"
              onPress={handleSubmit}
              loading={loading}
            />
          </Box>
          {error && (
            <Box
              backgroundColor="danger"
              borderRadius="m"
              padding="m"
              marginTop="m"
            >
              <Text color="white">An error occurred.</Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FormEstablishment;
