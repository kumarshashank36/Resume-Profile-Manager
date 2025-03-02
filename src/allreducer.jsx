import { combineReducers } from "redux";

import MyBasic from "./basicreducer";
import MyContact from "./contactreducer";
import MyEducation from "./edureducer";
import MySkill from "./skillreducer";
import MyProject from "./projectreducer";
import MyExper from "./expereducer";


const MainReducer = combineReducers ({MyBasic, MyContact, MyEducation, MySkill, MyProject, MyExper})

export default MainReducer