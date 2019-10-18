import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import Icon from '@material-ui/core/Icon';

// const useStyles = makeStyles(theme => ({
//     button: {
//       margin: theme.spacing(1),
//     },
//     leftIcon: {
//       marginRight: theme.spacing(1),
//     },
//     rightIcon: {
//       marginLeft: theme.spacing(1),
//     },
//     iconSmall: {
//       fontSize: 20,
//     },
// }));

const buildControl = props => {
    // const classes = useStyles(); 
    return (
        <Grid container spacing={3} style={{marginBottom: '5px'}}>
            <Grid item xs={6}>
                <label>{props.Label}</label>
            </Grid>
            <Grid item xs={6} style={{marginBottom: '5px'}}>
                <Button variant="contained" 
                        onClick={props.Less} 
                        disabled={props.Disabled} 
                        color="secondary" 
                        style={{marginRight: '5px'}}>Less</Button>                            
                <Button variant="contained" onClick={props.Add} color="primary">More</Button>                           
            </Grid>
        </Grid>
    );
}

export default buildControl;