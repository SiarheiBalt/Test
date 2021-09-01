import { ButtonForTop } from "./ButtonForTop";
import { Input } from "./Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cl from "./Calendar.module.css";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constans";

const ico = <FontAwesomeIcon className={cl.ico} icon={faSearch} />;

export const Top = () => {
  const dispatch = useDispatch();
  const addDeal = () => {
    dispatch({ type: ACTIONS.ADD_DEAL });
  };
  const updateDeal = () => {
    dispatch({ type: ACTIONS.UPDATE_DEAL });
  };
  return (
    <div className={cl.mask}>
      <div className={cl.top}>
        <div>
          <ButtonForTop action={"Добавить"} onClick={addDeal} />
          <ButtonForTop action={"Обновить"} onClick={updateDeal} />
        </div>
        <div style={{ display: "flex" }}>
          <div>{ico}</div>
          <Input />
        </div>
      </div>
    </div>
  );
};
