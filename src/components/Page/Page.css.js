import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
  content: {
    height: '100%'
  },
  inner: {
    padding: '1rem',
    flex: 1,
  },
  innerPadding: {
    paddingBottom: '5rem'
  },
  headerWrap: {
    padding: '0.5rem',
    backgroundColor: '$lighterRed'
  },
  header: {
    textAlign: 'center',
    color: '$white',
    fontFamily: '$fontDancing',
    fontSize: '1.7rem',
    fontWeight: 'bold'
  },
  footer: {
    width: '100%',
    height: '2rem',
    backgroundColor: '$lighterRed',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100
  }
});

export default styles;