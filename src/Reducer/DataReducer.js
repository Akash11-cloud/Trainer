import ProfilePic from "../Assests/GYM.jpg"
const INITIAL_STATE = {
  Data: [
    {
      id: 1,
      name: "Suraj Kumar",
      Experience: "5",
      hobby: "zumba",
      photo: ProfilePic,
      video: "Online",
      home: "In Home",
      ruppe: "400/session",
			description:"Fitness trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities, including cardiovascular exercises (exercises for the heart and blood circulation), strength training, and stretching. They work with people of all ages and skill levels."
    },
    {
      id: 2,
      name: "Manoj Kumar",
      Experience: "5",
      hobby: "zumba",
      photo: ProfilePic,
      video: "Online",
      home: "In Home",
      ruppe: "400/session",
			description:"Fitness trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities, including cardiovascular exercises (exercises for the heart and blood circulation), strength training, and stretching. They work with people of all ages and skill levels."
    },
    {
      id: 3,
      name: "Tushar Kumar",
      Experience: "5",
      hobby: "zumba",
      photo: ProfilePic,
      video: "Online",
      home: "In Home",
      ruppe: "400/session",
			description:"Fitness trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities, including cardiovascular exercises (exercises for the heart and blood circulation), strength training, and stretching. They work with people of all ages and skill levels."

    },
    {
      id: 4,
      name: "Akash Kumar",
      Experience: "5",
      hobby: "zumba",
      photo: ProfilePic,
      video: "Online",
      home: "In Home",
      ruppe: "400/session",
			description:"Fitness trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities, including cardiovascular exercises (exercises for the heart and blood circulation), strength training, and stretching. They work with people of all ages and skill levels."
    },
    {
      id: 5,
      name: "Suraj Kumar",
      Experience: "5",
      hobby: "zumba",
      photo: ProfilePic,
      video: "Online",
      home: "In Home",
      ruppe: "400/session",
			description:"Fitness trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities, including cardiovascular exercises (exercises for the heart and blood circulation), strength training, and stretching. They work with people of all ages and skill levels."
    },
    {
      id: 6,
      name: "Suraj Kumar",
      Experience: "5",
      hobby: "zumba",
      photo: ProfilePic,
      video: "Online",
      home: "In Home",
      ruppe: "400/session",
			description:"Fitness trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities, including cardiovascular exercises (exercises for the heart and blood circulation), strength training, and stretching. They work with people of all ages and skill levels."
    },
  ],
};

const DataReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case "GET_DATA":
      return state;
    default:
      return state;
  }
};

export default DataReducer;