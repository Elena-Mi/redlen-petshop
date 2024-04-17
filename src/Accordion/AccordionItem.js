import { useState } from "react"
import { FaArrowDownLong } from "react-icons/fa6";


export const AccordionItem = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className="main_accordion">
            <div className={isOpen ? 'active' : 'default'} onClick={handleIsOpen}>
                    {title} <span className="arrow"> <FaArrowDownLong  /> </span>
            </div>
            {isOpen && <div className="content">{content}</div>}
        </div>
    )
}