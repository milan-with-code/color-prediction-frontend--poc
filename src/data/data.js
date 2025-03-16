import Entypo from 'react-native-vector-icons/Entypo';
import BallOne from '../assets/svg/BallOne.svg';
import BallTwo from '../assets/svg/BallTwo.svg';
import BallThree from '../assets/svg/BallThree.svg';
import BallFour from '../assets/svg/BallFour.svg';
import BallFive from '../assets/svg/BallFive.svg';

export const balanceCard = [
  {
    id: 1,
    text: 'Wallet',
    icon: <Entypo name="wallet" size={35} color="black" />,
    route: 'WalletScreen',
  },
  {
    id: 2,
    text: 'Deposit',
    icon: <Entypo name="wallet" size={35} color="black" />,
    route: 'Deposit',
  },
  {
    id: 3,
    text: 'Withdraw',
    icon: <Entypo name="wallet" size={35} color="black" />,
    route: 'Withdraw',
  },
];

export const gamingCard = [
  [
    {id: '1', title: 'Popular'},
    {id: '2', title: 'Lottery'},
  ],
  [
    {id: '3', title: 'Casino'},
    {id: '4', title: 'Slots'},
    {id: '5', title: 'Sports'},
  ],
  [
    {id: '6', title: 'Rummy'},
    {id: '7', title: 'Fishing'},
    {id: '8', title: 'Originals'},
  ],
];

export const lotteryGameCard = [
  [
    {id: '1', title: 'Win Go', route: 'WinGo'},
    {id: '2', title: 'K3'},
  ],
  [
    {id: '3', title: '5D'},
    {id: '4', title: 'Trx Win Go'},
  ],
];

export const winGoSecData = [
  {
    id: 1,
    title: 'Win Go',
    time: '30s',
  },
  {
    id: 2,
    title: 'Win Go',
    time: '1Min',
  },
  {
    id: 3,
    title: 'Win Go',
    time: '3Min',
  },
  {
    id: 4,
    title: 'Win Go',
    time: '5Min',
  },
];

export const pullGameBallsData = [
  {
    id: 1,
    icon: <BallOne />,
  },
  {
    id: 2,
    icon: <BallTwo />,
  },
  {
    id: 3,
    icon: <BallThree />,
  },
  {
    id: 4,
    icon: <BallFour />,
  },
  {
    id: 5,
    icon: <BallFive />,
  },
];

export const gameBattingData = [
  {
    id: 1,
    title: 'X1',
  },
  {
    id: 2,
    title: 'X5',
  },
  {
    id: 3,
    title: 'X10',
  },
  {
    id: 4,
    title: 'X20',
  },
  {
    id: 5,
    title: 'X50',
  },
  {
    id: 6,
    title: 'X100',
  },
];

export const battingButton = [
  {
    id: 1,
    title: 'Big',
    color: '#DD9138',
  },
  {
    id: 2,
    title: 'Small',
    color: '#5088D3',
  },
];

export const battingTableButton = [
  {
    id: 1,
    title: 'Game history',
  },
  {
    id: 2,
    title: 'Chart',
  },
  {
    id: 3,
    title: 'My history',
  },
];

export const gameHistoryData = [
  ...Array.from({length: 20}, (_, i) => ({
    id: (i + 1).toString(),
    Period: `20250308100052${198 + i}`,
    number: Math.floor(Math.random() * 40),
    BigSmall: Math.random() > 0.5 ? 'Big' : 'Small',
    color: ['red', 'green', 'violet', 'red / violet', 'green / violet'][
      Math.floor(Math.random() * 5)
    ],
  })),
];

export const chartTableData = [
  ...Array.from({length: 20}, (_, i) => ({
    id: (i + 1).toString(),
    period: `20250308100052${314 + i}`,
    number: Math.floor(Math.random() * 10).toString(),
    winSymbol: Math.random() > 0.5 ? 'B' : 'S',
    color: ['red', 'green', 'violet'][Math.floor(Math.random() * 3)],
  })),
];

export const battingValue = [
  {
    id: 1,
    number: 1,
  },
  {
    id: 2,
    number: 10,
  },
  {
    id: 3,
    number: 100,
  },
  {
    id: 4,
    number: 1000,
  },
];
