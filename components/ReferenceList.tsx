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


export const ReferenceListItem: React.FC<{ url: string, title: string, author: string, isStared: boolean }>
    = ({ url, title, author, isStared }) => {
        return (
            <li className={styles["list-item"]}>
                <p className={styles["list-item-author"]}>{author}</p>
                <a
                    href={url}
                    target="_blank"
                    className={styles["list-item-link"]}>{title}</a>

            </li>
        )
    }
