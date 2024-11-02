// src/screens/Register.js
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const School = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Name"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.name}
            helperText={errors.name ? "School Name is required." : ""}
            fullWidth
          />
        )}
      />
      <Controller
        control={control}
        name="schoolid"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="School ID"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.schoolid}
            helperText={errors.schoolid ? "School ID is required." : ""}
            fullWidth
          />
        )}
      />
      <Controller
        control={control}
        name="zone"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="School Zone"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.zone}
            helperText={errors.zone ? "Zone is required." : ""}
           
            fullWidth
          />
        )}
      />
       <Controller
        control={control}
        name="address"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Address"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.address}
            helperText={errors.address ? "Address is required." : ""}
            type="password"
            fullWidth
          />
          
        )}
      />
       <Controller
        control={control}
        name="longitude"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Longitude"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.longitude}
            helperText={errors.longitude ? "Longitude is required." : ""}
            
            fullWidth
          />
        )}
      />
       <Controller
        control={control}
        name="latitude"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Latitude"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.latitude}
            helperText={errors.latitude ? "Latitude is required." : ""}
            fullWidth
          />
        )}
      />
       <Controller
        control={control}
        name="principal"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Principal Name"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.principal}
            helperText={errors.principal ? "Principal Name is required." : ""}
            fullWidth
          />
        )}
      />
       <Controller
        control={control}
        name="username"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Username"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.username}
            helperText={errors.username ? "Username is required." : ""}
            fullWidth
          />
        )}
      />
       <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Password"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.password}
            helperText={errors.password ? "Password is required." : ""}
            type="password"
            fullWidth
          />
        )}
      />
      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default School;
