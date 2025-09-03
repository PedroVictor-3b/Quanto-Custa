import { useState } from 'react';
import { Text, View, TextInput, Button} from 'react-native';

import { styles } from './src/styles/style'
import { calcularPreco } from './src/calculo';

export default function App() {
  const [preco, setPreco] = useState("")
  const [peso, setPeso] = useState("")
  const [resultado, setResultado] = useState(null)

  function handleCalcular (){
    const res = calcularPreco(preco, peso)
    setResultado(res)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUANTO CUSTA?</Text>

      <View style={styles.form}>

        <Text style={styles.label}>Digite o preço:</Text>
        <TextInput style={styles.input}
          placeholder='Ex. 2.50 R$'
          keyboardType='numeric'
          value= {preco}
          onChangeText={setPreco}
        />
        <Text style={styles.label}>Digite o peso:</Text>
        <TextInput style={styles.input}
          placeholder='Ex. 5 Kg'
          keyboardType='numeric'
          value= {peso}
          onChangeText={setPeso}
        />

      </View>

      <View>
        <Button
          title='CALCULAR'   
          onPress={handleCalcular}
        /> 
      </View>

      {resultado && <Text style={styles.resultado}>Custa: {resultado}</Text>}

    </View>
  );
}
