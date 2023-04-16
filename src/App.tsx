import AppCss from "./App.module.css";

import classNames from "classnames";

import Score from "./components/Score";
import Tabs from "./components/Tabs";
import Workers from "./components/Workers";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className={classNames(AppCss.App, AppCss.grid)}>
      <Score />
      <Tabs />
      <Workers />
      <Menu />
      <Footer />
    </div>
  );
}
