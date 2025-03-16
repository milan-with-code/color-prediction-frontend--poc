import {TouchableOpacity} from 'react-native';

export const ButtonIcon = ({
  iconName,
  onPress,
  disabled,
  btnStyle,
  iconStyle,
  IconName,
  iconColor = 'white',
  size = 24,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={btnStyle}>
      <IconName
        name={iconName}
        size={size}
        style={iconStyle}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};
