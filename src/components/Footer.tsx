import "./Footer.css";

import classNames from "classnames";

export default function Footer() {
  return (
    <footer className={classNames("Footer")}>
      <p>
        Original project by{" "}
        <a href="https://substack.com/profile/140696718-stefan-meiforth-gulbrandsen">
          @Stefan M. Gulbrandsen
        </a>
      </p>
    </footer>
  );
}