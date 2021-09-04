import cl from "./Calendar.module.css";
import { Days } from "./Days";
import { Navigation } from "./Navigation";
import { Top } from "./Top";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constans";
import { useState } from "react";
import { Modal } from "./modal/Modal";
import { useEffect } from "react";

export const Calendar = () => {
  let data = useSelector((store) => store.calendarReducer);
  let dispatch = useDispatch();
  let [monthCounte, setMonthCounte] = useState(0);
  let [inputEvent, setInputEvent] = useState("");
  let [inputText, setInputText] = useState("");

  let deal = data.selectedDay.deal;
  useEffect(() => {
    if (deal !== null) {
      if (deal) {
        setInputEvent(deal.event);
        setInputText(deal.text);
      }
    }
  }, [deal]);

  const cleanInputs = () => {
    setInputEvent("");
    setInputText("");
  };
  const onchangeInputEvent = (e) => {
    setInputEvent(e.target.value);
  };
  const onchangeInputText = (e) => {
    setInputText(e.target.value);
  };

  const changeMonth = (e) => {
    if (e.target.innerText === ">") {
      setMonthCounte(monthCounte + 1);
      dispatch({ type: ACTIONS.GET_NEXT_MONTH, count: monthCounte });
    }
    if (e.target.innerText === "<") {
      setMonthCounte(monthCounte - 1);
      dispatch({ type: ACTIONS.GET_PREVIOUS_MONTH, count: monthCounte });
    }
    if (e.target.innerText === "Сегодня") {
      setMonthCounte(0);
      dispatch({ type: ACTIONS.GET_PREVIOUS_MONTH, count: monthCounte });
    }
  };
  const onCloseModal = () => {
    dispatch({ type: ACTIONS.CLOSE_FORM_ADD_DEAL });
    cleanInputs();
  };
  const addDeal = () => {
    dispatch({ type: ACTIONS.ADD_DEAL, text: inputText, event: inputEvent });
    dispatch({ type: ACTIONS.CLOSE_FORM_ADD_DEAL });
    cleanInputs();
  };
  return (
    <div className={cl.calendar}>
      <Top
        changeMonth={changeMonth}
        cleanInputs={cleanInputs}
        data={data.currentlyDate[monthCounte]}
      />
      <div className={cl.container}>
        <Navigation
          year={data.currentlyDate[monthCounte].year}
          month={data.currentlyDate[monthCounte].month}
          changeMonth={changeMonth}
          disabled={monthCounte === 0}
        />
        <Days
          selected={data.selectedDay}
          days={data.currentlyDate[monthCounte].days}
          today={data.currentlyDate[monthCounte].today}
        />
      </div>
      {data.isFormDealOpen && (
        <Modal
          onCloseModal={onCloseModal}
          addDeal={addDeal}
          onchangeInputEvent={onchangeInputEvent}
          inputEvent={inputEvent}
          onchangeInputText={onchangeInputText}
          inputText={inputText}
        />
      )}
    </div>
  );
};
