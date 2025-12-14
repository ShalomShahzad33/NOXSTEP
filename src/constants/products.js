import white_and_black from "../assets/images/black-and-white-sneakers.jpg"
import black_and_red from "../assets/images/black-and-red-sneakers.jpg"
import black_leather from "../assets/images/black-leather-shoes.jpg"
import brown_leather from "../assets/images/brown-leather-shoes.jpg"


const products = [
    {
        id: 1,
        name: 'White & Black Sneakers',
        category: 'Sneakers',
        price: "$50",
        img_path: white_and_black,
        alt_text: "black-and-white-sneakers",
    },
    {
        id: 2,
        name: 'Black & Red Sneakers',
        category: 'Sneakers',
        price: "$60",
        img_path: black_and_red,
        alt_text: "black-and-red-sneakers",
    },
    {
        id: 3,
        name: 'Black Leather Shoes',
        category: 'Formal footwear',
        price: "$100",
        img_path: black_leather,
        alt_text: "black-leather-shoes",
    },
    {
        id: 4,
        name: 'Brown Leather Shoes',
        category: 'Formal footwear',
        price: "$120",
        img_path: brown_leather,
        alt_text: "brown-leather-shoes",
    },
]

export default products;