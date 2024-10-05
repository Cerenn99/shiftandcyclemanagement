import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextField, Button, Grid, Typography } from '@mui/material';


const schema = z.object({
  cycleNumber: z
    .preprocess((val) => (typeof val === 'string' && val.trim() === '') ? NaN : Number(val), 
      z.number()
        .min(1, { message: 'Döngü numarası 1 veya daha büyük olmalıdır.' })
        .max(10, { message: 'Döngü numarası 10 veya daha küçük olmalıdır.' })
    ),
  startDate: z.string().nonempty({ message: 'Başlangıç tarihi gereklidir.' }),
  endDate: z.string().nonempty({ message: 'Bitiş tarihi gereklidir.' }),
});

const CycleForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Yeni Döngü Belirle
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Döngü Numarası"
            type="number"
            {...register('cycleNumber')}
            error={!!errors.cycleNumber}
            helperText={errors.cycleNumber ? errors.cycleNumber.message : ''}
            InputLabelProps={{ shrink: true }} 
            inputProps={{
              min: 1,  
              max: 10, 
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Başlangıç Tarihi"
            type="date"
            {...register('startDate')}
            error={!!errors.startDate}
            helperText={errors.startDate ? errors.startDate.message : ''}
            InputLabelProps={{ shrink: true }} 
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Bitiş Tarihi"
            type="date"
            {...register('endDate')}
            error={!!errors.endDate}
            helperText={errors.endDate ? errors.endDate.message : ''}
            InputLabelProps={{ shrink: true }} 
          />
        </Grid>

        <Grid item xs={12}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            sx={{ textTransform: 'none' }} 
            style={{ 
              backgroundColor: 'black', 
              color: 'white', 
              width: '100%', 
              height: '40px', 
              fontSize: '16px',
              borderRadius: '20px', 
            }}>
            Döngü Belirle
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CycleForm;
