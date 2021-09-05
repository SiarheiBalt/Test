import { Button } from "../../common/Button";
import { Input } from "../../common/Input";

import "./Modal.css";

export const Modal = ({
  onCloseModal,
  addDeal,
  onchangeInputEvent,
  onchangeInputText,
  inputEvent,
  inputText,
}) => {
  return (
    <div className={"back_modal"} onClick={() => onCloseModal()}>
      <div
        className={"container_modal"}
        onClick={(event) => event.stopPropagation()}
      >
        <button className={"button_modal"} onClick={() => onCloseModal()}>
          <img
            className={"img_modal"}
            src="https://e7.pngegg.com/pngimages/628/1018/png-clipart-x-mark-symbol-computer-icons-w-miscellaneous-cross.png"
            alt=""
          />
        </button>
        <div className={"action_modal"}>
          <div>Событие</div>
          <Input onchangeInput={onchangeInputEvent} value={inputEvent} />
          <div>Текст</div>
          <Input onchangeInput={onchangeInputText} value={inputText} />
          <Button action={"Добавить событие"} onClick={addDeal} />
        </div>
      </div>
    </div>
  );
};
