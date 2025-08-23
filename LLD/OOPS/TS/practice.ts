// class VendingMachine {

//     addProduct(product: Product, quantity: number) {
//         let isPresent: boolean = false;
//         this.products.forEach((currProduct: Product) => {
//             if (currProduct.name === product.name) {
//                 currProduct.quantity += quantity
//             }
//         })
//     }

//     // accept money
//     insertMoney(amount: CoinDenomiation) {

//     }


//     // select a product
//     selectProduct(productName: string) {

//     }

//     // dispense product
//     dispenseProduct() {

//     }

//     // handle out of stock/insufficient funds
//     returnChange() {

//     }
// }

// class Product {
//     name: string;
//     price: number;
//     constructor(_name: string, _price: number) {
//         this.name = _name;
//         this.price = _price;
//     }
// }


// enum CoinDenomiation {
//     ONE = 1,
//     FIVE = 5,
//     TEN = 10,
//     TWENTY = 20,
//     FIFTY = 50,
//     HUNDRED = 100
// }


// const machine: VendingMachine = new VendingMachine();

// machine.addProduct(new Product("Coke"), 20);