import TabItemCss from "./TabItem.module.css";

import classNames from "classnames";

export default function TabItem() {
  return (
    <div className={classNames(TabItemCss.TabItem)}>
      {/* <p>Tab Item</p> */}
      <h3>Tab Item</h3>
    </div>
  );
}
