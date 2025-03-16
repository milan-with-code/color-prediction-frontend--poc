import {View, Text, FlatList} from 'react-native';
import React, {useState, useMemo} from 'react';
import {chartTableData, gameHistoryData} from '../../data/data';
import styles from './Wingo.style';
import {getColorDot} from '../../utils/helper';
import {ButtonIcon} from '../../common/ButtonIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PaginationComponent = ({page, totalPages, onNext, onPrevious}) => (
  <View style={styles.paginationContainer}>
    <ButtonIcon
      IconName={MaterialIcons}
      iconName="navigate-before"
      size={32}
      onPress={onPrevious}
      disabled={page === 1}
      btnStyle={[styles.paginationButton, page === 1 && styles.disabledButton]}
    />
    <Text style={styles.pageText}>
      {page} / {totalPages}
    </Text>
    <ButtonIcon
      IconName={MaterialIcons}
      iconName="navigate-next"
      size={32}
      onPress={onNext}
      disabled={page === totalPages}
      btnStyle={[
        styles.paginationButton,
        page === totalPages && styles.disabledButton,
      ]}
    />
  </View>
);

const TableContainer = ({activeTable}) => {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const data = useMemo(() => {
    if (activeTable === 'Chart') return chartTableData;
    if (activeTable === 'My history') return [];
    return gameHistoryData;
  }, [activeTable]);

  const totalPages = Math.ceil(data.length / pageSize);
  const paginatedData = useMemo(
    () => data.slice((page - 1) * pageSize, page * pageSize),
    [page, data],
  );

  const nextPage = () => page < totalPages && setPage(prev => prev + 1);
  const previousPage = () => page > 1 && setPage(prev => prev - 1);

  return (
    <View>
      {activeTable === 'Chart' && <ChartTable data={paginatedData} />}
      {activeTable === 'My history' && <MyHistoryTable />}
      {activeTable !== 'Chart' && activeTable !== 'My history' && (
        <GameHistoryTable data={paginatedData} />
      )}

      {totalPages > 1 && (
        <PaginationComponent
          page={page}
          totalPages={totalPages}
          onNext={nextPage}
          onPrevious={previousPage}
        />
      )}
    </View>
  );
};

const ChartTable = ({data}) => (
  <View style={styles.container}>
    <View style={[styles.row, styles.header]}>
      <Text style={[styles.cell, styles.headerText]}>Period</Text>
      <Text style={[styles.cell, styles.headerText]}>Number</Text>
    </View>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        const periodNumber = parseInt(item.number);
        return (
          <View style={styles.row}>
            <Text style={[styles.cell]}>{item.period}</Text>
            <View style={styles.numberContainer}>
              {Array.from({length: 10}, (_, i) => (
                <Text
                  key={i}
                  style={[
                    styles.cell,
                    periodNumber === i && styles.highlight,
                    {
                      backgroundColor:
                        periodNumber === i
                          ? item.color
                          : styles.inactiveTableButton,
                    },
                  ]}>
                  {i}
                </Text>
              ))}
              <Text style={styles.symbolText}>{item.winSymbol}</Text>
            </View>
          </View>
        );
      }}
    />
  </View>
);

const GameHistoryTable = ({data}) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.row}>
          <Text style={[styles.cell]}>{item.Period}</Text>
          <Text style={styles.cell}>{item.number}</Text>
          <Text style={styles.cell}>{item.BigSmall}</Text>
          <View style={[styles.cell, styles.colorCell]}>
            <Text style={styles.dotText}>{getColorDot(item.color)}</Text>
          </View>
        </View>
      )}
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

const MyHistoryTable = () => (
  <View>
    <Text>MyHistoryTable</Text>
  </View>
);

export default TableContainer;
