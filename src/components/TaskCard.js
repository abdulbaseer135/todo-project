import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleEdit, handleDelete }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className="task_delete">
          <FontAwesomeIcon icon={faEdit} className="edit_icon" onClick={handleEdit} />
          <img src={deleteIcon} className="delete_icon" alt="" onClick={handleDelete} />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
