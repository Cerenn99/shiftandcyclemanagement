import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextField, Button, Grid, Typography } from '@mui/material';


const schema = z.object({
  shiftNumber: z
    .preprocess((val) => (typeof val === 'string' && val.trim() === '') ? NaN : Number(val), 
    z.number()
      .min(1, { message: 'Vardiya numarası 1 veya daha büyük olmalıdır.' })
      .max(10, { message: 'Vardiya numarası 10 veya daha küçük olmalıdır.' })
    ),
  entryTime: z.string().nonempty({ message: 'Giriş saati gereklidir.' }),
  exitTime: z.string().nonempty({ message: 'Çıkış saati gereklidir.' }),
});

const ShiftForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Yeni Vardiya Belirle
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Vardiya Numarası"
            type="number"
            inputProps={{ 
              min: 1,  
              max: 10, 
            }}
            {...register('shiftNumber')}
            error={!!errors.shiftNumber}
            helperText={errors.shiftNumber ? errors.shiftNumber.message : ''}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Giriş Saati"
            type="time"
            {...register('entryTime')}
            error={!!errors.entryTime}
            helperText={errors.entryTime ? errors.entryTime.message : ''}
            InputLabelProps={{ shrink: true }} 
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Çıkış Saati"
            type="time"
            {...register('exitTime')}
            error={!!errors.exitTime}
            helperText={errors.exitTime ? errors.exitTime.message : ''}
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
            Vardiya Belirle
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ShiftForm;
