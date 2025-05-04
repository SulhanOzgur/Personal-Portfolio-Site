import { SET_SKILLS } from '../actions/skillsActions';

const initialState = {
  title: '',
  skills: [],
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SKILLS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default skillsReducer;

/* import {
  SET_SKILLS,
  ADD_SKILL,
  REMOVE_SKILL,
} from '../store/actions/skillsActions';
import { data } from '../data/data';

const initialState = data.en.skillsSection.skills;

function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SKILLS:
      return [...action.payload];
    case ADD_SKILL:
      return [...state, action.payload];
    case REMOVE_SKILL:
      return state.filter((skill) => skill.name !== action.payload);
    default:
      return state;
  }
}

export default skillsReducer; */
