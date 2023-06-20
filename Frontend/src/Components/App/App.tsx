import { useState } from 'react'
import InputForm from '../InputForm/InputForm'
import InputTable from '../InputTable/InputTable';

export default function App() {
    const [inputItems, setInputItems] = useState<FoodItem[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [vat, setVat] = useState<number>(0);
    const [serviceCharge, setServiceCharge] = useState<number>(0);

    const handleAddItem = (item: FoodItem) => {
        const foodPriceWithDiscount = calculateFoodPriceWithDiscount(item.originalPrice, item.hasDiscount);
        const netFoodPrice = calculateNetFoodPrice(foodPriceWithDiscount);
        const newTableItem: TableItem = {
            ...item,
            foodPriceWithDiscount,
            netFoodPrice,
        };
        setInputItems([...inputItems, newTableItem]);
    };

    const handleRemoveItem = (index: number) => {
        const newInputItems = [...inputItems];
        newInputItems.splice(index, 1);
        setInputItems(newInputItems);
    };

    const calculateFoodPriceWithDiscount = (originalPrice: number, hasDiscount: boolean): number => {
        if (hasDiscount) {
            return +(originalPrice * (1 - (discount / 100))).toFixed(2);
        } else {
            return originalPrice;
        }
    }

    const calculateNetFoodPrice = (foodPriceWithDiscount: number):number => {
        return +(foodPriceWithDiscount * (1 + (vat / 100)) * (1 + (serviceCharge / 100))).toFixed(2);
    }

    const calculateTotalOriginalPrice = (): number => {
        return +inputItems.reduce((total, item) => total + item.originalPrice, 0).toFixed(2);
    }

    const calculateTotalOriginalPriceWithDiscount = (): number => {
        return +inputItems.reduce((total, item) => total + item.foodPriceWithDiscount, 0).toFixed(2);
    }

    const calculateTotalNetPrice = (): number => {
        return +inputItems.reduce((total, item) => total + item.netFoodPrice, 0).toFixed(2);
    }

    return (
        <div>
            <div style={{display:'flex'}}>
                <div>
                    <label>VAT Percentage:</label>
                    <input
                        type="number"
                        value={vat}
                        onChange={(event) => setVat(+event.target.value)}
                    />
                </div>
                <div>
                    <label>Discount Percentage:</label>
                    <input
                        type="number"
                        value={discount}
                        onChange={(event) => setDiscount(+event.target.value)}
                    />
                </div>
                <div>
                    <label>Service Charge:</label>
                    <input
                        type="number"
                        value={serviceCharge}
                        onChange={(event) => setServiceCharge(+event.target.value)}
                    />
                </div>
            </div>
            <div style={{display:'flex'}}>
                <div>
                    <label>Total Original Price:</label>
                    <span>{calculateTotalOriginalPrice()}</span>
                </div>
                <div>
                    <label>Total Original Price with Discount:</label>
                    <span>{calculateTotalOriginalPriceWithDiscount()}</span>
                </div>
                <div>
                    <label>Total Net Price:</label>
                    <span>{calculateTotalNetPrice()}</span>
                </div>
            </div>
            <InputForm handleAddItem={handleAddItem}/>
            <InputTable items={inputItems} handleRemoveItem={handleRemoveItem}/>
        </div>
    )
}

 
