import TabItemCss from "./TabItem.module.css";

import classNames from "classnames";

type Props = {
  title: string;
};

export default function TabItem({ title }: Props) {
  return (
    <div className={classNames(TabItemCss.TabItem, "border")}>
      {/* <p>Tab Item</p> */}
      <h3>{title}</h3>
    </div>
  );
}
