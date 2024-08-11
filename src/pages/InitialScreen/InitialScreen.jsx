import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InitialScreen = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" style={styles.container}>
        <View style={styles.imageBox}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode='contain' />
        </View>

        <View style={styles.containerPaiBrancoBemVindo}>
          <Text style={styles.title}>Bem-Vindo</Text>

          <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonTextLogin}>Fazer Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCadastro} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonTextCadastro}>Criar Conta</Text>
          </TouchableOpacity>

          <Image source={require('../../assets/Logo2.png')} style={styles.logoBemVindo} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0147',
  },

  imageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: '120%',
    height: '120%',
  },

  containerPaiBrancoBemVindo: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: '10%',
  },

  title: {
    fontSize: 30,
    color: '#0F0147',
    marginBottom: 40,
    fontWeight: 'bold',
  },

  buttonLogin: {
    backgroundColor: '#0F0147',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
  },

  buttonCadastro: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: '#0F0147',
    marginBottom: 10,
  },

  buttonTextLogin: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonTextCadastro: {
    color: '#0F0147',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  logoBemVindo: {
    width: 60,
    height: 60,
    marginTop: 0,
  },
});

export default InitialScreen;
