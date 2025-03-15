import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  battingButton,
  battingTableButton,
  gameBattingData,
  pullGameBallsData,
  winGoSecData,
} from '../../data/data';
import Button from '../../common/Button';
import styles from './Wingo.style';
import GameHistoryTable from './GameHistoryTable';
import ChartTable from './ChartTable';
import MyHistoryTable from './MyHistoryTable';
import TimerClock from '../../assets/svg/timerClock.svg';
import BigSmallModal from '../../modal/BigSmallModal';
import BettingOptions from '../../container/BettingOptions';
import {fetchGameTime} from '../../redux/slices/timerSlice';
import {useDispatch, useSelector} from 'react-redux';
import {reset} from '../../redux/slices/counterSlice';

const WinGoGameSection = () => {
  const dispatch = useDispatch();

  // Get Redux state
  const {timeLeft, gameId} = useSelector(state => state.timer);

  const [selectedItem, setSelectedItem] = useState(winGoSecData[0].time);
  const [buttonTitle, setButtonTitle] = useState(null);
  const [activeTableBtn, setActiveTableBtn] = useState(
    battingTableButton[0].title,
  );
  const [openBigSmallModal, setOpenBigSmallModal] = useState(false);
  const [selectedBtnColor, setSelectedBtnColor] = useState(null);
  const [showAdvancedModal, setShowAdvancedModal] = useState(null);

  // Fetch live time every second
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchGameTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    const time = Number(timeLeft);

    if (time === 5) {
      setShowAdvancedModal(true);
    } else if (time === 1) {
      setShowAdvancedModal(false);
    }
  }, [timeLeft]);

  const getTableData = useCallback(() => {
    switch (activeTableBtn) {
      case 'Chart':
        return <ChartTable />;
      case 'My history':
        return <MyHistoryTable />;
      default:
        return <GameHistoryTable />;
    }
  }, [activeTableBtn]);

  const onClose = useCallback(() => {
    setOpenBigSmallModal(false);
    dispatch(reset());
  }, [dispatch]);

  return (
    <View>
      {/* Time Selection Buttons */}
      <View style={styles.walletFlex}>
        {winGoSecData.map(item => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.7}
            onPress={() => setSelectedItem(item.time)}
            style={[
              styles.itemContainer,
              selectedItem === item.time && styles.activeItem,
            ]}>
            <TimerClock />
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemTime}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.marginTop}>
        <View style={styles.gameContainer}>
          <View>
            <Text style={styles.winGoText}>Win Go {selectedItem}</Text>
            <View style={styles.ballsContainer}>
              {pullGameBallsData.map((item, index) => (
                <View
                  key={item.id}
                  style={[
                    styles.ballMargin,
                    index === 0 && styles.noPaddingLeft,
                  ]}>
                  {item.icon}
                </View>
              ))}
            </View>
          </View>
          <View style={styles.borderCenterLine} />
          <View style={styles.alignEnd}>
            <Text style={styles.whiteItemTime}>Time remaining</Text>
            <Text style={styles.timerText}>00:{timeLeft}</Text>
            <Text style={styles.whiteItemTime}>{gameId}</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.flexRowBetween}>
            {['Green', 'Violet', 'Red'].map((color, index) => (
              <Button
                key={index}
                title={color}
                customStyle={styles[`${color.toLowerCase()}Button`]}
              />
            ))}
          </View>

          <View style={styles.textBackground}>
            <Text>Hello</Text>
          </View>
          <BettingOptions
            options={gameBattingData}
            containerStyle={styles.bettingOptionsContainer}
          />
          <View style={styles.flexRowBetween}>
            {battingButton.map((item, index) => (
              <Button
                key={index}
                title={item.title}
                onPress={() => {
                  setOpenBigSmallModal(true);
                  setButtonTitle(item.title);
                  setSelectedBtnColor(item.color);
                }}
                customStyle={[styles.button, {backgroundColor: item.color}]}
              />
            ))}
          </View>
          {showAdvancedModal && (
            <View style={styles.overlay}>
              <View style={styles.centered}>
                <Text style={styles.modalText}>{timeLeft}</Text>
              </View>
            </View>
          )}
        </View>
      </View>

      <View style={styles.battingRow}>
        {battingTableButton.map((item, index) => (
          <Button
            key={index}
            onPress={() => setActiveTableBtn(item.title)}
            title={item.title}
            customStyle={[
              styles.tableBtn,
              activeTableBtn === item.title
                ? styles.activeTableButton
                : styles.inactiveTableButton,
            ]}
            textStyle={styles.battingText}
          />
        ))}
      </View>

      <View style={styles.tableMarginBottom}>{getTableData()}</View>

      <BigSmallModal
        isVisible={openBigSmallModal}
        onClose={onClose}
        buttonTitle={buttonTitle}
        selectedBtnColor={selectedBtnColor}
      />
    </View>
  );
};

export default WinGoGameSection;
