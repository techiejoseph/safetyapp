// src/screens/Register.js
import React from 'react';
import { View, StyleSheet, Button,ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, HelperText } from 'react-native-paper';
const Teacher = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScrollView style={styles.container}contentContainerStyle={{paddingBottom: 60}}>
       <Controller
        control={control}
        name="firstname"
        defaultValue=""
        rules={{
          required: 'First Name is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="First Name"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.firstname && <HelperText type="error">{errors.firstname.message}</HelperText>}
          </View>
        )}
      />
       <Controller
        control={control}
        name="lastname"
        defaultValue=""
        rules={{
          required: 'Last Name is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Last Name"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.lastname && <HelperText type="error">{errors.lastname.message}</HelperText>}
          </View>
        )}
      />
      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address',
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Email"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.email && <HelperText type="error">{errors.email.message}</HelperText>}
          </View>
        )}
      />
      <Controller
        control={control}
        name="phone"
        defaultValue=""
        rules={{
          required: 'Phone is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Phone"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.phone && <HelperText type="error">{errors.phone.message}</HelperText>}
          </View>
        )}
      />
      <Controller
        control={control}
        name="id"
        defaultValue=""
        rules={{
          required: 'ID is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="ID"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.id && <HelperText type="error">{errors.id.message}</HelperText>}
          </View>
        )}
      />
      <Controller
        control={control}
        name="gender"
        defaultValue=""
        rules={{
          required: 'Gender is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Gender"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.gender && <HelperText type="error">{errors.gender.message}</HelperText>}
          </View>
        )}
      />
      <Controller
        control={control}
        name="username"
        defaultValue=""
        rules={{
          required: 'Username is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Username"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.username && <HelperText type="error">{errors.username.message}</HelperText>}
          </View>
        )}
      />
      <Controller
        control={control}
        name="password"
        defaultValue=""
        rules={{
          required: 'Password is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Password"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.password && <HelperText type="error">{errors.password.message}</HelperText>}
          </View>
        )}
      />
      
      <Button title="Register" onPress={handleSubmit(onSubmit)}style={styles.button1} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 ,
    height:'100%',
    marginBottom: 5,
    paddingBottom:50
  },
  inputContainer: {
    marginBottom: 15,
  },
  button1: {
    marginBottom: 15,
    backgroundColor:'black',
    color:'black'
  },
  input: {
    height: 50,
  },
});

export default Teacher;
