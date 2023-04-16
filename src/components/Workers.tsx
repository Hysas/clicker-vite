import WorkerItem from "./WorkerItem";
import WorkersCss from "./Workers.module.css";

import classNames from "classnames";

export default function Workers() {
  return (
    <div className={classNames(WorkersCss.Workers, WorkersCss.grid)}>
      <WorkerItem name="Worker Name 1" />
      <WorkerItem name="Worker Name 2" />
      <WorkerItem name="Worker Name 3" />
      <WorkerItem name="Worker Name 4" />
      <WorkerItem name="Worker Name 5" />
      <WorkerItem name="Worker Name 6" />
      <WorkerItem name="Worker Name 7" />
      <WorkerItem name="Worker Name 8" />
    </div>
  );
}
