import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  content: {
    height: '95%',
    paddingHorizontal: '1rem',
    color: '$white'
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: '1.3rem',
    color: '$white',
    textAlign: 'center'
  },
  logo: {
    fontFamily: '$fontDancing',
    fontSize: '3rem',
    color: '$white',
    textAlign: 'center'
  },
  heading: {
    marginTop: '3rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '$white'
  },
  desc: {
    fontSize: '1rem',
    color: '$white'
  },
  form: {
    marginTop: '2rem'
  },
  inputGroup: () => ({
    ...EStyleSheet.value('$inputGroup'),
    position: 'relative'
  }),
  input: {
    paddingLeft: '2rem'
  },
  icon: {
    position: 'absolute',
    top: '55%',
    left: '.6rem',
    zIndex: 1
  },
  buttonWrap: {
    width: '60%',
    alignSelf: 'center'
  },
  forgotLink: {
    marginLeft: 'auto'
  },
  forgotText: {
    color: '$lighterRed'
  },
  create: {
    marginTop: '2rem',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  createText: {
    color: '$white',
  },
  createLink: {
    marginLeft: '.2rem',
    borderBottomWidth: 1,
    borderBottomColor: '$white'
  },
  createLinkText: {
    color: '$white',
  },
});

export default styles;