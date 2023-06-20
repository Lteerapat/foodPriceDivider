import "@fortawesome/fontawesome-free/css/all.min.css";
import './InputTable.scss';

const InputTable: React.FC<TableProps> = ({items, handleRemoveItem}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Food Name</th>
                    <th>Unit</th>
                    <th>Original Price</th>
                    <th>Food Price with Discount</th>
                    <th>Net Food Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.foodName}</td>
                        <td>{item.unit}</td>
                        <td>{item.originalPrice}</td>
                        <td>{item.foodPriceWithDiscount}</td>
                        <td>{item.netFoodPrice}</td>
                        <td>
                            <button onClick={() => handleRemoveItem(index)}>
                                <i className="fa-solid fa-trash" style={{color: '#ff0000'}}></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default InputTable;