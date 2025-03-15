export const generateInitialId = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const initialCounter = '000000000'; // 🔹 Now counter starts from 000000000
  return `${year}${month}${day}${initialCounter}`;
};

export const incrementLastPart = oldId => {
  const fixedPart = oldId.slice(0, 8);
  let numericPart = parseInt(oldId.slice(8), 10) + 1;
  const newNumericPart = numericPart.toString().padStart(9, '0');
  return fixedPart + newNumericPart;
};

export const getColorDot = color => {
  const colorMap = {
    red: '🔴',
    green: '🟢',
    violet: '🟣',
  };

  return color
    .split(' / ')
    .map(clr => colorMap[clr] || '')
    .join(' ');
};

export const formatTime = seconds =>
  `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
