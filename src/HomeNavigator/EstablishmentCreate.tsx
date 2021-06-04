import React from "react";
import { Container } from "../components";
import { TabNavigationProps } from "../components/Navigation";
import FormEstablishment from "./components/FormEstablishment";

const EstablishmentCreate = ({navigation}: TabNavigationProps<'EstablishmentDetails'>) => {
  const onSunccess = () => {
    navigation.navigate('Home');
  }

  return (
    <Container title="Create">
      <FormEstablishment onSuccess={onSunccess} urlForm="establishments" method="post" />
    </Container>
  );
};

export default EstablishmentCreate;
