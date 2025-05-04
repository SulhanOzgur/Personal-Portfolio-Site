import { SET_PROJECTS } from '../actions/projectsActions';

const initialState = [];

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default projectsReducer;

/* import {
  SET_PROJECTS,
  ADD_PROJECT,
  REMOVE_PROJECT,
} from '../store/actions/projectsActions';
import { data } from '../data/data';

const initialState = data.en.projectsSection || [];

function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return [...action.payload];
    case ADD_PROJECT:
      return [...state, action.payload];
    case REMOVE_PROJECT:
      return state.filter((project) => project.id !== action.payload);
    default:
      return state;
  }
}

export default projectsReducer; */
