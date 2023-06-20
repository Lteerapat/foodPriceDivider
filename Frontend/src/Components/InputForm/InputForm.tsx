import { useState } from "react";
import './InputForm.scss';


const InputForm: React.FC<InputFormProps> = ({handleAddItem}) => {
    const [foodName, setFoodName] = useState('');
    const [unit, setUnit] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const newItem: FoodItem = {
            foodName,
            unit: +unit,
            originalPrice: +originalPrice,
        };

        handleAddItem(newItem);
        setFoodName('');
        setUnit('');
        setOriginalPrice('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Food Name"
                value={foodName}
                onChange={(event) => setFoodName(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="unit"
                value={unit}
                onChange={(event) => setUnit(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Original Price"
                value={originalPrice}
                onChange={(event) => setOriginalPrice(event.target.value)}
            />
            <button type="submit">Add</button>
        </form>    
    );
};

export default InputForm;