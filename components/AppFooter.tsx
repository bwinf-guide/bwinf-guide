import React from "react";
import styles from "./appfooter.module.css";

const AppFooter: React.FC = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 py-12">
      <div className="ml-[10vw]">
        <nav className={"grid grid-rows-3 gap-y-1 " + styles["footer-links"]}>
          <h4 className="text-lg">
            <strong>Links</strong>
          </h4>
          <a href="https://bwinf.de" target="_blank">BWINF.de</a>
          <a href="https://alumni.bwinf.de/" target="_blank">Alumni Verein</a>
          <a href="https://github.com/bwinf-guide/bwinf-guide" target="_blank">Github</a>
        </nav>
        <p className="mt-8">
          &copy; 2023 BWINF GUIDE. Alle Rechte vorbehalten.
        </p>
        <p>Dies ist keine offizielle Website der Bundesweiten Informatikwettbewerbe. </p>
      </div>
    </footer>
  );
};

export default AppFooter;
