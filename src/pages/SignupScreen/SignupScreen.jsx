import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView} from 'react-native';

export default function SignupScreen() {
  const [isSelected, setSelection] = useState(false);

  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logoLoginScreen.png')} style={styles.logo} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Criar Conta</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#A1A1A1"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A1A1A1"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="CPF / CNPJ"
            placeholderTextColor="#A1A1A1"
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Data de nascimento"
            placeholderTextColor="#A1A1A1"
            keyboardType="numeric"

          />

          <View style={styles.checkboxContainer}>
            {/* <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            /> */}
            <Text style={styles.checkboxLabel}>
              Li e Aceito Termos de Uso e Política de Privacidade
            </Text>
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0147',

    width: '100%',
    borderBottomLeftRadius: 110,
    borderBottomRightRadius: 110,
    marginBottom: 0,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: '10%',
    alignItems: 'center',
    paddingVertical:10
  },
  title: {
    fontSize: 28,
    color: '#1D1A7A',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
    color:'black'
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#1D1A7A',
  },
  saveButton: {
    backgroundColor: '#0F0147',
    width: '110%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',

  },
});
