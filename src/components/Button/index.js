import React from 'react';
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({
  text,
  onPress
}) => {
  return (
    <View>
      <TouchableOpacity 
        onPress={onPress}
        style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {
  onPress: () => {},
  text: 'Submit'
};

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
