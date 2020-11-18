import React from 'react';
import {
  View, 
  Text,
  SafeAreaView, 
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import Menu from './../Menu';
import styles from './Page.css';

const Page = ({
  showHeader,
  showMenu,
  children,
  showFooter,
  scrollView
}) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <LinearGradient
        colors={['#3D3D3D', '#3D3D3D', '#000']}>
        <View style={styles.content}>
          <View style={styles.headerWrap}>
            <SafeAreaView>
              {showHeader === true && (<View>
                <Text style={styles.header}>FriendsZ<Icon name="heart" size={11} />ne</Text>
              </View>)}
              {showMenu === true && (<View>
                <Menu />
              </View>)}
            </SafeAreaView>
          </View>
          {scrollView ? (
            <ScrollView>
              <View style={[styles.inner, styles.innerPadding]}>{children}</View>
            </ScrollView>
          ) : (
            <View style={styles.inner}>{children}</View>
          )}
          {showFooter === true && (<View style={styles.footer}></View>)}
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

Page.defaultProps = {
  showFooter: true,
  showHeader: true,
};

Page.propTypes = {
  showFooter: PropTypes.bool,
  showHeader: PropTypes.bool,
  showMenu: PropTypes.bool,
  scrollView: PropTypes.bool,
};

export default Page;
