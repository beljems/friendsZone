import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  button: {
    marginTop: '1.8rem',
    height: '3rem',
    backgroundColor: '$lighterRed',
    borderRadius: 100
  },
  text: {
    paddingTop: '.9rem',
    fontSize: '.9rem',
    fontWeight: 'bold',
    color: '$white',
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase'
  }
});

export default styles;