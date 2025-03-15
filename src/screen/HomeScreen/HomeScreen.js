import React from 'react';
import Layout from '../../common/Layout';
import GamingCardSection from '../../components/Home/GamingCardSection';
import LotteryGameCardSection from '../../components/Home/LotteryGameCardSection';

const HomeScreen = ({navigation}) => {
  return (
    <Layout statusBarStyle="light-content" translucent>
      <GamingCardSection />
      <LotteryGameCardSection navigation={navigation} />
    </Layout>
  );
};

export default HomeScreen;
