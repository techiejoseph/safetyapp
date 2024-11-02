// src/screens/Register.js
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const Teacher = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="fname"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="First Name"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.fname}
            helperText={errors.fname ? "First Name is required." : ""}
            fullWidth
          />
        )}
      />
      <Controller
        control={control}
        name="lname"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Last Name"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.lname}
            helperText={errors.lname ? "Last Name is required." : ""}
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
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Email"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.email}
            helperText={errors.email ? "Email is required." : ""}
           
            fullWidth
          />
          
        )}
      />
       <Controller
        control={control}
        name="phone"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Phone"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.phone}
            helperText={errors.phone ? "Phone is required." : ""}
            
            fullWidth
          />
        )}
      />
       <Controller
        control={control}
        name="id"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="ID"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.id}
            helperText={errors.id ? "ID Number is required." : ""}
            fullWidth
          />
        )}
      />
       <Controller
        control={control}
        name="gender"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            label="Gender"
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!errors.gender}
            helperText={errors.gender ? "Gender is required." : ""}
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

export default Teacher;
