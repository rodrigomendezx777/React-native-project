import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import ConfirmationModal from '../../components/ConfirmationModal'; // Importe o componente

export default function ForgotPasswordScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  const handleSendEmail = () => {
    // Simular envio de email aqui
    setModalVisible(true); // Exibir modal de confirmação
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.title}>Recuperar Senha</Text>

            <View style={styles.formContainer}>
              <Text style={styles.label}>Email Cadastrado</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                placeholderTextColor="#C4C4C4"
                keyboardType="email-address"
              />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSendEmail}>
              <Text style={styles.submitButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Use o componente ConfirmationModal */}
      <ConfirmationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Confirmação"
        message="Senha enviada para o email!"
        icon={require('../../assets/success-icon.png')}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: '#0F0147',
    padding: 20,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: '100%',
    marginBottom: 50,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: '#0F0147',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#0F0147',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
    color: 'black'
  },
  submitButton: {
    backgroundColor: '#0F0147',
    width: '100%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
