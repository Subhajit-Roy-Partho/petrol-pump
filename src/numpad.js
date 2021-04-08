import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  



export default function Numpad(){
    const classes = useStyles();
    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="pin-input" label="PIN" variant="outlined" />
            </form>   
        </div>
    );
}

