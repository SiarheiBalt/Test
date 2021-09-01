import { ButtonForTop } from "./ButtonForTop";
import { Input } from "./Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cl from "./Calendar.module.css";

export const Top = () => {
  const ico = <FontAwesomeIcon className={cl.ico} icon={faSearch} />;
  return (
    <div className={cl.mask}>
      <div className={cl.top}>
        <div>
          <ButtonForTop action={"Добавить"} />
          <ButtonForTop action={"Обновить"} />
        </div>
        <div style={{ display: "flex" }}>
          <div>{ico}</div>
          <Input />
        </div>
      </div>
    </div>
  );
};
