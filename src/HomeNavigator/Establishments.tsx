import { Feather } from "@expo/vector-icons";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { FlatList, Pressable, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Container, Text } from "../components";
import { TabNavigationProps } from "../components/Navigation";
import { AuthContext } from "../Routes/AuthProviders";
import clientHttp from "../services/clientHttp";
import { ListItem } from "./components";

const Establishments = ({ navigation }: TabNavigationProps<'Home'>) => {
  const { logout, user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchEstablishment = useCallback(() => {
    setRefreshing(true);
    clientHttp.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${user.token}`;

    clientHttp
      .get("establishments")
      .then(({ data }) => {
        setRefreshing(false);
        setData(data);
      })
      .catch((error) => {
        setRefreshing(false);
      });
  }, [refreshing, data]);

  useEffect(() => {
    fetchEstablishment();
  }, []);

  return (
    <Container title="Establishments">
      <Box flex={1} backgroundColor="white">
        {!data.length ? (
          <Box justifyContent="center" flex={1} alignItems="center">
            <Feather name="inbox" size={34} />
            <Text>No records to show</Text>
            <Pressable onPress={fetchEstablishment}>
              <Feather name="refresh-cw" size={18} />
            </Pressable>
          </Box>
        ) : (
          <SafeAreaView>
            <FlatList
              refreshControl={
                <RefreshControl
                  onRefresh={fetchEstablishment}
                  refreshing={refreshing}
                />
              }
              renderItem={(props) => (
                <ListItem {...props} navigation={navigation} />
              )}
              keyExtractor={(item) => item.cnpj}
              {...{ data }}
            />
          </SafeAreaView>
        )}
      </Box>
    </Container>
  );
};

export default Establishments;
