import { MdAdd, MdRemove } from "react-icons/md";
const ChangeQuantity = ({quantity, setQuantity}) => {

    const removeQuantity = () => {
        if( quantity <= 1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity)
    }
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
    return(

        <div className="quantity_container">
            <button className="quantity_mines" onClick={removeQuantity}><MdRemove /></button>
            <span className="quantity_number"> {quantity} </span>
            <button className="quantity_plus" onClick={addQuantity}><MdAdd /></button>
        </div>
    )
}
export default ChangeQuantity;