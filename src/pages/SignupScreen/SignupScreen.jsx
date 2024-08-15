import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView} from 'react-native';
import SignupForm from '../../components/SignupForm.jsx';




export default function SignupScreen() {
  // const [isSelected, setSelection] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logoLoginScreen.png')} style={styles.logo} />
        </View>

        <SignupForm />

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
