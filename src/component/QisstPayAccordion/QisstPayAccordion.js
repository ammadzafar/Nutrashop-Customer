import React,{useState} from 'react';

const Accordion = ({ title, content }) => {

    const [isActive, setIsActive] = useState(false);
    return (
        <React.Fragment>
            <div className="accordion">
                <div className="accordion-item">
                    <div
                        className="accordion-title"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <div>{title}</div>
                        <div>{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive && <div className="accordion-content">{content}</div>}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Accordion;
// /const accordionData = [
//         {
//             title: 'Qisst Pay',
//             content: <EditOutlined/>
//         },
//         {
//             title: 'Cash On Delivery',
//             content: <UploadOutlined/>
//         }
//     ];<div className="accordion">
//                                 {accordionData.map(({ title, content }) => (
//                                     <Accordion title={title} content={content} />
//                                 ))}
//                             </div>