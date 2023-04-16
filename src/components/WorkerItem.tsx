import WorkerItemCss from "./WorkerItem.module.css";

import classNames from "classnames";

type Props = {
  name: string;
};

export default function WorkerItem({ name }: Props) {
  return (
    <div className={classNames(WorkerItemCss.WorkerItem, WorkerItemCss.grid)}>
      <div
        className={classNames(
          WorkerItemCss.WorkerItem,
          WorkerItemCss.WorkerName
        )}
      >
        <h3>{name}</h3>
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
