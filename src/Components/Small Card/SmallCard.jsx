import React from "react";
import styles from "./SmallCard.module.css"

export const SmallCard = ({img, text}) => {
    return (
        <>
            <div className={styles.smallCard}>
                <div className={styles.imgContainer}><img src={img} alt="" /></div>
                <div className={styles.textContainer}><h6>{text}</h6></div>
            </div>
        </>
    )
}