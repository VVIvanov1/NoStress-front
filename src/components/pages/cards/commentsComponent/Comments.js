import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../../../context";
import { FaEdit, FaRegSave } from "react-icons/fa";

const Comments = ({ id, user, comments }) => {
  //   let commentsText = comments.join("\n");
  const { lang } = useGlobalContext();
  const [thisCardComments, setThisCardComments] = useState();
  const [toggleComments, setToggleComments] = useState(false);
  const [newCommentForm, setNewCommentForm] = useState(false);
  const [textComment, setTextComment] = useState("");

  useEffect(() => {
    setThisCardComments(comments);
  }, []);
  const handleNewComment = (id) => {
    console.log(id);
    console.log(user);
    console.log(textComment);
  };
  const fillCommentText = (e) => {
    setTextComment(e.target.value);
  };

  return (
    <div className="my-order-card__comments">
      {!newCommentForm ? (
        <div className="comments-section">
          {comments.map((comment) => {
            let { user, date, text } = comment;

            return (
              <div className="comment" key={date}>
                <h4>{user}:</h4>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="new-comment-section">
          <textarea cols={3} onChange={(e) => fillCommentText(e)}></textarea>
        </div>
      )}

      <div className="edit-comments-buttons">
        {!newCommentForm ? (
          <button
            onClick={() => setNewCommentForm(true)}
            className="edit-comment-btn"
          >
            <FaEdit />{" "}
            {lang === "En" ? "Edit" : lang === "Ru" ? "Править" : "өңдеу"}
          </button>
        ) : (
          <button
            className="save-comment-btn"
            onClick={() => handleNewComment(id, user)}
          >
            <FaRegSave />{" "}
            {lang === "En" ? "Save" : lang === "Ru" ? "Сохранить" : "Жинау"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Comments;
