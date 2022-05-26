import React from 'react';
import styles from "./CatalogItem.module.css";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

export const CatalogItemSkeleton = () => {
    return (
        <div className={styles.catalogCategory}>
            <SkeletonTheme baseColor='#fff2'>
                <div className={styles.catalogCategoryTitleSkeleton}>
                    <Skeleton height={88}/>
                </div>
                <Skeleton height={250} />
            </SkeletonTheme>
        </div>
    );
};
