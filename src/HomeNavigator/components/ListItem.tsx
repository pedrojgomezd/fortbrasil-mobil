import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { TItem } from "../../../types";
import { Box, Text } from "../../components";
import { TabNavigationProps } from "../../components/Navigation";

interface ListItemProp extends TabNavigationProps<'EstablishmentDetails'> {
  item: TItem;
}

const ListItem = ({ item, navigation }: ListItemProp) => {
  return (
    <Pressable onPress={() => navigation.navigate("EstablishmentDetails", { item })}>
      <Box
        flexDirection="row"
        padding="s"
        borderBottomColor="gray"
        borderBottomWidth={1}
      >
        <Box
          width={50}
          height={50}
          borderRadius="xl"
          backgroundColor="darkGray"
          marginRight="m"
          overflow="hidden"
        >
          <Image
            source={{ uri: "https://www.nicepng.com/png/detail/381-3819928_business-development-pipeline-icon.png" }}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
            }}
          />
        </Box>
        <Box flex={1} justifyContent="center">
          <Text variant="title2" color="darkGray">
            {item.razon_social}
          </Text>
          <Text variant="body">{item.cnpj}</Text>
        </Box>
        <Box justifyContent="center">
          <Feather name="chevron-right" size={24} color="#ddd" />
        </Box>
      </Box>
    </Pressable>
  );
};

export default ListItem;
