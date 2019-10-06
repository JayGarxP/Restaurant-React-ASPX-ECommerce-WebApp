// Typescript React Models
// Exclude all .tsx files from Visual Studio project; build them separate as detailed in food.tsx

export interface FoodModel {

    Id: number;
    Name: string;
    Description: string;
    Picture: string; //url string
    Price: number;
    Quantity: number;

    // This is a react port of the model FoodItem
//       public class FoodItem {
//    [Key]
//    public int Id { get; set; }
//        public string Name { get; set; }
//        public string Description { get; set; }
//        public string Picture { get; set; }
//        public decimal Price { get; set; }

//[NotMapped]
//        public int Quantity { get; set; }
//[NotMapped]
//        public string Comment { get; set; }
//    }
}

// state class to hold state change info for Front End
export interface IAppState {
    items: FoodModel[];
    myOrder: FoodModel[];
    showPopup: boolean;
    userId: number;
    orderPlaced: boolean;
}