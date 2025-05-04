import { SET_HERO } from '../actions/heroActions';

const initialState = {};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HERO:
      return { ...action.payload };
    default:
      return state;
  }
};

export default heroReducer;

/* import {
  SET_HERO,
  UPDATE_NAME,
  UPDATE_TITLE,
  UPDATE_DESCRIPTION,
  UPDATE_PROFILE_IMAGE,
  UPDATE_SOCIALS,
} from '../actions/heroActions';

const initialState = {}; // başta boş, dil gelince dolacak

function heroReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HERO:
      return { ...action.payload };

    case UPDATE_NAME:
      return { ...state, name: action.payload };

    case UPDATE_TITLE:
      return { ...state, title: action.payload };

    case UPDATE_DESCRIPTION:
      return { ...state, description: action.payload };

    case UPDATE_PROFILE_IMAGE:
      return { ...state, profileImage: action.payload };

    case UPDATE_SOCIALS:
      return { ...state, socials: action.payload };
    default:
      return state;
  }
}

export default heroReducer; */
