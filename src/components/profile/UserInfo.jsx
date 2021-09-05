import cl from "./Profile.module.css";

export const UserInfo = ({ userData }) => {
  return (
    <div className={cl.user_info}>
      <ul>
        <li>{`Имя: ${userData.name}`}</li>
        <li>{`Фамилия: ${userData.fatherName}`}</li>
        <li>{`Отчество: ${userData.surname}`}</li>
        <li>{`Город: ${userData.city}`}</li>
        <li>{`Профессия: ${userData.profession}`}</li>
      </ul>
    </div>
  );
};
