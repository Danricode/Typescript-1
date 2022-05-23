import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const Name = "Daniel";
const Age = 26;
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Name}</Text>
      <Text style={styles.text}>{Age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"white",
    fontSize:30,
  }
});
