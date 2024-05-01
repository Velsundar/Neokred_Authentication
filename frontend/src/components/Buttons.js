// Button.js
import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, width, ...props }) => {
  return (
    <MuiButton sx={{ width }}{...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
