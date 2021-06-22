import React, { useReducer, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NumPad from "react-numpad";
import Button from '@material-ui/core/Button';
import "firebase/auth";
import "firebase/firestore";
import firebase from './service/fire'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      display:"flex",
      flexDirection: 'column',
    },
    button: {
        margin: theme.spacing(1),
      },
  }));
  
  const initialState = {};

  const reducer = (state, action) => {
    switch (action.type) {
      case "any.number":
        return { anyNumber: action.value };
      case "positive.number":
        return { positiveNumber: action.value };
      case "integer.number":
        return { integerNumber: action.value };
      case "positiveInteger.number":
        return { positiveIntegerNumber: action.value };
      case "any.time":
        return { anyTime: action.value };
      case "any.date":
        return { anyDate: action.value };
      case "time.date":
        return { timeDate: action.value };
      case "italian.calendar":
        return { italianCalendar: action.value };
      case "default.calendar":
        return { defaultCalendar: action.value };
      case "markers.calendar":
        return { markersCalendar: action.value };
      case "any.appointment":
        return { anyAppointment: action.value };
      case "fullscreen.appointment":
        return { fullscreenAppointment: action.value };
      default:
        throw new Error();
    }
  };

  export const config = {
    apiKey: "AIzaSyD7rj8NP33cBcPNrRe3_hohib6boemsEeg",
      authDomain: "petrol-pump-d070c.firebaseapp.com",
      projectId: "petrol-pump-d070c",
      storageBucket: "petrol-pump-d070c.appspot.com",
      messagingSenderId: "289103591635",
      appId: "1:289103591635:web:09bdaccc92b8d7c94a7c26",
      measurementId: "G-FVS8642R9V"
  }
  
  // export function onEnter(number){
  //     // firebase.auth().onAuthStateChanged((user) => {
  //     //   if (user) {
  //     //     // User is signed in, see docs for a list of available properties
  //     //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     //     var uid = user.uid;
  //     //     console.log(uid);
  //     //   } else {
  //     //     console.log("Not logged in."+number)
  //     //   }
  //     // });
  //     if (number == this.pass){
  //       console.log("Pass");
  //     }else{
  //       console.log("Fail");
  //     }
  // }


export default function Numpad(){
  const [phone, setPhone] = useState("");
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [pass,setPass] = useState(0);
   function intial(){
    const min = 1;
    const max = 999999;
    const rand = Math.floor(min + Math.random() * (max - min));
    setPass(rand);
    console.log(rand)
   } 

   function onEnter(number){
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     var uid = user.uid;
    //     console.log(uid);
    //   } else {
    //     console.log("Not logged in."+number)
    //   }
    // });
    if (number == pass){
      console.log("Pass");
    }else{
      console.log("Fail");
    }
  }
    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off">
              <Button
                variant="intial"
                color="secondary"
                onClick={()=>{console.log("Initialized");intial()}}>
                  KeyCard
                </Button>
            <NumPad.Number
                  onChange={(value) =>
                    {dispatch({ type: "positive.number", value });setPhone(value)}
                  }
                  theme="orange"
                  negative={false}
                  position={"startTopLeft"}
                  placeholder={"Positive"}
                >
                  <TextField
                    label="Phone Number"
                    value={state.positiveNumber}
                    InputProps={{
                      readOnly: true
                    }}
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="outlined"
                    margin="normal"
                  />
                </NumPad.Number>
                   <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={()=>{console.log("phone is "+phone);onEnter(phone)}}
                    >
                        Next
                    </Button>
            </form>   
        </div>
    );
}

