import React, { useState } from 'react'
import { Box, FormControl, IconButton, makeStyles, OutlinedInput, Typography } from '@material-ui/core'
import {
 InputLabel
} from "@material-ui/core/InputLabel";
// import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/core/icons";
import { Controller } from 'react-hook-form'

const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    maxWidth: '150px',
        
  },
}));

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, disabled } = props;
  const { errors, setValue } = form;
  const hasError = !!errors[name];
 return (
   <FormControl
     error={hasError}
     fullWidth
     margin="normal"
     variant="outlined"
     size="small"
   >
     <Typography>{label}</Typography>
     <Controller
       name={name}
       control={form.control}
       render={({ onchange, onBlur, value, name }) => (
         <Box className={classes.box}>
           <OutlinedInput
             type="number"
             id={name}
             disabled={disabled}
             value={value}
             onchange={onchange}
             onBlur={onBlur}
           />
           <IconButton
             onClick={() =>
               setValue(
                 name,
                 Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
               )
             }
               >
                   -
             {/* <RemoveCircleOutline /> */}
           </IconButton>
           <IconButton
             onClick={() =>
               setValue(
                 name,
                 Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
               )
             }
               >
                   +
             {/* <AddCircleOutline /> */}
           </IconButton>
         </Box>
       )}
     />
   </FormControl>
 );   
}
export default QuantityField;