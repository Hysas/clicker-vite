import ScoreCss from "./Score.module.css";

import classNames from "classnames";

export default function Score() {
  return (
    <div className={classNames(ScoreCss.Score)}>
      <p>Points</p>
      <span>0</span>
    </div>
  );
}
