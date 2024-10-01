import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import DatePickerModal from './datepicker';
import Dropdown from './dropdown';
const UserInfoForm: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Контакты</Text>
        <Text style={styles.ttl}>Телефон</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="Телефон"
        />
        <Text style={styles.ttl}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Email"
        />
      </View>

      <View>
        <Text style={styles.label}>Личные данные</Text>
        <Text style={styles.ttl}>Имя</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Имя"
        />
        <Text style={styles.ttl}>Фамилия</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Фамилия"
        />

        <DatePickerModal value={birthDate} onChange={setBirthDate} />

        <Dropdown value={gender} onSelect={setGender}/>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputForm: {
    padding: 5,
  },
  label: {
    fontSize: 16,
    marginBottom:5,
  },
  ttl: {
    fontSize: 14,
  },
  section: {
    marginBottom:25,
  },
  input: {
    fontWeight:"600",
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor:'#e8e8e8',
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
  },
});

export default UserInfoForm;
