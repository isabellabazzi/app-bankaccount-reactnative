import React, { Component } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {styles} from './styles';
 
class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        nome: '',
        idade: 0,
        sexo: 'Masculino',
        escolaridade: 'Médio',
        limite: 0,
        brasileiro: false,
        resultado:''
      };

    this.confirmar = this.confirmar.bind(this);
  }
 
  confirmar(){
    this.setState({
      resultado: 'Nome: ' + this.state.nome + '\n' +
                 'Idade: ' + this.state.idade + '\n' +
                 'Sexo: ' + this.state.sexo + '\n' +
                 'Escolaridade: ' + this.state.escolaridade + '\n' +
                 'Limite: ' + this.state.limite + '\n' +
                 ( (this.state.brasileiro) ? 'Brasileiro' : 'Estrangeiro' )
    });
  }

  render(){

    return(

      <View style={[styles.area]}>

        <ScrollView style={[styles.teste]}>
        <View>
          <Text style={[styles.topo]}>Abertura de Conta</Text>
        </View>

        <View>
          <Text style={[styles.title]} >Nome:</Text>
          <TextInput style={styles.input}
          onChangeText={(valor) => this.setState({nome: valor})}
          />
        </View>

        <View>
          <Text style={[styles.title]}>Idade:</Text>
          <TextInput style={[styles.input]} keyboardType='numeric'
          onChangeText={(valor) => this.setState({idade: valor})}
          />
        </View>

        <View>
          <Text style={[styles.title]}>Sexo:</Text>
          <Picker
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
          <Picker.Item key={1} value='Masculino' label="Masculino"/>
          <Picker.Item key={2} value='Feminino' label="Feminino"/>
          </Picker>
        </View>

        <View>
          <Text style={[styles.title]}>Escolaridade:</Text>
          <Picker
          selectedValue={this.state.escolaridade}
          onValueChange={(itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }>
          <Picker.Item key={1} value='Médio' label="Médio" />
          <Picker.Item key={2} value='Graduação' label="Graduação" />
          <Picker.Item key={3} value='Pós Graduação' label="Pós Graduação" />
          <Picker.Item key={4} value='MBA' label="MBA" />
          </Picker>
        
        </View>

        <View>
          <Text style={[styles.label]}>Limite:</Text>
          <Slider
          minimumValue={0}
          maximumValue={2500}
          onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado})}
          value={this.state.limite}
          />
          <Text style={{textAlign: 'center', fontSize: 30}}>
    </Text>

        </View>

        <View>
          <Text style={[styles.title]}>Brasileiro:</Text>
          <Switch 
            value={this.state.brasileiro}
            onValueChange={ (valorSwitch) => this.setState({brasileiro: valorSwitch})}
          />
          
        </View>

        <Button title="Confirmar" onPress={this.confirmar} />
    
          <Text style={styles.texto}> {this.state.resultado} </Text>

      </ScrollView>
      </View>
      
    );
  }
}

export default App;
