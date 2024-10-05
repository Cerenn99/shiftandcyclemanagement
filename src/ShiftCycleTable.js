import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';

const ShiftCycleTable = ({ shifts, cycles, onDeleteShift, onDeleteCycle }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
      <Paper style={{ flex: 1, marginRight: '1rem', borderRadius: '15px', border: '1px solid #ccc', padding: '1rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vardiya No</TableCell>
              <TableCell>Giriş</TableCell>
              <TableCell>Çıkış</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shifts.map((shift, index) => (
              <TableRow key={index}>
                <TableCell>{shift.shiftNumber}</TableCell>
                <TableCell>{shift.entryTime}</TableCell>
                <TableCell>{shift.exitTime}</TableCell>
                <TableCell>
                  <Button 
                    color="error" 
                    onClick={() => onDeleteShift(index)} 
                    sx={{ textTransform: 'none' }} 
                  >
                    Sil
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Paper style={{ flex: 1, marginLeft: '1rem', borderRadius: '15px', border: '1px solid #ccc', padding: '1rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Döngü No</TableCell>
              <TableCell>Başlangıç</TableCell>
              <TableCell>Bitiş</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cycles.map((cycle, index) => (
              <TableRow key={index}>
                <TableCell>{cycle.cycleNumber}</TableCell>
                <TableCell>{cycle.startDate}</TableCell>
                <TableCell>{cycle.endDate}</TableCell>
                <TableCell>
                  <Button 
                    color="error" 
                    onClick={() => onDeleteCycle(index)} 
                    sx={{ textTransform: 'none' }} 
                  >
                    Sil
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default ShiftCycleTable;
