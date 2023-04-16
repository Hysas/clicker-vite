import "./Tabs.scoped.css";

import Tab from "./Tab";

import classNames from "classnames";

export default function Tabs() {
  return (
    <div className={classNames("Tabs", "grid")}>
      <Tab />
      <Tab />
      <Tab />
    </div>
  );
}
