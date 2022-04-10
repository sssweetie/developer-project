import React from "react";
import Messages__MessageWindow from "./Messages__MessageWindow";
import { addMessageActionCreator } from "../../../Redux/messagesReducer";
import { connect } from "react-redux";
import isLoginWrapper from "../../../HOC/isLoginRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messageNewText: state.messagesPage.messageNewText,
    messageData: state.messagesPage.messageData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onClickAddNewMessage: (message) => {
      dispatch(addMessageActionCreator(message));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  isLoginWrapper
)(Messages__MessageWindow);
