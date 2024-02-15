import {React, useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Platform,
  TextInput,
  Pressable,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {
  TextMoneyBold,
  TextNormal,
  TextSemiBold,
} from '../../common/Text/TextFont';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../../theme/Colors';
import strings from '../../localization/Localization';
import MyModal from '../../common/MyModal/MyModal';
import {heightDevice, widthDevice} from '../../assets/constans';
import {NAVIGATION_PROFILE_HEALTH} from '../../navigation/routes';

const Profile = ({navigation}) => {
  // console.log('PROFILE SCREEN ::::', navigation);
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('Nam');
  const [modal, setModal] = useState(-1);
  const refBirthday = useRef({isChanged: false, val: -1});
  const handleSubmitInfo = () => {
    navigation.navigate(NAVIGATION_PROFILE_HEALTH);
  };
  const onChangeDate = (e, v) => {
    const {timestamp} = e.nativeEvent;
    console.log('TIME STAMP:::', timestamp);
    if (e.type === 'set') {
      const tempRef = {
        val: timestamp,
        isChanged: true,
      };
      refBirthday.current = tempRef;
      setBirthday(
        new Date(refBirthday.current.val)
          .toLocaleDateString('en-GB')
          .replaceAll('/', '-'),
      );
    }
    if (Platform.OS === 'android') {
      setModal(-1);
    }
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <Pressable style={styles.safeView} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.wrapperTitle}>
            <TextMoneyBold style={{fontSize: 24}}>
              {'Thông tin cơ bản'}
            </TextMoneyBold>
          </View>
          <View style={styles.wrapperSection}>
            <TextNormal style={{fontSize: 15}}>Họ tên:</TextNormal>
            <TextInput
              style={styles.textInput}
              placeholder={'Nhập họ và tên của bạn'}
              returnKeyType={'done'}
              placeholderTextColor={Colors.textGrayColor}
              onSubmitEditing={Keyboard.dismiss}
              value={name}
              onChangeText={setName}
              underlineColorAndroid="transparent"
            />
            <TextNormal style={{color: Colors.red, fontStyle: 'italic'}}>
              {invalidName || 'Tên không đuợc có ký tự đặc biệt'}
            </TextNormal>
          </View>

          <View style={styles.wrapperSection}>
            <TextNormal>Ngày sinh:</TextNormal>
            <TouchableOpacity
              style={styles.birthSection}
              onPress={() => setModal(1)}>
              <TextNormal
                style={{
                  paddingLeft: 10,
                  color: !birthday ? Colors.textGrayColor : 'black',
                }}>
                {!birthday ? 'Nhập họ và tên của bạn' : birthday}
              </TextNormal>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperSection}>
            <TextNormal>Giới tính:</TextNormal>
            <TouchableOpacity
              style={styles.birthSection}
              onPress={() => setModal(2)}>
              <TextNormal
                style={{
                  paddingLeft: 10,
                  color: !gender ? Colors.textGrayColor : 'black',
                }}>
                {!gender ? 'Chọn giới tính của bạn' : gender}
              </TextNormal>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              onPress={handleSubmitInfo}
              style={styles.btnContinue}>
              <TextNormal style={styles.textButton}>
                {strings.common.continue}
              </TextNormal>
            </TouchableOpacity>
          </View>
        </View>
        {Platform.OS === 'android' && modal === 1 && (
          <DateTimePicker
            value={new Date()}
            mode={'date'}
            display={Platform.OS === 'android' ? 'default' : 'spinner'}
            onChange={onChangeDate}
            textColor="black"
            // style={styles.datePicker}
          />
        )}
        <MyModal visible={modal === 2} onPressOutSide={() => setModal(-1)}>
          <View style={styles.modalView}>
            <View style={{height: heightDevice / 3}}>
              <View style={styles.wrapperContentModal}>
                <TextSemiBold style={styles.textTitleModal}>
                  Giới tính
                </TextSemiBold>
                <View style={styles.wrapperContentGender}>
                  <TouchableOpacity
                    onPress={() => setGender('Nam')}
                    style={[
                      styles.wrapperItemGender,
                      gender === 'Nam' && styles.activeGenderMale,
                    ]}>
                    <TextNormal>Nam</TextNormal>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setGender('Nữ')}
                    style={[
                      styles.wrapperItemGender,
                      gender !== 'Nam' && styles.activeGenderFemale,
                    ]}>
                    <TextNormal>Nữ</TextNormal>
                  </TouchableOpacity>
                </View>
                <View style={styles.safeView}>
                  <TouchableOpacity style={styles.btnSelectGender}>
                    <TextNormal style={styles.textButton}>
                      {strings.common.save}
                    </TextNormal>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </MyModal>
      </Pressable>
    </SafeAreaView>
  );
};

export default Profile;
