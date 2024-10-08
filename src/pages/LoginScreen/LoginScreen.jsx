import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';


import LoginForm from '../../components/LoginForm'; // Importando o novo componente


// import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {


  // const navigation = useNavigation();




  const handleLogin = (email, password) => {
    // Lógica de login
    console.log("Email:", email);
    console.log("Senha:", password);
    // Aqui você pode adicionar a navegação ou qualquer outra ação necessária após o login
  };


  
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView >
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </View>

        {/* <View style={styles.formContainer}>    
          <Text style={styles.title}>Faça Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A1A1A1"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#A1A1A1"
            secureTextEntry={true}
          />

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordText}>Recuperar Senha</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View> */}

        <LoginForm onLogin={handleLogin} />

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },

  logoContainer: {
    flex:0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0147',
    width: '100%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },

  logo: {
    width: 250,
    height: 250,
  },
  
  // formContainer: {
  //   width: '100%',
  //   paddingVertical:"14.5%",
  //   paddingHorizontal: '10%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginBottom: 42,
  // },
  // title: {
  //   fontSize: 28,
  //   color: '#0F0147',
  //   fontWeight: 'bold',
  //   marginBottom: 20,
  // },
  // input: {
  //   width: '100%',
  //   height: 50,
  //   borderColor: '#D3D3D3',
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   paddingHorizontal: 15,
  //   fontSize: 16,
  //   marginBottom: 15,
  //   backgroundColor: '#F5F5F5',
  //   color:'black'
  // },
  // forgotPasswordContainer: {
  //   alignSelf: 'flex-end',
  //   marginRight: '10%',
  //   marginBottom: 20,
  // },
  // forgotPasswordText: {
  //   color: '#1D1A7A',
  //   fontSize: 14,
  //   textDecorationLine: 'underline',
  // },
  // loginButton: {
  //   backgroundColor: '#0F0147',
  //   width: '100%',
  //   height: 50,
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: 20,
  // },
  // loginButtonText: {
  //   color: '#FFFFFF',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
});
