import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({ 
  $red: '#f00',
  $gray: '#505250',
  $lightGray: '#d6d6d6',
  $lighterRed: '#d95965',
  $white: '#fff',
  $dark: '#2b2b2b',
  $black: '#000',
  $skyblue: '#11b9c2',

  $fontDancing: 'DancingScript-Regular',

  $inputGroup: {
    marginBottom: '1rem'  
  },
  $input: {
    paddingHorizontal: '1rem',
    height: '3rem',
    backgroundColor: '$dark',
    color: '$white',
    borderRadius: 5,
    borderColor: '$gray',
    borderWidth: 1
  }
});