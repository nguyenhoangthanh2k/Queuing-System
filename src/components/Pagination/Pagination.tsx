import React, { useState, useEffect } from 'react';
import './Pagination.scss';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";


// interface PaginationProps {
//     Data: any[];
//     RecordsPerPage: number;
//     ClassName?: string;
//     SetRecords?: any;
// }



function Pagination(props: any) {

    const [currentPage, setCurrentPage] = useState(1);
    const [arrCurrentPages, setarrCurrentPages] = useState([1, 'start']);



    let getDataError: any[] = [{

        'error': 'error'
    }
    ]

    let recordsPerPage: number = props.RecordsPerPage ? props.RecordsPerPage : 5;
    let lastIndex: number = currentPage * recordsPerPage;
    let firstIndex: number = lastIndex - recordsPerPage;
    let npage: number = Math.ceil(props.Data.length / recordsPerPage);
    let numberOfPages: (number | string)[] = [];
    for (let i = 0; i <= npage; i++) {
        numberOfPages.push(i + 1);
    }




    useEffect(() => {
        props.Data && props.SetRecords ? props.SetRecords(props.Data.slice(firstIndex, lastIndex)) : props.SetRecords(getDataError);

        let dot: string = '...';

        let tempArrCurrentPages: (number | string)[] = [...arrCurrentPages];

        if (numberOfPages.length < 6) {
            tempArrCurrentPages = numberOfPages
        }

        else if (currentPage >= 1 && currentPage <= 3) {
            tempArrCurrentPages = [1, 2, 3, 4, dot, numberOfPages.length]
        }

        else if (currentPage === 4) {
            const sliced = numberOfPages.slice(0, 5)
            tempArrCurrentPages = [...sliced, dot, numberOfPages.length]
        }

        else if (currentPage > 4 && currentPage < numberOfPages.length - 2) {
            const sliced1 = numberOfPages.slice(currentPage - 2, currentPage)
            const sliced2 = numberOfPages.slice(currentPage, currentPage + 1)
            tempArrCurrentPages = ([1, dot, ...sliced1, ...sliced2, dot, numberOfPages.length])
        }

        else if (currentPage > numberOfPages.length - 3) {
            const sliced = numberOfPages.slice(numberOfPages.length - 4)
            tempArrCurrentPages = ([1, dot, ...sliced])
        }

        setarrCurrentPages(tempArrCurrentPages)
        setCurrentPage(currentPage)
    }, [currentPage])


    return (
        <div className='Pagination-container'>
            <ul>
                <li className='pagination-button' onClick={() => {
                    // currentPage <= 1 ? currentPage : setCurrentPage(currentPage - 1)
                    if (currentPage <= 1) {
                        setCurrentPage(currentPage);
                    } else {
                        setCurrentPage(currentPage - 1);
                    }
                }}>
                    <AiFillCaretLeft />
                </li>
                {
                    arrCurrentPages.map((n, i) => (
                        <li className={`pagination-content ${currentPage === n ? 'active' : ''}`} key={i}
                            onClick={(e) => setCurrentPage(i + 1)}>{n}</li>
                    ))

                }
                <li className='pagination-button' onClick={(e) => {
                    currentPage >= numberOfPages.length ? setCurrentPage(currentPage) : setCurrentPage(currentPage + 1)
                }}>
                    <AiFillCaretRight />
                </li>
            </ul>
        </div>
    )


}

export default Pagination
