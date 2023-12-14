import React from "react";
export function Header(props) {
  const styles = {
    backgroundColor: props.darkmode ? "#2B3844" : "white",
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
    color: props.darkmode ? "white" : "black",
    transition: "1s",
  };
  return (
    <nav>
      <div className="nav-content" style={styles}>
        <h1>Where in the world?</h1>
        <p onClick={props.handleClick}>
          <span className="material-symbols-outlined darkmode-svg">
            dark_mode
          </span>
          Dark Mode
        </p>
      </div>
    </nav>
  );
}
