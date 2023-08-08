import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Dimensions,ActivityIndicator } from "react-native"
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
export const LoginPage = ({ navigation }) => {
  const [infos, setInfos] = React.useState({ email: "", password: "" });
  const test = useSelector(state => state.auth.value);
 
  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Zorunlu alan'),
    password: Yup.string()
      .min(4, 'Şifre minimum 4 karakter olmalıdır')
      .max(20, 'Şifre maksimum 20 karakter olmalıdır')
      .required('Zorunlu alan')
  });

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { ...infos },
    onSubmit: values => handleLogin(values)

  });

  const showToast = (type,title,detail) => {
    Toast.show({
      type: type,
      text1: title,
      text2: detail
    });
  }


  const handleLogin = async (values) => {
 
    const response = await api.post('/OzyerIdUser/login-user', values);
   
    const tokenInf = response.data?.data.token
    
    if (response.status === 200) {
      var token = jwt(tokenInf);
      
       await deviceStorage("token", tokenInf);
       var tokenData = jwtDecode(tokenInf)
       var userId=
       tokenData[
       "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
       ];
       
       await deviceStorage("id", userId.toString());
      setToken(tokenInf)
         console.log("response", response)
      navigation.navigate("Home", { UserId: userId })
      setLoadSpinner("none")
    }
    else {
      console.log("response", response)
      showToast("error","Hata",response?.response?.data  )
      setLoadSpinner("none")
    }

  };

  const deviceStorage = async (key, value) => {
    try {
      const x = await AsyncStorage.setItem(key, value)

    } catch (e) {
      //alert(e)
    }

  }
  
  return (
      
    <View style={styles.container} >
 

      <View style={{ margin: 30 }}>
      <Text style={{ fontSize: 10, color: 'red' }}>{test}</Text>
        <Input
          placeholder="Email"
          leftIcon={{ type: 'ionicons', name: 'mail-outline' }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={styles.nameField}
          onChangeText={handleChange('email')}
          onBlur={handleBlur("email")}
          error={errors.email}
          touched={touched.email}

        // onChangeText={e => setInfos({ ...infos, userName: e })}

        />
        {(errors.email && touched.email) &&
          <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
        }
        <Input
          placeholder="Password"
          secureTextEntry={true}
          leftIcon={{ type: 'ionicons', name: "lock" }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={styles.nameField}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}


        />

        {(errors.password && touched.password) &&
          <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
        }
      </View>


      <View style={{ marginBottom: -30 }}>
        <TouchableOpacity style={styles.button} onPress={e=>store.dispatch(authActions.reqTest("asdsad"))}><Text style={styles.text}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ e=>store.dispatch(authActions.decrease(1))}><Text style={styles.text}>azalat</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ e=>store.dispatch(authActions.increase(1))}><Text style={styles.text}>arttr</Text></TouchableOpacity>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    minHeight: Dimensions.get('screen').height ,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAEAEA"

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