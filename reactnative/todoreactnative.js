import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  TextInput,
  Alert,ImageBackground,TouchableOpacity

} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      time:'',
      Tasks: [],
      Timearr: [],
      pressin:false
    };
  }
  render() {
    const image = { uri: "data:image/jpeg;base64,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" };

    const tasks = this.state.Tasks.map((task, index) => {
      const tasktime = this.state.Timearr[index];
      return (
        <View>
        <TouchableOpacity
          key={index}
          style={styles.containers}
          // onPress = {() => this.setState({pressin: true })}
        >
          <Text style={styles.text}> <Text> {task} </Text> <Text> {tasktime}</Text></Text>
        </TouchableOpacity>
         <Button color="darkgrey" onPress={()=>this.deleteTask(index)} title="Delete"/>
        </View>
      );
    })
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}></ImageBackground>
        <View style={{backgroundColor:"#FFF5EE",}}>
          <TextInput style={styles.inputBox} value={this.state.input} onChangeText={input => this.setState({ input })} placeholder="add a task" placeholderTextColor = "darkgrey" />
        <DatePicker
            style={{width: 200,margin:30,fontWeight:"bold", borderWidth: 1, borderColor: 'grey',placeholderTextColor:"darkgrey",marginLeft:100}}
            date={this.state.time}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 40,
              }
            }}
            onDateChange={time => {this.setState({ time  })}}
          />
            <Button color='darkgrey'  onPress={this.addTask} title="Add Task" />
          </View>
        <ScrollView>{tasks}</ScrollView>
      </View>
    );
  }
  // striketask=()=>{
  //  // to set the onpress back to false
  //  console.log("instriketask");
  //   this.setState(state => ({
  //       pressin:false
  //   }));

  // }

  addTask = ()=> {
     if (this.state.input != '') {
      if (this.state.time != '') {
        this.setState(state => ({
        Tasks: [...state.Tasks, state.input],
        Timearr: [...state.Timearr, state.time],
        input: '',
        time:'',
        pressin:false
    }));
      } else {
        alert('Please enter tentative task completion date');
      }
    } else {
      alert('Please the name of the task ');
    }

  };


  deleteTask = (index) => {
    this.setState(state => {
      const Tasks = [...this.state.Tasks];
      Tasks.splice(index, 1);
      return {
        Tasks: Tasks,
      };
    });
  };
}

const styles = StyleSheet.create({
  inputBox:{
    borderColor: 'grey',
    borderWidth: 2,
    height: 40,
    margin: 10,
    fontWeight: "bold",
    textAlign:"center",

  },

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"#FFF5EE"
  },
   image: {
    marginTop: 23,
    flex: 2,
    resizeMode: "cover",
    justifyContent: "center"
  },
  containers: {
      padding: 10,
      marginTop: 3,
      backgroundColor: 'darkgrey',
      alignItems: 'center',
   },
   text: {
      color: 'Black'
   }

});

