import { ACTIONS } from "../constans";
import { createMonth } from "../functions";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const today = date.getDate();

const defaultState = {
  currentlyDate: [
    {
      days: createMonth(year, month),
      month: month,
      today: today,
      year: year,
    },
  ],
  selectedDay: "",
  isFormDealOpen: false,
  userEvents: [],
};

export const calendarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_NEXT_MONTH:
      let countMonth = action.count + month + 1;
      let countYear = year;
      if (countMonth > 12) {
        countYear = year + 1;
        countMonth = countMonth - 12;
      }
      if (!state.currentlyDate.some((el) => el.month === countMonth)) {
        let nextDate = {
          days: createMonth(countYear, countMonth),
          month: countMonth,
          year: countYear,
        };
        return { ...state, currentlyDate: [...state.currentlyDate, nextDate] };
      }
    case ACTIONS.GET_PREVIOUS_MONTH:
      return { ...state };
    case ACTIONS.SELECT_DAY:
      return {
        ...state,
        selectedDay: {
          id: action.data.id,
          day: action.data.day,
          deal: action.data.deal,
        },
      };
    case ACTIONS.OPEN_FORM_ADD_DEAL:
      return { ...state, isFormDealOpen: true };
    case ACTIONS.CLOSE_FORM_ADD_DEAL:
      return { ...state, isFormDealOpen: false };
    case ACTIONS.ADD_DEAL:
      let userData =
        action.event === ""
          ? null
          : {
              event: action.event,
              text: action.text,
            };

      return {
        ...state,
        currentlyDate: state.currentlyDate.map((el) => {
          return {
            days: el.days.map((day) => {
              if (day.id === state.selectedDay.id) {
                return { ...day, deal: userData };
              } else {
                return day;
              }
            }),
            year: el.year,
            month: el.month,
            today: el.today,
          };
        }),
      };

    case ACTIONS.GET_USER_DEALS:
      let result = [];
      state.currentlyDate.forEach((el) => {
        el.days.forEach((element) => {
          if (element.deal !== null) result = [...result, element];
        });
      });
      return { ...state, userEvents: result };

    default:
      return state;
  }
};
