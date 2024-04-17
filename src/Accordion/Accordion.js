import { list } from "./list";
import './accordion.css';
import { AccordionItem} from "./AccordionItem";

export const Accordion = () => {
    return(
        <div> 
        {list.map((item,index) => 
            <AccordionItem

                key={index}
                title={item.title}
                content={item.content}
            />
        )}
        </div>
    )
}