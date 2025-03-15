import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo, useMemo} from 'react';
import CommonModal from '../common/Modal';
import {Fonts} from '../style/fonts';
import Button from '../common/Button';
import {battingValue, gameBattingData} from '../data/data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BettingOptions from '../container/BettingOptions';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../redux/slices/counterSlice';

const BigSmallModal = memo(
  ({isVisible, onClose, buttonTitle, selectedBtnColor}) => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);

    const gameBattingMemoData = useMemo(() => {
      return gameBattingData;
    }, []);

    return (
      <CommonModal
        isVisible={isVisible}
        modalContent={styles.modalContentStyle}
        onClose={onClose}>
        <View
          style={[styles.headerContainer, {backgroundColor: selectedBtnColor}]}>
          <Text style={styles.winGoText}>Win Go 30s</Text>
          <Text style={styles.selectTitle}>Select {buttonTitle}</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.balanceRow}>
            <Text style={styles.labelText}>Balance</Text>
            <View style={styles.balanceButtonsRow}>
              {battingValue.map((balance, index) => (
                <Button
                  key={index}
                  title={balance.number}
                  textStyle={styles.balanceButtonText}
                  customStyle={styles.balanceButton}
                />
              ))}
            </View>
          </View>
          <View style={styles.quantityRow}>
            <Text style={styles.labelText}>Quantity</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity onPress={() => dispatch(decrement())}>
                <AntDesign name="minuscircleo" size={20} color="white" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{count}</Text>
              <TouchableOpacity onPress={() => dispatch(increment())}>
                <AntDesign name="pluscircleo" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <BettingOptions
            containerStyle={styles.containerStyle}
            options={gameBattingMemoData}
          />
        </View>
        <View style={styles.buttonRow}>
          <Button
            title="Cancel"
            customStyle={styles.cancelButton}
            onPress={onClose}
          />
          <Button
            title="Submit"
            customStyle={[
              styles.submitButton,
              {backgroundColor: selectedBtnColor},
            ]}
          />
        </View>
      </CommonModal>
    );
  },
);

const styles = StyleSheet.create({
  modalContentStyle: {
    overflow: 'hidden',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  headerContainer: {
    alignItems: 'center',
  },
  winGoText: {
    fontSize: 16,
    fontFamily: Fonts.PoppinsMedium,
    color: 'white',
  },
  selectTitle: {
    fontSize: 12,
    fontFamily: Fonts.PoppinsMedium,
    color: 'white',
  },
  contentContainer: {
    backgroundColor: '#201D2B',
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 13,
    fontFamily: Fonts.PoppinsRegular,
    color: 'white',
  },
  balanceButtonsRow: {
    flexDirection: 'row',
  },
  balanceButtonText: {
    fontSize: 12,
    lineHeight: 18,
  },
  balanceButton: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginLeft: 15,
  },
  quantityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  quantityControls: {
    flexDirection: 'row',
  },
  quantityText: {
    fontSize: 15,
    fontFamily: Fonts.PoppinsRegular,
    color: 'white',
    paddingHorizontal: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  cancelButton: {
    width: '45%',
    borderRadius: 0,
  },
  submitButton: {
    flex: 1,
    borderRadius: 0,
  },
  containerStyle: {
    marginTop: 15,
  },
});

export default BigSmallModal;
