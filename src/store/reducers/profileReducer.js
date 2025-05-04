import { SET_PROFILE } from '../actions/profileActions';

const initialState = {
  basicInfo: {},
  aboutMe: '',
  profileImage: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...action.payload };
    default:
      return state;
  }
};

export default profileReducer;
