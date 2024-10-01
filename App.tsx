import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileHeader from './components/ProfileHeader';
import TabBar from './components/TabBar';
import UserInfoForm from './components/UserInfoForm';
import SaveButton from './components/SaveButton';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Данные');

  const handleSave = () => {
    console.log('Data saved');
  };

  return (
    <View style={styles.container}>
      <ProfileHeader name="Алина Алиева" avatar="https://example.com/avatar.jpg" />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'Данные' && <UserInfoForm />}
      <SaveButton onSave={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default App;