import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {chartTableData} from '../../data/data';
import styles from './Wingo.style';

const ChartTable = () => {
  const renderItem = ({item}) => {
    const periodNumber = parseInt(item.number);
    const numbersArray = Array.from({length: 10}, (_, i) => i);
    return (
      <View style={styles.row}>
        <Text style={[styles.cell]}>{item.period}</Text>
        <View style={styles.numberContainer}>
          {numbersArray.map(num => (
            <Text
              key={num}
              style={[
                styles.cell,
                periodNumber === num && styles.highlight,
                {
                  backgroundColor:
                    periodNumber === num
                      ? item.color
                      : styles.inactiveTableButton,
                },
              ]}>
              {num}
            </Text>
          ))}
          <Text style={styles.symbolText}>{item.winSymbol}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.header]}>
        <Text style={[styles.cell, styles.headerText]}>Period</Text>
        <Text style={[styles.cell, styles.headerText]}>Number</Text>
      </View>

      <FlatList
        data={chartTableData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ChartTable;
