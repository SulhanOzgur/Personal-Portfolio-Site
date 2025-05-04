import { SET_CONTACT } from '../actions/contactActions';

const initialState = {
  email: '',
  socials: [], // { name, icon, url }
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT:
      return { ...action.payload };
    default:
      return state;
  }
};

export default contactReducer;

/* import { SET_CONTACT, UPDATE_EMAIL } from '../actions/contactActions';

const initialState = {
  email: '',
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTACT:
      return { ...action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export default contactReducer; */
