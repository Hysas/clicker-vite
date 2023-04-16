import MenuCss from "./Menu.module.css";

import classNames from "classnames";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className={classNames(MenuCss.Menu, MenuCss.grid)}>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
}
