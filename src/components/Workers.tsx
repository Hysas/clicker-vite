import WorkerItem from "./WorkerItem";
import WorkersCss from "./Workers.module.css";

import classNames from "classnames";

export default function Workers() {
  return (
    <div className={classNames(WorkersCss.Workers, WorkersCss.grid)}>
      <WorkerItem />
      <WorkerItem />
      <WorkerItem />
      <WorkerItem />
      <WorkerItem />
      <WorkerItem />
      <WorkerItem />
      <WorkerItem />
    </div>
  );
}
