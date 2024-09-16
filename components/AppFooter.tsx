import React from "react";
import styles from "./appfooter.module.css";
import Link from "next/link";

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
          &copy; 2023-2024 BWINF.GUIDE. Alle Rechte vorbehalten.
        </p>
        <p>Ein Projekt des BWINF Alumni & Freunde e. V.</p>
        <div className={"mt-4 flex flex-col md:flex-row " + styles["footer-links"]}>
          <Link href="https://alumni.bwinf.de/wiki/impressum" target="_blank">Impressum</Link>
          <Link href="/impressum#haftungsausschluss-disclaimer">Haftungsausschluss</Link>
          <Link href="/impressum#datenschutzerklärung">Datenschutzerklärung</Link>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
