import React from "react";
import styles from "./Profile.module.css";
import Posts from "./__Posts/Profile__PostsContainer";
import PersonInfo from "./__PersonInfo/Profile__PersonInfo";
function Profile(props) {
  return (
    <div>
      <PersonInfo></PersonInfo>
      <Posts></Posts>
    </div>
  );
}

export default Profile;