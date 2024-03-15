import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icons from '../Icons/Icons';
import {TextNormal, TextNormalSemiBold, TextSemiBold} from '../Text/TextFont';
import {widthDevice} from '../../assets/constans';
import Colors from '../../theme/Colors';

const UnitSelector = ({
  firstOption,
  secondOption,
  onPressSelector,
  styledWrapper,
  styledOption,
  isSelected,
}) => {
  // const [value, setValue] = useState(false);
  return (
    <View style={[styledWrapper, styles.typeMessureSelector]}>
      <TouchableOpacity
        onPress={() => onPressSelector(1)}
        style={[
          styledOption ? styledOption : styles.messureButton,
          isSelected === 1 && {backgroundColor: Colors.gray.gray40},
        ]}>
        <TextNormalSemiBold style={isSelected === 1 && styles.activeText}>
          {firstOption}
        </TextNormalSemiBold>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressSelector(2)}
        style={[
          styledOption ? styledOption : styles.messureButton,
          isSelected === 2 && {backgroundColor: Colors.gray.gray40},
        ]}>
        <TextNormalSemiBold style={isSelected === 2 && styles.activeText}>
          {secondOption}
        </TextNormalSemiBold>
      </TouchableOpacity>
    </View>
  );
};

export default UnitSelector;

const styles = StyleSheet.create({
  activeText: {color: Colors.whiteColor, fontWeight: 'bold', fontSize: 16},
  typeMessureSelector: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    width: widthDevice * 0.6,
    // flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: Colors.whiteColor,
    borderRadius: 30,
  },
  messureButton: {
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '50%',
  },
});
