import "./Score.css";

import classNames from "classnames";

export default function Score() {
  return (
    <div className={classNames("Score")}>
      <p>Points</p>
      <span>0</span>
    </div>
  );
}
