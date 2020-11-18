import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import Page from './../../components/Page';
import styles from './Home.css.js';

const Home = ({navigation}) => {
  return (
    <Page 
      showHeader={true}
      showMenu={true}
      showFooter={true}>
      <View style={styles.content}>
        <View style={styles.inner}>
          <Text>Test</Text>
        </View>
      </View>
    </Page>
  );
};

export default Home;
