import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {gamingCard} from '../../data/data';
import styles from './Home.style';

const GamingCardSection = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const GridItem = ({item}) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.gridItem}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <Text style={styles.sectionTitle}>Discover Games</Text>
      <FlatList
        data={gamingCard}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.row1}>
            {item.map(gridItem => (
              <GridItem key={gridItem.id} item={gridItem} />
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default GamingCardSection;
