import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  content: {
    height: '120%',
    color: '$white',
    margin: '-1rem'
  },
  inner: {
    padding: '2rem',
    paddingHorizontal: '1rem'
  },
  nameWrap: {
    paddingBottom: '.5rem',
    marginBottom: '1.5rem',
    borderBottomWidth: 1,
    borderBottomColor: '$lightGray' 
  },
  name: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$white'
  },
  item: {
    flexDirection: 'row',
    marginBottom: '1rem',
    alignItems: 'center'
  },
  itemSettings: {
    
  },
  itemInner: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: '.5rem',
    width: '2rem',
    textAlign: 'center'
  },
  text: {
    color: '$white'
  },
  arrow: {
    marginLeft: 'auto'
  },
  settings: {
    marginTop: '1rem'
  },
});

export default styles;