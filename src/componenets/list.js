import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, ActivityIndicator, ScrollView } from "react-native"
import { Image, Input } from "@rneui/themed";
import jwt from 'jwt-decode'
import { useSelector } from 'react-redux';
import jwtDecode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import Toast from 'react-native-toast-message'
import axios from 'axios'
import store from "../redux/store";
import { authActions } from "../redux/actions";
import { ListItem, SearchBar, Button } from '@rneui/themed';
export const TestPage = ({ navigation }) => {
  const [infos, setInfos] = React.useState({ email: "", password: "" });
  const test = useSelector(state => state.auth.value);

  const persons = [
    {
      id: "1",
      name: "Earnest Green",
      description:"Earnest Green Earnest GreenEarnest GreenEarnest GreenEarnest GreenEarnest Green "
    },
    {
      id: "2",
      name: "Winston Orn",
      description:"Winston OrnWinston OrnWinston OrnWinston OrnWinston OrnWinston OrnWinston OrnWinston Orn"
    },
    {
      id: "3",
      name: "Carlton Collins",
      description:"Carlton CollinsCarlton CollinsCarlton CollinsCarlton CollinsCarlton CollinsCarlton CollinsCarlton Collins"
    },
    {
      id: "4",
      name: "Malcolm Labadie",
      description:"Malcolm Labadie Malcolm Labadie Malcolm Labadie Malcolm Labadie Malcolm LabadieMalcolm LabadieMalcolm Labadie "
    },
    {
      id: "5",
      name: "Michelle Dare",
      description:"Michelle Dare Michelle Dare Michelle Dare Michelle Dare Michelle DareMichelle DareMichelle DareMichelle Dare"
    },
    {
      id: "6",
      name: "Carlton Zieme",
      description:"Carlton Zieme Carlton Zieme Carlton Zieme Carlton Zieme Carlton Zieme Carlton Zieme Carlton Zieme Carlton Zieme"
    },
    {
      id: "7",
      name: "Jessie Dickinson",
      description:"Jessie DickinsonJessie Dickinson Jessie Dickinson Jessie DickinsonJessie DickinsonJessie Dickinson"
    },
    {
      id: "8",
      name: "Julian Gulgowski",
      description:"Julian Gulgowski Julian Gulgowski Julian Gulgowski Julian Gulgowski Julian Gulgowski Julian Gulgowski "
    },
    {
      id: "9",
      name: "Ellen Veum",
      description:"Ellen Veum Ellen Veum Ellen Veum Ellen Veum Ellen Veum "
    },
    {
      id: "10",
      name: "Lorena Rice",
      description:"Lorena Rice Lorena Rice Lorena Rice Lorena Rice Lorena Rice Lorena Rice Lorena Rice Lorena Rice"
    },

    {
      id: "11",
      name: "Carlton Zieme",
      description:"Carlton Zieme Carlton Zieme Carlton Zieme Carlton Zieme Carlton ZiemeCarlton Zieme"
    },
    {
      id: "12",
      name: "Jessie Dickinson",
      description:"Jessie Dickinson Jessie Dickinson Jessie Dickinson Jessie DickinsonJessie DickinsonJessie Dickinson"
    },
    {
      id: "13",
      name: "Julian Gulgowski",
      description:"Julian GulgowskiJulian GulgowskiJulian GulgowskiJulian GulgowskiJulian GulgowskiJulian GulgowskiJulian GulgowskiJulian GulgowskiJulian GulgowskiJulian GulgowskiJu"
    },
    {
      id: "14",
      name: "Ellen Veum",
      description:"Ellen VeumEllen VeumEllen VeumEllen VeumEllen VeumEllen VeumEllen VeumEllen VeumEllen VeumEllen VeumEllen VeumEllen VeumEllen Veum"
    },
    {
      id: "15",
      name: "Lorena Rice",
      description:"Lorena RiceLorena RiceLorena RiceLorena RiceLorena RiceLorena RiceLorena RiceLorena RiceLorena RiceLorena RiceLorena Rice"
    },
  ];

  const deviceStorage = async (key, value) => {
    try {
      const x = await AsyncStorage.setItem(key, value)

    } catch (e) {
      //alert(e)
    }

  }


  return (
    <View >



      <View style={{ paddingTop:20  }}>
        <SearchBar
          placeholder="Type Here..."

        //value={search}
        />
      </View>

      <ScrollView >
        <View style={{paddingBottom:80}}>
          {persons.map((p, i) => {
            return (
              <View key={i}>
                <ListItem bottomDivider  >
                  <ListItem.Content >
                    <ListItem.Title >{p.name}</ListItem.Title>
                    <ListItem.Subtitle >{p.name}</ListItem.Subtitle>
                    <ListItem.Subtitle>{p.description}</ListItem.Subtitle>
                  </ListItem.Content>
                  <Button
              title="Detay"
              buttonStyle={{
                borderColor: 'rgba(78, 116, 289, 1)',
              }}
              type="outline"
              raised
              titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
         
            />
                </ListItem>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    minHeight: Dimensions.get('screen').height / 1.1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAEAEA"

  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -70

  },
  nameField: {
    width: 300,
    height: 50,
    borderWidth: 1.2,
    borderColor: "black",
    borderRadius: 10,
    margin: 5


  },
  button: {
    shadowColor: 'black',
    shadowOpacity: 0,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 10,
    elevation: 15,
    borderWidth: 0,
    backgroundColor: "#2D2A35",
    borderRadius: 10,
    height: 55,
    width: 300,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",

  },
  text: {

    fontSize: 22,
    color: "#fff",
  }
})