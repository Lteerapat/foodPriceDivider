import { useState } from "react";

import './InputForm.scss';
import Swal from "sweetalert2";


const InputForm: React.FC<InputFormProps> = ({handleAddItem}) => {
    const [foodName, setFoodName] = useState('');
    const [unit, setUnit] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [hasDiscount, setHasDiscount] = useState(true);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!foodName || !unit || !originalPrice) {
            Swal.fire('Please fill in all fields');
            return;
        }

        const newItem: FoodItem = {
            foodName,
            unit: +unit,
            originalPrice: +originalPrice,
            hasDiscount,
        };

        handleAddItem(newItem);
        setFoodName('');
        setUnit('');
        setOriginalPrice('');
        setHasDiscount(true);
    }
    
    return (
        <form 
            className="input-form"
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder="Unit"
                value={unit}
                onChange={(event) => setUnit(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Food Name"
                value={foodName}
                onChange={(event) => setFoodName(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Price"
                value={originalPrice}
                onChange={(event) => setOriginalPrice(event.target.value)}
            />
            <label>
                Has Discount:
                <input 
                    type="checkbox"
                    checked={hasDiscount}
                    onChange={(event) => setHasDiscount(event.target.checked)}
                />
            </label>
            <button type="submit">Add</button>
        </form>    
    );
};

export default InputForm;