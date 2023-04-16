import MenuCss from "./Menu.module.css";

import classNames from "classnames";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className={classNames(MenuCss.Menu, MenuCss.grid)}>
      <MenuItem title="Menu Item 1" />
      <MenuItem title="Menu Item 2" />
      <MenuItem title="Menu Item 3" />
      <MenuItem title="Menu Item 4" />
      <MenuItem title="Menu Item 5" />
    </div>
  );
}
