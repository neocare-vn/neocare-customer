import React, {useEffect, useState} from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {TextMoneyBold, TextNormalSemiBold} from 'common/Text/TextFont';
import Icons from 'common/Icons/Icons';
import Colors from 'theme/Colors';
import strings from 'localization/Localization';
import CustomButton from 'common/CustomButton/CustomButton';
import UnitSelector from 'common/UnitSelector/UnitSelector';
import ConclusionInput from './ConclusionInput';
import {useDispatch, useSelector} from 'react-redux';
import CustomHeader from './CustomHeader';
import {statusCreateParamSelector} from 'store/selectors';
import {
  createParameterAction,
  resetCreationParameter,
} from 'store/parameter/parameterAction';
import {
  convertDate,
  CODE_WEIGHT,
  UNIT_KG,
  UNIT_LBS,
  widthDevice,
} from 'assets/constans';
import {NAVIGATION_HOME} from 'navigation/routes';
import Status from 'common/Status/Status';
import DateTimePicker from 'common/DateTImePicker/DateTimePicker';
import {asyncStorage} from 'store';
import {BMI} from 'assets/constans';
import Ruler from 'common/Ruler/Ruler';
import {TextSmallTwelve} from '../../common/Text/TextFont';
const Weight = ({navigation}) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [messure, setMessure] = useState(1);
  const [warning, setWarning] = useState('');
  const [weight, setWeight] = useState(0);
  const inputTransition = new Animated.Value(0);
  const conclusionTransition = new Animated.Value(widthDevice);
  const [conclusion, setConclusion] = useState(-1);
  const currentUser = React.useRef({id: -1});
  const dispatch = useDispatch();
  const statusCreateParameter = useSelector(state =>
    statusCreateParamSelector(state),
  );
  useEffect(() => {
    if (currentUser.current.id === -1) {
      checkUser();
    }
  }, []);
  const checkUser = async () => {
    const user = await asyncStorage.getUser();
    currentUser.current = user ? user : {id: -1};
  };

  const processInput = () => {
    if (currentUser.current.id === -1 || !currentUser.current?.height) {
      setWarning('Chiều cao không hợp lệ, vui lòng nhập trong hồ sơ');
      return;
    }
    const height =
      parseFloat(currentUser.current?.height / 100) *
      parseFloat(currentUser.current?.height / 100);

    console.log('height:::', height);
    const bmiIndex = Math.floor(parseFloat(weight / height));
    let result;
    BMI.map(item => {
      if (bmiIndex > item.min && bmiIndex < item.max) {
        result = item;
      }
    });
    if (result) {
      setConclusion({
        content: result.key,
        icon: 'weight',
        color: result.color,
        type: 'FontAwesome5',
      });
    }
  };
  useEffect(() => {
    if (conclusion !== -1) {
      conclusionTransition && animatedAction(conclusionTransition);
    }
    inputTransition && animatedAction(inputTransition);
  }, [conclusion]);
  const animatedAction = val => {
    Animated.timing(val, {
      duration: 600,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  const saveParameter = () => {
    const payload = {
      weight: {
        unit: messure === 1 ? UNIT_KG : UNIT_LBS,
        index: parseFloat(weight),
      },
      parameters_monitor_code: CODE_WEIGHT,
    };
    dispatch(createParameterAction(payload));
  };
  useEffect(() => {
    if (statusCreateParameter === Status.SUCCESS) {
      dispatch(resetCreationParameter());
      navigation && navigation.navigate(NAVIGATION_HOME);
    }
  }, [statusCreateParameter]);

  return (
    <View style={styles.container}>
      {conclusion === -1 && (
        <Animated.View
          style={{flex: 1, transform: [{translateX: inputTransition}]}}>
          <CustomHeader
            conclusion={{
              icon: 'weight',
              color: Colors.greenColor,
              type: 'FontAwesome5',
            }}
            title={'Cân nặng'}
            navigation={navigation}
            showTextarea={false}
          />
          <Animated.View style={[styles.containerBloodSugar]}>
            <View
              style={{alignItems: 'center', marginTop: 30, marginBottom: 20}}>
              <TouchableOpacity
                onPress={() => {
                  setOpenDatePicker(true);
                }}
                style={styles.wrapperDateAxit}>
                <Icons
                  type={'Fontisto'}
                  name={'calendar'}
                  size={18}
                  color={Colors.gray.gray40}
                />
                <TextNormalSemiBold style={styles.textTodayAxit}>
                  {`${convertDate(date, true)}`}
                </TextNormalSemiBold>
              </TouchableOpacity>
              <TextMoneyBold style={styles.bloodSugarText}>
                {parseFloat(weight)}
              </TextMoneyBold>
              <UnitSelector
                firstOption={'kg'}
                secondOption={'lbs'}
                onPressSelector={() => setMessure(1)}
                isSelected={messure}
              />
            </View>
            <Ruler
              max={150}
              step={0.1}
              fractionDigits={1}
              initialValue={60}
              onValueChange={number => setWeight(number)}
            />
            {warning.length > 0 && (
              <TextSmallTwelve
                style={{
                  textAlign: 'center',
                  marginTop: 50,
                  color: Colors.very_high,
                }}>
                {warning}
              </TextSmallTwelve>
            )}
          </Animated.View>

          <CustomButton
            onPress={() => processInput()}
            styled={[{marginBottom: 20}]}
            label={strings.common.continue}
          />
        </Animated.View>
      )}

      {conclusion && conclusion !== -1 && (
        <Animated.View
          style={[
            {
              flex: 1,
              transform: [{translateX: conclusionTransition}],
            },
          ]}>
          <ConclusionInput
            navigation={navigation}
            conclusion={conclusion}
            title={'Cân nặng'}
            resetConclusion={() => {
              setConclusion(-1);
            }}
            onSave={saveParameter}
            value={weight}
            date={date}
            unit={messure === 2 ? 'lbs' : 'kg'}
            type={5}
          />
        </Animated.View>
      )}
      <DateTimePicker
        isOpen={openDatePicker}
        maxDate={new Date()}
        type={'date'}
        onConfirm={v => {
          setDate(v);
          setOpenDatePicker(false);
        }}
        onClose={() => setOpenDatePicker(false)}
      />
    </View>
  );
};
export default Weight;
