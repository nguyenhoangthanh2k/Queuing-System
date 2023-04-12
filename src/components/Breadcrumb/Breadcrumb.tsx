import React from 'react';
import './Breadcrumb.scss';
import { useNavigate } from 'react-router-dom';

interface BreadcrumbProps {
    Content: (object)[];
    Current: string
}


// Current là điểm muốn dừng
//dummy Content:

// let content: (object)[] = [
//     {
//         page1: 'handle page1'
//     },

//     {
//         page2: 'handle page2'
//     },

//     {
//         page3: 'handle page3'
//     }
// ]

function Breadcrumb(props: BreadcrumbProps) {
    const NavBreadcrumb = useNavigate();

    let stop: boolean = false


    return (
        <div className='Breadcrumb-container'>
            {
                props.Content && props.Current ? props.Content.map((value: any, key: number) => {
                    for (const [prop, value] of Object.entries(props.Content[key])) {

                        if (stop) {
                            break;
                        }

                        if (props.Current !== prop) {
                            return (
                                <div key={key} onClick={() => NavBreadcrumb(`${value}`)}>{prop} <span className='space'>{`>`}</span> </div>
                            )

                        } else {
                            stop = true;
                            return (
                                <div key={key} className={`breadcrump-active ${value}`}>{prop}</div>
                            )
                        }

                    }

                })
                    :
                    <>Error</>
            }
        </div>
    )
}

export default Breadcrumb
