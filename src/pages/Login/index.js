import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Page from './../../components/Page';
import InputField from './../../components/InputField';
import Button from './../../components/Button';
import styles from './Login.css';

const Login = ({navigation}) => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e, value) => {
    setValues(prevState => ({
      ...prevState,
      [e]: value
    }));
  } 

  const handleSubmit = () => {
    console.log(values);

    navigation.navigate('Home');
  }

  return (
    <Page 
      showHeader={false}
      showFooter={true}>
      <View style={styles.content}>
        <View style={styles.inner}>
          <View>
          <Text style={styles.welcome}>Welcome to</Text>
            <Text style={styles.logo}>FriendsZ<Icon name="heart" size={18} />ne</Text>
          </View>
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.desc}>Please sign in to continue.</Text>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.icon}><Icon name="user" size={18} color="#fff" /></Text>
              <InputField 
                label={'Username'}
                style={styles.input}
                value={values.username}
                onChange={(e) => handleChange('username', e)} />
            </View>
            <View style={styles.inputGroup}>
               <Text style={styles.icon}><Icon name="key" size={18} color="#fff" /></Text>
              <InputField 
                type={'password'}
                label={'Password'}
                style={styles.input}
                value={values.password}
                onChange={(e) => handleChange('password', e)} />
            </View>
            <TouchableOpacity style={styles.forgotLink}>
              <Text 
                onPress={() => navigation.navigate('ForgotPassword')}
                style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrap}>
            <Button 
              text={'Login'}
              onPress={() => handleSubmit()} />
          </View>
          
          <View style={styles.create}>
            <Text style={styles.createText}>Don't have an account yet?</Text> 
            <TouchableOpacity 
              onPress={() => navigation.push('Register')}
              style={styles.createLink}>
              <Text style={styles.createLinkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Login;
