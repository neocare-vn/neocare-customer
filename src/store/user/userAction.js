import {NEOCARE} from 'store/actionsTypes';

export const getDeleteAccount = () => ({
  type: NEOCARE.GET_DELETE_ACCOUNT_REQUEST,
});
export const deleteAccountReset = () => ({
  type: NEOCARE.GET_DELETE_ACCOUNT_RESET,
});
// export const confirmDeleteAccountOtp = otp => ({
//   type: NEOCARE.CONFIRM_DELETE_OTP_REQUEST,
//   payload: {
//     otp,
//   },
// });
// export const resetDeleteOtp = () => ({
//   type: NEOCARE.CONFIRM_DELETE_OTP_RESET,
// });
export const updateUserInformation = payload => ({
  type: NEOCARE.UPDATE_USER_INFO_REQUEST,
  payload,
});
export const resetUpdateUser = () => ({
  type: NEOCARE.UPDATE_USER_INFO_RESET,
});
export const registerUserAction = payload => ({
  type: NEOCARE.REGISTER_USER_REQUEST,
  payload,
});
export const resetRegisterUser = () => ({
  type: NEOCARE.REGISTER_USER_RESET,
});
// export const setLanguageAction = payload => ({
//   type: NEOCARE.SET_LANGUAGE_REQUEST,
//   payload,
// });
export const getUserInfoAction = () => ({
  type: NEOCARE.GET_USER_INFO_REQUEST,
});
export const resetGetUserInfo = () => ({
  type: NEOCARE.GET_USER_INFO_RESET,
});
