/* eslint-disable react/no-unstable-nested-components */
import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {gameHistoryData} from '../../data/data';
import {getColorDot} from '../../utils/helper';
import styles from './Wingo.style';

const renderItem = ({item}) => (
  <View style={styles.row}>
    <Text style={[styles.cell]}>{item.Period}</Text>
    <Text style={styles.cell}>{item.number}</Text>
    <Text style={styles.cell}>{item.BigSmall}</Text>
    <View style={[styles.cell, styles.colorCell]}>
      <Text style={styles.dotText}>{getColorDot(item.color)}</Text>
    </View>
  </View>
);

const GameHistoryTable = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={gameHistoryData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={[styles.row, styles.header]}>
            <Text style={[styles.cell, styles.headerText]}>Period</Text>
            <Text style={[styles.cell, styles.headerText]}>Number</Text>
            <Text style={[styles.cell, styles.headerText]}>Big Small</Text>
            <Text style={[styles.cell, styles.headerText]}>Color</Text>
          </View>
        )}
      />
    </View>
  );
};

export default GameHistoryTable;
