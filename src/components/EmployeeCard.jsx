import React from 'react';
import { Card, CardContent, Typography, withStyles } from '@mui/material';



const EmployeeCard = ({ employee}) => {
  return (
    
    <Card sx={{ minWidth: 275, minHeight: 150,  marginTop: 4, border: '1px solid blue', ':hover': {
                backgroundColor: 'grey', // Hover color
              } }} >
      <CardContent sx={{ textAlign: 'center' }}>
      <Typography color="text.secondary">
         Employee ID: {employee.id} 
          
        </Typography>
        <Typography variant="h5" component="div">
          {employee.name}
        </Typography>
        <Typography>
        Email: {employee.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;

