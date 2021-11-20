import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/useAuth";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const userData = useAuth();

  return (
    <View>
      <Text>Hi this is from home screen - {userData.user}</Text>
      <Button
        title="Go to chat screen"
        onPress={() => {
          navigation.navigate("Chat");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
