// src/screens/Login.js
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
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
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default Login;
