import React, { useState } from "react";
import { useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";
import "./LikesComponent.css";
// import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useLocalState } from "./LocalStorageHook";

function LikesComponent({ id, iconId }) {
  const [likes, setLikes] = useState([]);
  const [iconColor, setIconColor] = useLocalState(iconId, "grey");
  const [counter, setCounter] = useState("");

  useEffect(() => {
    db.collection("likes")
      .doc(id)
      .onSnapshot(doc => {
        setLikes(Object.values(doc.data()));
      });
    setCounter(db.collection("likes").doc(id));
  }, []);

  return (
    <div className="like--container">
      <div
        onClick={() => {
          setIconColor(cur => (cur === "grey" ? "red" : "grey"));
          if (iconColor === "grey") {
            counter.update({
              numberOfLikes: firebase.firestore.FieldValue.increment(1),
            });
          } else {
            counter.update({
              numberOfLikes: firebase.firestore.FieldValue.increment(-1),
            });
          }
        }}
        className="icon__content--container"
      >
        <FavoriteIcon
          id={iconId}
          style={{ color: iconColor }}
          className="favoriteIcon2"
        />
        <p className="likesCounter noselect">{likes}</p>
      </div>
    </div>
  );
}

export default LikesComponent;
