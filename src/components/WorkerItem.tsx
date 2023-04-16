import WorkerItemCss from "./WorkerItem.module.css";

import classNames from "classnames";

export default function WorkerItem() {
  return (
    <div className={classNames(WorkerItemCss.WorkerItem, WorkerItemCss.grid)}>
      <div
        className={classNames(
          WorkerItemCss.WorkerItem,
          WorkerItemCss.WorkerName
        )}
      >
        <h3>Worker Name</h3>
      </div>
      <div
        className={classNames(
          WorkerItemCss.WorkerItem,
          WorkerItemCss.WorkerBtn
        )}
      >
        <span>Level 0</span>
      </div>
    </div>
  );
}
