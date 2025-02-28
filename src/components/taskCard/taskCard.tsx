import React from "react";
import style from "./_taskCard.module.scss";
import IconButton from "../iconButton/iconButton";
import Remove from "../icon/remove";
import { Confirm } from "../icon/Confirm";
import { Close } from "../icon/Close";

type TaskCardProps = {
  no: number;
  title: string;
  onRemove: () => void;
  onToggleStatus: () => void;
  status: "complete" | "uncomplete";
};

const TaskCard: React.FC<TaskCardProps> = ({
  no,
  title,
  onRemove,
  status,
  onToggleStatus,
}) => {
  return (
    <div
      className={` ${style.taskCard} ${
        status === "complete" ? style.complete : ""
      }`}
    >
      <div className={style.titleContent}>
        <div className={style.no}>{no}</div>
        <div className={style.title}>{title}</div>
      </div>
      <div className={style.actions}>
        {status === "uncomplete" && (
          <IconButton variant="error" onClick={onRemove}>
            <Remove />
          </IconButton>
        )}
        <IconButton variant="success" onClick={onToggleStatus}>
          {status === "complete" ? <Close /> : <Confirm />}
        </IconButton>
      </div>
    </div>
  );
};

export default TaskCard;
