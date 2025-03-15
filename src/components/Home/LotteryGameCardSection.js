import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {lotteryGameCard} from '../../data/data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Home.style';

const LotteryGameCardSection = ({navigation}) => {
  const handleNavigationChange = route => {
    if (!route) return;
    navigation.navigate(route);
  };

  const GridItem = ({item}) => {
    return (
      <View style={styles.gridItem}>
        <Text style={styles.text}>{item.title}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.goButton}
          onPress={() => handleNavigationChange(item.route)}>
          <View style={styles.goButtonContent}>
            <Text style={styles.goButtonText}>Go</Text>
            <FontAwesome name="long-arrow-right" color="#A5A5A5" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={lotteryGameCard}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => (
        <View style={styles.row}>
          {item.map(gridItem => (
            <GridItem key={gridItem.id} item={gridItem} />
          ))}
        </View>
      )}
    />
  );
};

export default LotteryGameCardSection;
