import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

const InputField = ({ label,required,color,placeholder, ...props }) => {
  return (
    <Box marginBottom="8px">
      <Typography variant="body1" gutterBottom style={{ textAlign: "left" }} color={color}>
        {label}{required && <span style={{ color: "red" }}>*</span>}
      </Typography>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        fullWidth
        {...props}
        size='small'
      />
    </Box>
  );
};

export default InputField;
