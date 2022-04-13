import React, { useEffect, useState } from "react";

const ProfileStatusHooks = (props) => {
    
  let [editMode, setEditMode] = useState(false);

  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(!editMode);
    props.updateStatus(status);
  };

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <div>
      {!editMode ? (
        <a onDoubleClick={activateEditMode}>{props.status || "-----"}</a>
      ) : (
        <input
          onChange={onStatusChange}
          onBlur={activateEditMode}
          autoFocus={true}
          value={status}
        ></input>
      )}
    </div>
  );
};
export default ProfileStatusHooks;
