import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button } from 'react-native';

export const INICIO = () => {
  const [nombre, setNombre] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contraseña, setcontraseña] = React.useState('');
  const [verificarContraseña, setverificarContraseña] = React.useState('');
  
  

  return (
    
    <SafeAreaView style={styles.container}> 

<View>
        <Text style={styles.Title}>Inicia Secion con PlayStation</Text>
        <TextInput
          
        />
      </View>

      <View style={styles.Container2}>
        <Text style={styles.Text}>Nombre:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNombre}
          value={nombre}
          placeholder="Ingrese su nombre"
        />
      </View>
      <View style={styles.Container2}>
        <Text style={styles.Text}>email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Ingrese su email"
        />
      </View>
      <View style={styles.Container2}>
        <Text style={styles.Text}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setcontraseña}
          value={contraseña}
          placeholder="Ingrese su contraseña"
        />
      </View>
      <View style={styles.Container2}>
        <Text style={styles.Text}>Verificar tu Contraseña:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setverificarContraseña}
          value={verificarContraseña}
          placeholder="Verifique su Contraseña"
        />
      </View>
      <Button 
        title='Inicio Secion'  
        onPress={()=>('Inicio Secion')}/>  
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
    Title:{
    fontSize: 34,             
    fontWeight: 'bold',       
    color: 'black',         
    textAlign: 'center',
    },
  container: {
    backgroundColor:'#9da6bc',
    flex: 1,
    justifyContent: 'center',
    padding:50,
  },
  Container2: {
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
  },
  Text: {
    marginBottom: 8,
    fontSize: 24,
    color:'white' 
  },
});
