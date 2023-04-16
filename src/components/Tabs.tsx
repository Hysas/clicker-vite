import TabsCss from "./Tabs.module.css";

import TabItem from "./TabItem";

import classNames from "classnames";

export default function Tabs() {
  return (
    <div className={classNames(TabsCss.Tabs, TabsCss.grid)}>
      <TabItem />
      <TabItem />
      <TabItem />
    </div>
  );
}
