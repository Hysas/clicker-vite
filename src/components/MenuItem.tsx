import MenuItemCss from "./MenuItem.module.css";

import classNames from "classnames";

export default function MenuItem() {
  return (
    <div className={classNames(MenuItemCss.MenuItem)}>
      {/* <p>Menu Item</p> */}
      <h3>Menu Item</h3>
    </div>
  );
}
