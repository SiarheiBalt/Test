import { ACTIONS } from "../constans";

const defaultState = {
  login: "Admin",
  password: "12345678",
  isAuth: false,
  userInfo: {
    name: "Виктор",
    surname: "Денисов",
    fatherName: "Петрович",
    city: "Минск",
    profession: "слесарь 3-го разряда",
  },
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_ACCES:
      if (
        action.user.password === state.password &&
        action.user.login === state.login
      ) {
        return { ...state, isAuth: true };
      }
    case ACTIONS.CLOSE_ACCES:
      return { ...state, isAuth: false };

    default:
      return state;
  }
};
