// src/screens/Register.js
import React from 'react';
import { View, StyleSheet, Button,ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, HelperText } from 'react-native-paper';
const School = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScrollView style={styles.container}contentContainerStyle={{paddingBottom: 60}}>
        <Controller
        control={control}
        name="schoolid"
        defaultValue=""
        rules={{
          required: 'School ID is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="School ID"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.schoolid && <HelperText type="error">{errors.schoolid.message}</HelperText>}
          </View>
        )}
      />
       <Controller
        control={control}
        name="name"
        defaultValue=""
        rules={{
          required: 'Name is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Name"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.name && <HelperText type="error">{errors.name.message}</HelperText>}
          </View>
        )}
      />
       <Controller
        control={control}
        name="Schoolzone"
        defaultValue=""
        rules={{
          required: 'School Zone is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="School Zone"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.schoolzone && <HelperText type="error">{errors.schoolzone.message}</HelperText>}
          </View>
        )}
      />
       <Controller
        control={control}
        name="address"
        defaultValue=""
        rules={{
          required: 'Address is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Address"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.address && <HelperText type="error">{errors.address.message}</HelperText>}
          </View>
        )}
      />
       <Controller
        control={control}
        name="longitude"
        defaultValue=""
        rules={{
          required: 'longitude is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Longitude"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.longitude && <HelperText type="error">{errors.longitude.message}</HelperText>}
          </View>
        )}
      />
       <Controller
        control={control}
        name="latitude"
        defaultValue=""
        rules={{
          required: 'Latitude is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Latitude"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.latitude && <HelperText type="error">{errors.latitude.message}</HelperText>}
          </View>
        )}
      />
       <Controller
        control={control}
        name="principalname"
        defaultValue=""
        rules={{
          required: 'Principal Name is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Principal Name"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.principalname && <HelperText type="error">{errors.principalname.message}</HelperText>}
          </View>
        )}
      />
       <Controller
        control={control}
        name="username"
        defaultValue=""
        rules={{
          required: 'Usernameis required',
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
     
       
      <Button title="Register" onPress={handleSubmit(onSubmit)}style={styles.button}  />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1,
     padding: 20,
    marginBottom:20,
  paddingBottom:20 },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 50,
  },
  button: {
    marginBottom: 15,
    
  },
});

export default School;
