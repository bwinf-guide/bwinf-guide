import React from "react";
import styles from "./referencelist.module.css"

export const ReferenceList: React.FC<{ children }> = ({ children }) => {
    return (
        <ul className={styles["list-root"]}>
            <li className={styles["list-header"]}><p>Literatur</p></li>
            {children}
        </ul>
    )
}


export const ReferenceListItem: React.FC<{ url: string, urlText: string, desc: string, isStared: boolean }>
    = ({ url, urlText, desc, isStared }) => {
        return (
            <li className={styles["list-item"]}>
                <a href={url}
                    target="_blank"
                    className={styles["list-item-link"]}>{urlText}</a>
                <p className={styles["list-item-desc"]}>{desc}</p>

            </li>
        )
    }
