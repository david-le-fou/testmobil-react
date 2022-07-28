import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button,Image } from 'react-native';
function getResult() {
  alert("test");
}
export default function App() {

  return (
    <View style={styles.body}>
    <View style={styles.container}>
        <Text>Inscription</Text>
        <View style={styles.block}>
          <Text style={styles.label}>Nom:</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Prenom:</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Age:</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Tél</Text>
          <TextInput style={styles.input}/>
        </View>
        <Button title="Enregistrer" onPress={()=>getResult()}/>
    </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  body : {
    backgroundColor:'#c9dfca'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:20,
    padding:10
  },
  input: {
    borderRadius:5,
    height: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:200,
  },
  block: {
   display:'flex',
   flexDirection:'row',
   flexWrap:'wrap'
  },
  label: {
    position:'relative',
    top:10,
    width:100,
    flex:0.5,
    alignItems:'center',
    justifyContent:'center'
  }
});
