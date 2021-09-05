import cl from "./Info.module.css";

export const Article = ({ data }) => {
  return (
    <div className={cl.article}>
      <h3>{data.title}</h3>
      <img className={cl.picture} src={data.picture} />
      <div className={cl.text}>{data.article}</div>
    </div>
  );
};
