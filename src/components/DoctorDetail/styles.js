import {heightDevice, widthDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  wrapperHeaderTitle: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  phoneIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    borderRadius: 21,
    padding: 6,
    backgroundColor: Colors.blue.blue30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeModal: {
    backgroundColor: Colors.whiteColor,
    position: 'absolute',
    top: -heightDevice / 2 + 50,
    right: -widthDevice / 2 + 15,
    width: widthDevice / 2 + 50,
    shadowColor: '#000',
    borderRadius: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  removeButton: {
    paddingHorizontal: 10,
    height: 35,
    borderRadius: 20,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttonBackground,
  },
  cancelRemoveButton: {
    paddingHorizontal: 10,
    // paddingVertical: 10,
    height: 35,
    borderRadius: 20,
    width: 120,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2544BD',
  },
  wrapperHeaderFlatlis: {
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  wrapperRemoveAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthDevice - 80,
    paddingVertical: 5,
    paddingTop: 10,
  },
  confirmRemoveModal: {
    backgroundColor: Colors.backgroundColor,
    width: widthDevice - 50,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    // height: heightDevice / 4,
    borderRadius: 20,
  },
  moreIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    borderRadius: 20,
    padding: 5,
    zIndex: 100,
    backgroundColor: Colors.backgroundColor,
  },
  wrapperDepartmentLabel: {
    height: 20,
    width: '30%',
    // paddingHorizontal: 10,
    backgroundColor: Colors.pink.pink90,
    borderRadius: 8,
    textAlign: 'center',
    color: Colors.red.red40,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 8,
  },
  textHeader: {color: Colors.blue.blue30, paddingLeft: 5, marginBottom: 5},
  scrollContainer: {flex: 1, backgroundColor: Colors.whiteColor},
  imageDoctor: {
    width: widthDevice,
    height: (widthDevice * 5) / 6 - 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  wrapeprCardInfo: {
    paddingBottom: 5,
    backgroundColor: 'white',
    width: widthDevice - 30,
    marginHorizontal: 15,
    position: 'absolute',
    // opacity: 0.8,
    borderRadius: 21,
    paddingHorizontal: 20,
    alignSelf: 'center',
    top: (widthDevice * 5) / 6 - 110,
  },
  wrapperCardPackage: {
    backgroundColor: Colors.blue.blue90,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  decoration: {
    position: 'absolute',
    top: 20,
    backgroundColor: Colors.blue.blue80,
    borderRadius: 50,
    right: -40,
    height: 100,
    width: 100,
  },
  decorationActived: {
    position: 'absolute',
    top: 0,
    backgroundColor: Colors.pink.pink80,
    borderRadius: 40,
    right: 30,
    padding: 40,
  },
  wrapperAnimationHeader: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    elevation: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  wrapperActivePackage: {
    backgroundColor: Colors.pink.pink90,
    padding: 10,
    borderRadius: 20,
    zIndex: 100,
    marginTop: 10,
  },

  wrapperFooterCard: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#94A6FF',
  },
  buyPackageButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 5,
    backgroundColor: '#526DE6',
    borderRadius: 30,
  },
  inforCard: {paddingVertical: 10},

  closeIcon: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    zIndex: 999,
  },
  wrapperDoctorInfo: {
    paddingHorizontal: 10,
    // backgroundColor: 'green',
  },
  textDoctorName: {marginBottom: 5},
  textDoctorDepartment: {
    color: Colors.textGrayColor,
  },
  wrapperAddress: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  toggleIcon: {
    position: 'absolute',
    padding: 5,
    borderRadius: 15,
    // borderWidth: 1,
    // backgroundColor: 'red',
    bottom: 0,
    zIndex: 999,
    right: 0,
  },
  wrapperDescription: {
    paddingVertical: 10,
    borderTopColor: Colors.gray.gray95,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  wrapperDoctorContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: Colors.gray.gray95,
    borderRadius: 10,
  },
});

export default styles;
