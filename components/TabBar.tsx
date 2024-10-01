import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  const tabs = ['Данные', 'Тренировки', 'Расписание', 'Отчеты'];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab} onPress={() => onTabChange(tab)} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tab: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTab: {
    color: 'orange',
    fontWeight: 'bold',
  },
});

export default TabBar;