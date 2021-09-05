import { Button } from "../common/Button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cl from "./Calendar.module.css";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constans";
import { useState } from "react";
import { OutputSearchLi } from "./OtputSearchLi";
import { Input } from "../common/Input";
import { getNameofMounth } from "../../redux/functions";

const ico = <FontAwesomeIcon className={cl.ico} icon={faSearch} />;

export const Top = ({ cleanInputs, data, selectedDay }) => {
  const [input, setInput] = useState("");
  const [main, setMain] = useState("");

  const onchangeInput = (e) => {
    setInput(e.target.value);
    let result;
    result = data.days.filter((el) => {
      if (el.deal !== null) {
        return (
          el.deal.text?.toLowerCase() === e.target.value ||
          el.deal.event?.toLowerCase() === e.target.value
        );
      }
    });
    setMain(e.target.value === "" ? "" : result);
  };

  const dispatch = useDispatch();
  const addDeal = () => {
    dispatch({ type: ACTIONS.OPEN_FORM_ADD_DEAL });
    cleanInputs();
  };
  const updateDeal = () => {
    dispatch({ type: ACTIONS.OPEN_FORM_ADD_DEAL });
  };
  return (
    <div className={cl.mask}>
      <div className={cl.top}>
        <div>
          <Button
            action={"Добавить"}
            onClick={addDeal}
            disabled={selectedDay === ""}
          />
          <Button
            action={"Обновить"}
            onClick={updateDeal}
            disabled={selectedDay === ""}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div>{ico}</div>
          <Input onchangeInput={onchangeInput} value={input} />
        </div>
        <div className={cl.output_search}>
          <ul>
            {main !== "" &&
              main.map((el, i) => (
                <OutputSearchLi
                  key={i}
                  day={getNameofMounth(el.month)}
                  deal={el.deal}
                  month={data.month}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
