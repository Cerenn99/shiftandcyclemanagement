import React, { useState } from 'react';
import ShiftForm from './ShiftForm';
import CycleForm from './CycleForm';
import ShiftCycleTable from './ShiftCycleTable';
import { Paper, Typography } from '@mui/material';

const App = () => {
  const [shifts, setShifts] = useState([]);
  const [cycles, setCycles] = useState([]);

  const handleAddShift = (data) => {
    setShifts([...shifts, data]);
  };

  const handleAddCycle = (data) => {
    setCycles([...cycles, data]);
  };

  const handleDeleteShift = (index) => {
    const newShifts = shifts.filter((_, i) => i !== index);
    setShifts(newShifts);
  };

  const handleDeleteCycle = (index) => {
    const newCycles = cycles.filter((_, i) => i !== index);
    setCycles(newCycles);
  };

  return (
    <div style={{ padding: '2rem' }}>
      {}
      <Typography 
        variant="h6" 
        align="left" 
        gutterBottom 
        style={{ fontWeight: 'bold', marginBottom: '1rem' }} 
      >
        Vardiya Düzenle
      </Typography>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <Paper style={{ flex: 1, marginRight: '1rem', borderRadius: '15px', border: '1px solid #ccc', padding: '1rem' }}>
          <ShiftForm onSubmit={handleAddShift} />
        </Paper>
        <Paper style={{ flex: 1, marginLeft: '1rem', borderRadius: '15px', border: '1px solid #ccc', padding: '1rem' }}>
          <CycleForm onSubmit={handleAddCycle} />
        </Paper>
      </div>

      {}
      <ShiftCycleTable 
        shifts={shifts} 
        cycles={cycles} 
        onDeleteShift={handleDeleteShift} 
        onDeleteCycle={handleDeleteCycle} 
      />
    </div>
  );
};

export default App;
