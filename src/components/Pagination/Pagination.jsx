import React, { useState } from 'react';
import cn from 'classnames';
import classes from './Pagination.module.css';

let Pagination = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pages = [];
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i);
    }
    
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftBorder = portionSize * (portionNumber - 1) + 1;
    let rightBorder = portionSize * portionNumber;

    return <div className={classes.pagination}>
        {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Back</button>}
        {pages.filter((p) => p >= leftBorder && p <= rightBorder)
            .map(p => {
                return <span className={cn({
                    [classes.selectedPage]: currentPage === p
                }, classes.pageNumber)}
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p);
                    }}>{p}</span>
            }
            )}
        {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
    </div>
}

export default Pagination;