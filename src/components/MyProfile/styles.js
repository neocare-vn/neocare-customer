import {heightDevice, widthDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  closeButton: {
    backgroundColor: Colors.gray.gray90,
    alignSelf: 'flex-end',
    borderRadius: 4,
    position: 'absolute',
    zIndex: 100,
    top: 5,
    right: 15,
  },
  phoneText: {color: Colors.gray.gray60, fontSize: 14, fontWeight: 'bold'},
  inputPhone: {
    paddingHorizontal: 15,
    borderRadius: 16,
    backgroundColor: 'whitesmoke',
    color: 'black',
    marginTop: 5,
    justifyContent: 'center',
    height: 48,
    borderWidth: 1.5,
    borderColor: Colors.gray.gray90,
  },

  container: {
    paddingHorizontal: 15,
    flex: 1,
    paddingVertical: 10,
    backgroundColor: Colors.backgroundColor,
  },
  wrapperTitle: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    // backgroundColor: 'red',
  },
  textInput: {
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 16,
    height: 48,
    paddingHorizontal: 15,
    color: 'black',
    borderWidth: 1.5,
    borderColor: Colors.gray.gray90,
  },
  wrapperSection: {
    paddingVertical: 10,
    // paddingHorizontal: 15,
  },
  birthSection: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    marginTop: 5,
    height: 50,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: Colors.gray.gray90,
  },
  btnContinue: {
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 16,
    width: widthDevice - 30,
  },
  wrapperButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  modalView: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -heightDevice / 2.3,
    left: -widthDevice / 2 + 10,
    paddingVertical: 10,
    width: widthDevice - 20,
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textTitleModal: {textAlign: 'center', fontSize: 24, fontWeight: 'bold'},
  wrapperContentModal: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  titleMyProfile: {alignSelf: 'center', paddingBottom: 20, paddingTop: 5},
  titleText: {paddingLeft: 15, color: Colors.gray.gray40},
  wrapperHeightSelector: {
    padding: 15,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconEdit: {position: 'absolute', bottom: -2, right: 0},
  avatar: {height: 80, width: 82},
  wrapperAvatar: {
    padding: 5,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 40,
    backgroundColor: Colors.gray.gray90,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderStyle: 'solid',
  },
  backBtn: {position: 'absolute', top: 15, left: 15},
  wrapperLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  buttonIncrement: {borderRadius: 20, backgroundColor: 'black'},
  wrapperItemGender: {
    width: widthDevice / 2 - 40,
    // paddingVertical: 10,
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  avatarIcon: {position: 'absolute', top: -25, zIndex: 100, elevation: 10},
  wrapperContentGender: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    alignItems: 'center',

    // backgroundColor: 'red',
  },
  activeGenderMale: {
    backgroundColor: '#DDE1FF',
    borderWidth: 1,
    borderColor: 'blue',
  },
  activeGenderFemale: {
    backgroundColor: '#FFD9E0',
    borderWidth: 1,
    borderColor: 'red',
  },
  btnSelectGender: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: Colors.primary,
    width: '90%',
  },
});

export default styles;
