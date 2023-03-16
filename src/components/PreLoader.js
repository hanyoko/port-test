import React from "react";
// import "./PreLoader.scss";

function PreLoader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default PreLoader;