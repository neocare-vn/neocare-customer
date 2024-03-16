import Status from 'common/Status/Status';
import {NEOCARE} from 'store/actionsTypes';

const initializeState = {
  // CREATION PARAMETER
  statusCreateParameter: Status.DEFAULT,

  // LISTING PARAMETER
  statusListParameter: Status.DEFAULT,
  listParameter: [],
};

export default (state = initializeState, {type, payload}) => {
  switch (type) {
    case NEOCARE.CREATE_PARAMETER_REQUEST:
      return {
        ...state,
        statusCreateParameter: Status.LOADING,
      };
    case NEOCARE.CREATE_PARAMETER_SUCCESS:
      return {
        ...state,
        statusCreateParameter: Status.SUCCESS,
      };
    case NEOCARE.CREATE_PARAMETER_ERROR:
      return {
        ...state,
        statusCreateParameter: Status.ERROR,
      };
    case NEOCARE.CREATE_PARAMETER_RESET:
      return {
        ...state,
        statusCreateParameter: Status.DEFAULT,
      };
    default:
      return state;
  }
};
