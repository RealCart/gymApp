import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Text } from 'react-native-elements';

interface DatePickerModalProps {
  value: Date;
  onChange: (selectedDate: Date) => void;
}

const DatePickerModal: React.FC<DatePickerModalProps> = ({ value, onChange }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (selectedDate: Date) => {
    onChange(selectedDate);
    setShowDatePicker(false); 
  };

  const showPicker = () => {
    setShowDatePicker(true);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  return (
    <View>
        <Text style={styles.ttl}>Дата рождения</Text>
        <TouchableOpacity onPress={showPicker}>
            <TextInput
            style={styles.input}
            placeholder="Дата рождения"
            value={formatDate(value)}
            editable={false}
            pointerEvents="none"
            />
        </TouchableOpacity>

        {showDatePicker && (
            <DatePicker
            modal
            open={showDatePicker}
            date={value}
            mode="date"
            onConfirm={handleDateChange} 
            onCancel={() => setShowDatePicker(false)}
            maximumDate={new Date()} 
            />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontWeight:"600",
    borderWidth: 1,
    borderColor: '#ccc',
    color:'black',
    backgroundColor:'#e8e8e8',
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
  },
  ttl: {
    color:'gray',
    fontSize: 14,
  },
});export default DatePickerModal;