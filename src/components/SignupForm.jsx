import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!name) {
      errors.name = 'Nome é obrigatório';
      valid = false;
    }

    if (!email) {
      errors.email = 'Email é obrigatório';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email inválido';
      valid = false;
    }

    if (!cpfCnpj) {
      errors.cpfCnpj = 'CPF / CNPJ é obrigatório';
      valid = false;
    } else if (!/^\d{11}$|^\d{14}$/.test(cpfCnpj)) { // Validação básica para CPF (11 dígitos) e CNPJ (14 dígitos)
      errors.cpfCnpj = 'CPF / CNPJ inválido';
      valid = false;
    }

    // if (!birthdate) {
    //   errors.birthdate = 'Data de nascimento é obrigatória';
    //   valid = false;
    // } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(birthdate)) {
    //   errors.birthdate = 'Data de nascimento inválida (use formato DD/MM/AAAA)';
    //   valid = false;
    // }

    if (!termsAccepted) {
      errors.termsAccepted = 'Você deve aceitar os termos de uso';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Enviar dados para o backend ou realizar a ação desejada
      console.log('Formulário válido');
    } else {
      console.log('Formulário inválido');
    }
  };

  return (
    <View style={styles.formContainer}>


      <Text style={styles.title}>Criar Conta</Text>

    {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#A1A1A1"
        value={name}
        onChangeText={setName}
      />


    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#A1A1A1"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />


    {errors.cpfCnpj && <Text style={styles.errorText}>{errors.cpfCnpj}</Text>}

      <TextInput
        style={styles.input}
        placeholder="CPF / CNPJ"
        placeholderTextColor="#A1A1A1"
        keyboardType="numeric"
        value={cpfCnpj}
        onChangeText={setCpfCnpj}
      />


    {errors.birthdate && <Text style={styles.errorText}>{errors.birthdate}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento"
        placeholderTextColor="#A1A1A1"
        keyboardType="numeric"
        value={birthdate}
        onChangeText={setBirthdate}
      />


    

      <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)} style={styles.checkboxContainer}>
        {/* Checkbox pode ser implementado com um ícone ou usando bibliotecas de terceiros */}
        <Text style={styles.checkboxLabel}>
          {termsAccepted ? '☑' : '☐'} Li e Aceito Termos de Uso e Política de Privacidade
        </Text>
      </TouchableOpacity>

    {errors.termsAccepted && <Text style={styles.errorText}>{errors.termsAccepted}</Text>}  

      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
    width: '100%',
    paddingHorizontal: '6%',
    alignItems: 'center',
    paddingVertical: 10,
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
    marginBottom: 5,
    backgroundColor: '#F5F5F5',
    color: 'black',
  },
  errorText: {
    color: 'red',
    
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
    // alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: 13,
    color: '#1D1A7A',
    
  },
  saveButton: {
    backgroundColor: '#0F0147',
    width: '100%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});



//import SignupForm from '../../components/SignupForm.jsx'; // Assumindo que o componente está no mesmo diretório


//<SignupForm />