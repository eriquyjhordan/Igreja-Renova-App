import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={require('./assets/logo-branca.png')} />
      <TouchableOpacity style={styles.SignInButton}>
        <Text style={styles.SignInText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignUpButton}>
        <Text style={styles.SignUpText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#194C76',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 272,
    height: 279,
    marginTop: 96,
  },
  SignInButton: {
    backgroundColor: '#fff',
    width: 320,
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 240,
  },
  SignUpButton: { 
    borderWidth: 1,
    borderColor: '#fff',
    width: 320,
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  SignUpText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  SignInText: {
    color: '#194C76',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
});
