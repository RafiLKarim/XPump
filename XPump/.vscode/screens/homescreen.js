import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../utils'; // <-- Importing from utils/index.js

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to XPump!</Text>
      <Text style={styles.subtitle}>One app. Infinite gains.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: colors.white,
    marginTop: 20,
    fontFamily: fonts.PoppinsBold,
  },
  subtitle: {
    fontSize: 36,
    color: colors.white,
    marginTop: 10,
    fontFamily: fonts.PoppinsRegular,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
