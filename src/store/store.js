// src/store/store.js
import { legacy_createStore as createStore, combineReducers } from 'redux';

import heroReducer from './reducers/heroReducer';
import profileReducer from './reducers/profileReducer';
import skillsReducer from './reducers/skillsReducer';
import projectsReducer from './reducers/projectsReducer';
import contactReducer from './reducers/contactReducer';

const rootReducer = combineReducers({
  hero: heroReducer,
  skills: skillsReducer,
  profile: profileReducer,
  projects: projectsReducer,
  contact: contactReducer,
});

export const store = createStore(rootReducer);
