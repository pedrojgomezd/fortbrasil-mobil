import React from "react";
import { Image, StyleSheet } from "react-native";
import { Box, Button, Text } from "../components";
import { TabNavigationProps } from "../components/Navigation";

const EstablishmentDetails = ({ route, navigation }: TabNavigationProps<'EstablishmentDetails'>) => {
  const { item } = route.params;
  return (
    <Box flex={1}>
      <Box flex={0.5} backgroundColor="lightGray" overflow="hidden">
        <Image
          source={{ uri: "https://www.nicepng.com/png/detail/381-3819928_business-development-pipeline-icon.png" }}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
          }}
        />
      </Box>
      <Box>
        <Box padding="m" flexDirection="row">
          <Text variant="body">Razon Social:</Text>
          <Text variant="body" style={{fontWeight: "bold"}}> {item.razon_social}</Text>
        </Box>
        <Box padding="m" flexDirection="row">
          <Text variant="body">CNPJ:</Text>
          <Text variant="body"style={{fontWeight: "bold"}}> {item.cnpj}</Text>
        </Box>
        <Box padding="m" flexDirection="row">
          <Text variant="body">CEP:</Text>
          <Text variant="body" style={{fontWeight: "bold"}}> {item.address.cep}</Text>
        </Box>
        <Box padding="m" flexDirection="row">
          <Text variant="body">Localidade:</Text>
          <Text variant="body" style={{fontWeight: "bold"}}> {item.address.localidade}</Text>
        </Box>
        <Box padding="m" flexDirection="row">
          <Text variant="body">bairro:</Text>
          <Text variant="body" style={{fontWeight: "bold"}}> {item.address.bairro}</Text>
        </Box>
        <Box padding="m" flexDirection="row">
          <Text variant="body">logradouro:</Text>
          <Text variant="body" style={{fontWeight: "bold"}}> {item.address.logradouro}</Text>
        </Box>
        <Box padding="m" flexDirection="row">
          <Text variant="body">compleento:</Text>
          <Text variant="body" style={{fontWeight: "bold"}}> {item.address.complemento}</Text>
        </Box>
      </Box>
      <Box alignItems="center">
        <Button label="Back" onPress={() => navigation.goBack()} />
      </Box>
    </Box>
  );
};

export default EstablishmentDetails;
