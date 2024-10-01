import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, StyleSheet, Dimensions } from 'react-native';

const GENDER_OPTIONS = ['Мужской', 'Женский'];
const { width } = Dimensions.get('window');

interface GenderSelectInputProps {
  value: string;
  onSelect: (gender: string) => void;
}

const Dropdown: React.FC<GenderSelectInputProps> = ({ value, onSelect }) => {
  const [showGenderList, setShowGenderList] = useState(false); 

  const handleGenderSelect = (selectedGender: string) => {
    onSelect(selectedGender); 
    setShowGenderList(false); 
  };

  return (
    <View>
      <Text>Пол</Text>
      <TouchableOpacity onPress={() => setShowGenderList(prev => !prev)}>
        <TextInput
          style={styles.input}
          placeholder="Ваш пол"
          value={value}
          editable={false} 
          pointerEvents="none" 
        />
      </TouchableOpacity>

      {showGenderList && (
        <View style={styles.dropdownContainer}>
        <FlatList
          data={GENDER_OPTIONS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleGenderSelect(item)}>
              <Text style={styles.option}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color:'black',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor:'#e8e8e8',
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
  },
  dropdownContainer: {
    position: 'absolute', 
    top: 74, 
    zIndex: 2, 
    backgroundColor: '#fff',
    width: width - 40, 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  option: {
    padding: 15,
    backgroundColor: '#fff',
    fontWeight:'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Dropdown;