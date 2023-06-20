export {}
declare global {
    //interface for inputForm
    interface FoodItem {
        foodName: string ;
        unit: number;
        originalPrice: number;
    }
    
    //interface for inputTable
    interface TableItem extends FoodItem {
        foodPriceWithDiscount: number;
        netFoodPrice: number;
    }

    interface InputFormProps {
        handleAddItem: (item: FoodItem) => void;
    }

    interface TableProps {
        items: TableItem[];
        handleRemoveItem: (index: number) => void;
    }

}