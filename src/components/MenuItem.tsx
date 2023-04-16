import MenuItemCss from "./MenuItem.module.css";

import classNames from "classnames";

type Props = {
  title: string;
};

export default function MenuItem({ title }: Props) {
  return (
    <div className={classNames(MenuItemCss.MenuItem)}>
      <h3>{title}</h3>
    </div>
  );
}
