import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Animated,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {TextMoneyBold, TextNormalSemiBold} from 'common/Text/TextFont';
import Icons from 'common/Icons/Icons';
import Colors from 'theme/Colors';
import strings from 'localization/Localization';
import HorizontalRange from 'common/HorizontalRange/HorizontalRange';
import CustomButton from 'common/CustomButton/CustomButton';
import {
  BLOOD_SUGAR_MG,
  BLOOD_SUGAR_MOL,
  CODE_BLOOD_SUGAR,
  UNIT_MG_DL,
  convertDate,
  UNIT_MMOLL,
  widthDevice,
  convertDateParameter,
} from 'assets/constans';
import UnitSelector from 'common/UnitSelector/UnitSelector';
import ConclusionInput from './ConclusionInput';
import CustomHeader from './CustomHeader';
import {useDispatch, useSelector} from 'react-redux';
import {statusCreateParamSelector} from 'store/selectors';
import {
  createParameterAction,
  resetCreationParameter,
} from 'store/parameter/parameterAction';
import Status from 'common/Status/Status';
import {NAVIGATION_HOME} from 'navigation/routes';
import DateTimePicker from 'common/DateTImePicker/DateTimePicker';
import Ruler from '../../common/Ruler/Ruler';
const MIN_MG = 36;
const MIN_MOL = 2.0;
const BloodSugar = ({navigation, setWarningModal}) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [date, setDate] = useState(new Date());
  const [messure, setMessure] = useState(1);
  const [bloodSugar, setBloodSugar] = useState(MIN_MOL);
  const [timeMessure, setTimeMessure] = useState(1);
  const [conclusion, setConclusion] = useState(-1);
  const dispatch = useDispatch();
  const statusCreateParameter = useSelector(state =>
    statusCreateParamSelector(state),
  );
  useEffect(() => {
    if (bloodSugar) {
      messure === 2 && setInvalid(parseFloat(bloodSugar) < parseFloat(MIN_MG));
      messure === 1 && setInvalid(parseFloat(bloodSugar) < parseFloat(MIN_MOL));
    }
  }, [bloodSugar]);

  const renderTimerItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => setTimeMessure(index + 1)}
        style={[
          styles.wrapperTime,
          timeMessure === index + 1 && {
            backgroundColor: Colors.main,
          },
        ]}>
        <TextNormalSemiBold
          style={
            timeMessure === index + 1 && {
              color: Colors.whiteColor,
            }
          }>
          {item.name}
        </TextNormalSemiBold>
      </TouchableOpacity>
    );
  };
  const processInput = () => {
    if (messure === 2 && parseFloat(bloodSugar) < MIN_MG) {
      return;
    }
    if (messure === 1 && parseFloat(bloodSugar) < MIN_MOL) {
      return;
    }
    let result;
    const checkList = messure === 2 ? BLOOD_SUGAR_MG : BLOOD_SUGAR_MOL;
    checkList.map(item => {
      if (
        timeMessure === 1 &&
        item.type_1.min <= parseFloat(bloodSugar) &&
        parseFloat(bloodSugar) <= item.type_1.max
      ) {
        result = item;
      }
      if (
        timeMessure === 2 &&
        item.type_2.min <= parseFloat(bloodSugar) &&
        parseFloat(bloodSugar) <= item.type_2.max
      ) {
        result = item;
      }
      if (
        timeMessure === 3 &&
        item.type_3.min <= parseFloat(bloodSugar) &&
        parseFloat(bloodSugar) <= item.type_3.max
      ) {
        result = item;
      }
    });
    if (result) {
      setConclusion({
        content: result.key,
        color: result.type_1.color,
        status: result.status,
      });
    }
  };
  const saveParameter = noted => {
    const payload = {
      blood_glucose: {
        unit: conclusion.unit === 1 ? UNIT_MG_DL : UNIT_MMOLL,
        index: parseFloat(bloodSugar),
        eating_status: timeMessure,
      },
      noted,
      status: conclusion.status,
      date: convertDateParameter(date.toLocaleString('en-GB')) || '',
      parameters_monitor_code: CODE_BLOOD_SUGAR,
    };
    dispatch(createParameterAction(payload));
  };
  useEffect(() => {
    if (statusCreateParameter === Status.SUCCESS) {
      dispatch(resetCreationParameter());
      conclusion.status === 4
        ? setWarningModal(true)
        : navigation.navigate(NAVIGATION_HOME);
    }
  }, [statusCreateParameter]);
  useEffect(() => {
    if (conclusion !== -1) {
      conclusionTransition && animatedAction(conclusionTransition);
    }
  }, [conclusion]);
  const animatedAction = val => {
    Animated.timing(val, {
      duration: 600,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  const conclusionTransition = new Animated.Value(widthDevice);

  return (
    <View style={styles.container}>
      {conclusion === -1 && (
        <Animated.View style={{flex: 1}}>
          <CustomHeader
            conclusion={''}
            title={'Đuờng huyết'}
            navigation={navigation}
            showTextarea={false}
          />
          <Animated.View style={[styles.containerBloodSugar]}>
            <View style={{alignItems: 'center'}}>
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
                  {`${convertDate(date)} ${date
                    .toLocaleTimeString('vi-VN')
                    .substring(0, 5)}`}
                </TextNormalSemiBold>
              </TouchableOpacity>
              <TextMoneyBold style={styles.bloodSugarText}>
                {bloodSugar}
              </TextMoneyBold>
              <UnitSelector
                firstOption={'mmol/L'}
                secondOption={'mg/dL'}
                onPressSelector={val => {
                  setBloodSugar(val === 1 ? MIN_MOL : MIN_MG);
                  setMessure(val);
                }}
                isSelected={messure}
              />
            </View>
            {/* {loading ? (
              <ActivityIndicator
                style={{alignSelf: 'center', marginVertical: 20}}
                size={'large'}
                color={Colors.primary}
              />
            ) : (
              <HorizontalRange
                type={messure === 2 ? 'mg' : 'mol'}
                initValue={bloodSugar}
                setValue={setBloodSugar}
                max={messure === 1 ? 50 * 10 : 200 * 10}
              />
            )} */}
            <Ruler
              max={messure === 1 ? 50 : 240}
              step={0.1}
              fractionDigits={1}
              initialValue={messure === 1 ? MIN_MOL + 50 / 2 : MIN_MG + 240 / 2}
              onValueChange={number => setBloodSugar(number)}
            />
            <TextNormalSemiBold style={styles.textNoteSlider}>
              {messure === 2
                ? 'Đuờng huyết đơn vị mg/dL (36 ~ 240)'
                : 'Đuờng huyết đơn vị mmol/L (2.0 ~ 49.9)'}
            </TextNormalSemiBold>
            <View style={{paddingVertical: 15, alignItems: 'center'}}>
              <FlatList
                data={[{name: 'Nhịn ăn'}, {name: 'Sau ăn'}, {name: 'Truớc ăn'}]}
                contentContainerStyle={styles.wrapperTimerFlatlist}
                horizontal={true}
                keyExtractor={(_, id) => id.toString()}
                renderItem={renderTimerItem}
              />
              <TextNormalSemiBold style={styles.textTimeMessure}>
                {timeMessure === 1
                  ? '8 giờ hoặc hơn kể từ sau bữa ăn gần nhất'
                  : timeMessure === 2
                  ? '2 giờ sau ăn'
                  : 'Bất cứ khi nào'}
              </TextNormalSemiBold>
            </View>
          </Animated.View>
          <CustomButton
            onPress={() => processInput()}
            isDisabled={invalid}
            labelStyled={invalid && {color: Colors.whiteColor}}
            styled={{
              marginBottom: 10,
              backgroundColor: !invalid ? Colors.primary : Colors.gray.gray80,
            }}
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
            title={'Đuờng huyết'}
            resetConclusion={() => {
              setConclusion(-1);
            }}
            onSave={noted => saveParameter(noted)}
            date={date}
            value={bloodSugar}
            withTime={true}
            unit={messure === 2 ? 'mg/dL' : 'mmol/L'}
            type={timeMessure}
          />
        </Animated.View>
      )}
      <DateTimePicker
        isOpen={openDatePicker}
        maxDate={new Date()}
        onConfirm={v => {
          setDate(v);
          setOpenDatePicker(false);
        }}
        onClose={() => setOpenDatePicker(false)}
      />
    </View>
  );
};
export default BloodSugar;
