import eng from '../assets/USA.svg';
import esp from '../assets/ESP.svg';
import fra from '../assets/FRA.svg';
import por from '../assets/POR.svg';
import ger from '../assets/GER.svg';
import { format } from 'date-fns';
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { FaFirstOrder, FaComments, FaShare, FaUserFriends, FaCartArrowDown, FaPaypal } from 'react-icons/fa';
import { FcManager, FcSalesPerformance } from 'react-icons/fc';
import { AiOutlineUsergroupAdd, AiFillLike } from 'react-icons/ai';
import { BiMailSend, BiMoney } from 'react-icons/bi';
import { MdAdminPanelSettings, MdDashboard, MdManageAccounts, MdTipsAndUpdates } from 'react-icons/md';
const today = format(new Date(), 'MMM dd').split(' ');

export const languages = [
    { name: 'ENG', icon: eng, id: 1 },
    { name: 'ESP', icon: esp, id: 2 },
    { name: 'FRA', icon: fra, id: 3 },
    { name: 'POR', icon: por, id: 4 },
    { name: 'GER', icon: ger, id: 5 }
];
export const currencies = [
    { name: 'USD', symbol: '$', id: 1 },
    { name: 'EUR', symbol: '€', id: 2 },
    { name: 'GBP', symbol: '£', id: 3 },
    { name: 'RUB', symbol: '₽', id: 4 },
    { name: 'JPY', symbol: '¥', id: 5 }
];
// const categories: string[] = ['Category1', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2'];
export const brands = ['Brand1', 'Brand2', 'Brand3', 'Brand4', 'Brand5', 'Brand6', 'Brand7', 'Brand8', 'Brand9'];
export const homeProductsFeatured = [
    {
        name: 'Ultimate 3D Bluetooth Speaker',
        category: 'Speakers',
        discount: 20,
        image: ['https://i.ibb.co/XFDMHNQ/product-1.jpg', 'https://i.ibb.co/MkfWbFZ/product-1-2.jpg'],
        isHot: true,
        price: 59,
        rating: 4
    },
    {
        name: 'Brown Women Casual HandBag',
        category: 'Ladies Bag',
        discount: 30,
        image: ['https://i.ibb.co/kgb6gSk/product-2.jpg', 'https://i.ibb.co/BPH3sqc/product-2-2.jpg'],
        isHot: true,
        price: 83,
        rating: 4
    },
    {
        name: 'Circled Ultimate 3D Speaker',
        category: 'Speakers',
        discount: 0,
        image: ['https://i.ibb.co/hf710WP/product-3.jpg', 'https://i.ibb.co/LYLYD6c/product-3-2.jpg'],
        isHot: false,
        price: 49,
        rating: 4
    },
    {
        name: 'Blue Backpack for the Young - S',
        category: 'Backpacks',
        discount: 40,
        image: ['https://i.ibb.co/8dwFqk3/product-4.jpg', 'https://i.ibb.co/Z2wJSvC/product-4-2.jpg'],
        isHot: true,
        price: 65,
        rating: 5
    },
    {
        name: 'Casual Spring Blue Shoes',
        category: 'Shoes',
        discount: 15,
        image: ['https://i.ibb.co/tX9LHqG/product-5.jpg', 'https://i.ibb.co/NsRM8s3/product-5-2.jpg'],
        isHot: true,
        price: 73,
        rating: 2
    },
    {
        name: 'Men Sports Travel Bag',
        category: 'Backpacks',
        discount: 10,
        image: ['https://i.ibb.co/qDyWbbN/product-11.jpg', 'https://i.ibb.co/CmjNYKy/product-11-2.jpg'],
        isHot: true,
        price: 45,
        rating: 4
    }
];

export const newArrival = [
    {
        category: "Belts",
        discount: 0,
        image: ['https://i.ibb.co/PY9S90F/product-6.jpg', 'https://i.ibb.co/VWRtsHk/product-6-2.jpg'],
        isHot: true,
        name: 'Men Black Gentle Belt',
        price: 88,
        rating: 2
    },
    {
        category: 'Shoes',
        discount: 0,
        image: ['https://i.ibb.co/7jvbjVX/product-7.jpg', 'https://i.ibb.co/D8mBdNf/product-7-2.jpg'],
        isHot: true,
        name: 'Brown-Black Men Casual Glasses',
        price: 75,
        rating: 5
    },
    {
        category: 'Glasses',
        discount: 20,
        image: ['https://i.ibb.co/bXXWRP3/product-8.jpg', 'https://i.ibb.co/W0M9dXp/product-8-2.jpg'],
        isHot: false,
        name: 'Brown-Black Men Casual Glasses',
        price: 79,
        rating: 3
    },
    {
        category: 'Glasses',
        discount: 30,
        image: ['https://i.ibb.co/S0wZtSd/product-9.jpg', 'https://i.ibb.co/jbVh9Yw/product-9-2.jpg'],
        isHot: false,
        name: 'Black Men Casual Glasses',
        price: 90,
        rating: 4
    },
    {
        category: 'Shoes',
        discount: 0,
        isHot: true,
        image: ['https://i.ibb.co/pfFx262/product-10.jpg', 'https://i.ibb.co/85pqq7F/product-10-2.jpg'],
        name: 'Basketball Sports Blue Shoes',
        price: 99,
        rating: 5
    },
    {
        category: 'Ladies Bag',
        discount: 15,
        isHot: true, image: ['https://i.ibb.co/j6jMgkM/product-12.jpg', 'https://i.ibb.co/zNYXc44/product-12-2.jpg'],
        name: 'Brown HandBag',
        price: 74,
        rating: 5
    }
];
export const categories = [
    {
        id: '01',
        img: 'https://gcp-img.slatic.net/lazada/e15fbfa1-f7a2-42c2-814c-74d8057c413b_BD-80-80.jpg',
        name: 'Panjabi',
        quantity: 40,
        product: [
            {
                id: '0101',
                name: "Luxury Panjabi For Men",
                price: 1990,
                des: "Brand: Swapon’s World, Luxury Quality, Herringbone Fabric, Exclusive Design, Best Quality Computer Embroidery, GSM - 150-200",
                stock: 10,
                ratting: 5,
                brand: "Swapon's World",
                color: 'Black Red Yellow',
                img: [
                    'https://static-01.daraz.com.bd/p/a1f305926d21b74a0db9f7c3ce694a82.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/5465840ab09e44245e054ebe4117e43d.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/6bc0fe9a81ace71dd566215e0eee7e45.jpg_720x720.jpg_.webp',
                ]
            },
            {
                id: '0102',
                name: "Prince Panjabi",
                price: 1790,
                des: "Brand: Prince World, Luxury Quality, Herringbone Fabric, Exclusive Design, Best Quality Computer Embroidery, GSM - 150-200",
                stock: 8,
                ratting: 5,
                brand: "Prince world",
                color: 'Black Red Yellow',
                img: [
                    'https://static-01.daraz.com.bd/p/cca5b806853c96999fb85da199ea9d05.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/8ada0f8655348cce1382113ee8b7c7b3.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/2b5359d9622dadb022880b77f71ba5e7.jpg_720x720.jpg_.webp',
                ]
            },
            {
                id: '0103',
                name: "Digital Printed Panjabi",
                price: 1590,
                des: "Brand: World Premium, Luxury Quality, Herringbone Fabric, Exclusive Design, Best Quality Computer Embroidery, GSM - 150-200",
                stock: 12,
                ratting: 5,
                brand: "World Premium",
                color: 'Black Red Yellow',
                img: [
                    'https://static-01.daraz.com.bd/p/81f2c4355cfe2ebc208c7bd7e095dde3.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/006a6af5bede64b307f8aa4f328fe440.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/fc15bd484d7893c8912bd6fef1f4a4f0.jpg_720x720.jpg_.webp',
                ]
            },
        ]
    },
    {
        id: '02',
        img: 'https://gcp-img.slatic.net/lazada/d34001c7-a4c0-431e-a175-c1adda684587_BD-80-80.jpg',
        name: 'Shirt',
        quantity: 80,
        product: [
            {
                id: '0201',
                name: "Cotton Casual Shirt",
                price: 1240,
                des: "Product details of SS World Black Cotton Casual Band Shirt for Men, Product Type: Shirt, Color: As Like Picture , Main Material: Cotton, Stylish and fashionable",
                stock: 8,
                ratting: 5,
                brand: "Ss World",
                color: 'Black Red Yellow',
                img: [
                    'https://static-01.daraz.com.bd/p/c5b51151849c012099348b44ad2e9565.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/1f733ad1189dd92f980bafa3f7cb296a.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/4a8af282723c4610efccd30d4a82308e.jpg_720x720.jpg_.webp',
                ]
            },
            {
                id: '0202',
                name: "Trendy Men's Shirt",
                price: 1790,
                des: "Type: Katuaw Main Material: Cottonw Gender: Menw Style: Formal¡ Size - M ,L, XLF Medium : Chest - 38 and Length - 28F Large : Chest - 40 and Length - 29F Extra Large : Chest - 42 and Length - 30",
                stock: 20,
                ratting: 5,
                brand: "No Brand",
                color: 'Black Red Yellow',
                img: [
                    'https://static-01.daraz.com.bd/p/3ca92383ae9d5aaa1da75aa6aadec026.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/5534a739f8360bf1ec317d5856c31b66.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/6a5e54f5dc4e3caaa9095069c841edfc.png_720x720.jpg_.webp',
                ]
            },
            {
                id: '0203',
                name: "Men's Casual Shirt",
                price: 750,
                des: "Product Type: Full Sleeve Shirt, Style: Casual, Main Material: Cotton, Gender: Men, Well Swing and Quality Product",
                stock: 14,
                ratting: 5,
                brand: "Men's Casual",
                color: 'Black Red Yellow',
                img: [
                    'https://static-01.daraz.com.bd/p/b9ecb2150520e58de852d47f48dd80e3.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/7fc72b8eb70b48aab6e4dc5611243256.jpg_720x720.jpg_.webp',
                    'https://static-01.daraz.com.bd/p/315f582e0d8a2be508b3f5360d128023.jpg_720x720.jpg_.webp',
                ]
            },
        ]
    },
    {
        id: '03',
        img: 'https://gcp-img.slatic.net/lazada/6de08b4e-aa9d-40be-b199-99dafbe3a2f4_BD-80-80.jpg',
        name: 'Pant',
        quantity: 55,
        product: [
            {
                id: '0301',
                name: "Premium Narrow Pant",
                price: 1240,
                des: "Color: Dark Blue (Dark to black shade), Stretch Factor: 12%, Fabric Weight: Heavier Medium; 11.5 oz, Fabric Composition: 97% Cotton, 2% Polyester, 1% Elastane, Can be machine washed in cold water inside out. Can be tumble dried or hang dried. Washing often not required.",
                stock: 8,
                ratting: 5,
                brand: "Fit Basic Denim",
                color: 'Blue Black',
                img: [
                    "https://static-01.daraz.com.bd/p/c222c47c60517ceb2caa7c06001adb3a.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/dfaedda41c0f98bbfb3cc3feaa53ff2d.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/dc770877d0acae0fc8432981b30ffa5d.jpg_720x720.jpg_.webp",
                ]
            },
            {
                id: '0302',
                name: "Denim Jeans Pant",
                price: 1200,
                des: "Color: Dark Blue (Dark to black shade), Stretch Factor: 12%, Fabric Weight: Heavier Medium; 11.5 oz, Fabric Composition: 97% Cotton, 2% Polyester, 1% Elastane, Can be machine washed in cold water inside out. Can be tumble dried or hang dried. Washing often not required.",
                stock: 7,
                ratting: 5,
                brand: "Smart Stylish",
                color: 'Blue Black',
                img: [
                    "https://bd-live-21.slatic.net/kf/S37bd87ea87d644bab911787e67e0207bN.jpg",
                    "https://static-01.daraz.com.bd/p/11b6a9e3fdc9a3ece534f41b0277c1d6.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/2b0ef2867cce4b8c8b808f0e950c22b3.jpg_720x720.jpg_.webp",
                ]
            },
            {
                id: '0303',
                name: "DENIM JEANS PANTS",
                price: 1520,
                des: "Material : Denim, Quality : Export, Gender : Men, Colour : As given picture, Fabrics: 96% Cotton, 4% Spandex, Size: 30, 32, 34, 36,38,40 Inch, Long 42 Inch",
                stock: 12,
                ratting: 5,
                brand: "PREMIUM QUALITY",
                color: 'Black Blue',
                img: [
                    "https://static-01.daraz.com.bd/p/b1553c84765a4fc08d3078d960dcb708.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/32fb805882e82ed1aa7eb5725c15b736.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/226976b8dc85c47a8c0fa75c9811ee79.jpg_720x720.jpg_.webp",
                ]
            },
        ]
    },
    {
        id: '04',
        img: 'https://gcp-img.slatic.net/lazada/14e7112f-f4cc-4d0e-b964-d2268622269f_BD-80-80.jpg',
        name: 'Sarees',
        quantity: 47,
        product: [
            {
                id: '0401',
                name: "Soft Silk Katan Saree",
                price: 850,
                des: "Brand:No brand, Product name:-Women\'s Saree, Published By: -Kataan Collection, Material:-Silk, Length Size:-12 hand, Wigth Size:-2.5 hand, Colour:-As same As picture, Fashionable and comfortable",
                stock: 13,
                ratting: 5,
                brand: "No brand",
                color: 'Multi',
                img: [
                    "https://static-01.daraz.com.bd/p/04e43915e2550f1ae2cbae7e931a01d7.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/02f36cabb138a28945e5e8f70205da8a.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/ba77ac7b2e3b6b30562f15f4869028e1.jpg_720x720.jpg_.webp",
                ]
            },
            {
                id: '0402',
                name: "Print Cotton Saree For Women",
                price: 799,
                des: "Brand:No brand, Product name:-Women\'s Saree, Published By: -Kataan Collection, Material:-Silk, Length Size:-12 hand, Wigth Size:-2.5 hand, Colour:-As same As picture, Fashionable and comfortable",
                stock: 10,
                ratting: 5,
                brand: "No brand",
                color: 'Multi',
                img: [
                    "https://static-01.daraz.com.bd/p/2eb5024bf96c9dd2e787cfeb3610c509.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/9b67c107947596b8be44fa1dbbef28db.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/cb5d1f6a066c4535768be82d9d204f96.jpg_720x720.jpg_.webp",
                ]
            },
            {
                id: '0403',
                name: "Indian Vichitra Silk Saree",
                price: 2599,
                des: "Brand:No brand, Product name:-Women\'s Saree, Published By: -Kataan Collection, Material:-Silk, Length Size:-12 hand, Wigth Size:-2.5 hand, Colour:-As same As picture, Fashionable and comfortable",
                stock: 9,
                ratting: 5,
                brand: "No brand",
                color: 'Green Golden',
                img: [
                    "https://static-01.daraz.com.bd/p/3d472082f65df79c2cc7622dfcbc17f2.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/43c78d989357e593d2b121ff3d655311.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/c81f63d4d44ff2a314d385f8db3def28.jpg_720x720.jpg_.webp",
                ]
            },
        ]
    },
    {
        id: '05',
        img: 'https://gcp-img.slatic.net/lazada/5d14cf00-beb3-4954-8adb-832cbacc4fd1_BD-80-80.jpg',
        name: 'Kameez',
        quantity: 26,
        product: [
            {
                id: '0501',
                name: "Pakistani Malhar Lawn three piece",
                price: 2090,
                des: "Pakistani Malhar lawn in bangladeshHigh quality and luxury Color no change and Bright lookingcolor same as the pictureOver size for all bodyCotton Fabric",
                stock: 8,
                ratting: 5,
                brand: "No brand",
                color: 'Red Green Blue',
                img: [
                    "https://static-01.daraz.com.bd/p/b2041736e324977f24c6bae8b5bf5bf2.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/7eefbc49b30f6daf78e47f9f52396ed9.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/6a0c38b0a1b8fb6589cb9ff447104163.jpg_720x720.jpg_.webp",
                ]
            },
            {
                id: '0502',
                name: "Indian Kameez",
                price: 1670,
                des: "Product type: Three Piece, Color: Same As Picture, Main Material: tissue, Clothing - Cotton, orna - goergette",
                stock: 8,
                ratting: 5,
                brand: "No brand",
                color: 'Green Blue Green Red Golden',
                img: [
                    "https://static-01.daraz.com.bd/p/8ad40d42d9c460fd1d3be8feb067cce6.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/a88f3f49557bbc92b90a943bd6c8da28.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/4de86daa68a27992a32f866c2b18ad87.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/10af65e9d573006365ec9897a5f767a2.jpg_720x720.jpg_.webp",
                ]
            },
            {
                id: '0503',
                name: "Indian Three Kameez",
                price: 799,
                des: "Product Type: Three Piece, Color: Same As Picture, Main Material: tissue, Clothing - Cotton, orna - goergette",
                stock: 10,
                ratting: 5,
                brand: "No brand",
                color: 'Black blue green',
                img: [
                    "https://static-01.daraz.com.bd/p/a909dde94acb408a4e817877b2f47fb0.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/80c67236104c6d7bd078f59ab975312e.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/2930984ecbd374a4d62f7459c827ce67.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/684931cf4955e036fda2779d3d0ae044.jpg_720x720.jpg_.webp",
                ]
            },
        ]
    },
    {
        id: '06',
        img: 'https://gcp-img.slatic.net/lazada/7e000804-8392-4d62-ac89-ebb953d1bb1f_BD-80-80.jpg',
        name: 'Abaya',
        quantity: 17,
        product: [
            {
                id: '0601',
                name: "Dubai Cherry Stylish Abaya Borka",
                price: 2450,
                des: "Brand : Style Fix, Main Material : Dubai Cherry Georgette, Borka With Orna Hizab { Same As Pic }, Long Size : 52, 54, 56, Body Size: Free Size, Body Size : Free {Adjustable}, Fashion abaya Borka.",
                stock: 20,
                ratting: 5,
                brand: "Style Fix Dubai Cherry",
                color: 'Green black blue',
                img: [
                    "https://static-01.daraz.com.bd/p/00b884eca7b1da8e8ee29e72c4e1bf0e.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/4fb6f7d29a549f1a68f9bd366beb4398.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/bb9d514fa1c8c4a6fb63a3648046e217.jpg_720x720.jpg_.webp",
                ]
            },
            {
                id: '0602',
                name: "Fashionable khimar Lycra borka",
                price: 1840,
                des: "Brand : Style Fix, Name : 3 colour Gown Borka With Hijab Orna, Materia; Dubai Cherry Fabric, Borka and Orna Attached, Long Size : 52,54,56, Body Size : 44 +, Color As Picture Shown",
                stock: 7,
                ratting: 5,
                brand: "Stylish Rong Burkha",
                color: 'Multi',
                img: [
                    "https://static-01.daraz.com.bd/p/48f3d1b0e08c2eb0511ed810895d9ea7.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/fcd1a7f62e8d375dda09823f9561a32a.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/4c83048ce2f5f8c7f810041c0bd8d0f4.jpg_720x720.jpg_.webp",
                ]
            },
            {
                id: '0603',
                name: "Ready Hijab, Nikab, borka borkha koti set abaya",
                price: 3190,
                des: "Brand : Style Fix, Main Material : Dubai Cherry Georgette, Borka With Orna Hizab { Same As Pic }, Long Size : 52, 54, 56, Body Size: Free Size, Body Size : Free {Adjustable}, Fashion abaya Borka.",
                stock: 15,
                ratting: 5,
                brand: "Dubai Charry",
                color: 'Multi',
                img: [
                    "https://static-01.daraz.com.bd/p/dc9578aa5549c491d2f7d9124ef33ae3.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/599f248339feb4f0fffc0306f396bfc5.jpg_720x720.jpg_.webp",
                    "https://static-01.daraz.com.bd/p/84ea947654bb31f82e747578e51e2c26.jpg_720x720.jpg_.webp",
                ]
            },
        ]
    },
];
// export const categoriesPrevious = [
//     {
//         img: 'https://i.ibb.co/ZH6SJpF/category-1.jpg',
//         name: 'Dress',
//         quantity: 40,
//     },
//     {
//         img: 'https://i.ibb.co/8X54kLK/category-2.jpg',
//         name: 'Shoes',
//         quantity: 80
//     },
//     {
//         img: 'https://i.ibb.co/F5fzD0p/category-3.jpg',
//         name: 'Glasses',
//         quantity: 55
//     },
//     {
//         img: 'https://i.ibb.co/c3qdjg7/category-4.jpg',
//         name: 'Backpack',
//         quantity: 47
//     },
//     {
//         img: 'https://i.ibb.co/CPW2347/category-5.jpg',
//         name: 'Ladies Bag',
//         quantity: 26
//     },
//     {
//         img: 'https://i.ibb.co/Bgz25qh/category-6.jpg',
//         name: 'Speaker',
//         quantity: 17
//     },
//     {
//         img: 'https://i.ibb.co/G77m2zT/category-7.jpg',
//         name: 'Watches',
//         quantity: 24
//     },
//     {
//         img: 'https://i.ibb.co/wsQ9sqP/category-8.jpg',
//         name: 'Machine',
//         quantity: 7
//     },
//     {
//         img: 'https://i.ibb.co/qrbQk2L/category-9.jpg',
//         name: 'Sofa',
//         quantity: 12
//     },
//     {
//         img: 'https://i.ibb.co/FqMNrtJ/category-10.jpg',
//         name: 'Headphone',
//         quantity: 23
//     }
// ];

export const blogs = [
    {
        comments: [],
        img: 'https://i.ibb.co/Cns2Mn3/post-1.jpg',
        published: [today[0], today[1]],
        title: 'Top New Collection',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        img: 'https://i.ibb.co/L8m9nN4/post-2.jpg',
        comments: [],
        published: [today[0],
        today[1]],
        title: 'Fashion Trends',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        comments: [],
        img: 'https://i.ibb.co/xht4mNn/post-3.jpg',
        published: [today[0], today[1]],
        title: 'Right Choices',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        comments: [],
        img: 'https://i.ibb.co/7SddqtB/post-4.jpg',
        published: [today[0], today[1]],
        title: 'Perfect Accessories',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];

export const tempBrands = [
    'https://i.ibb.co/SwzGcrh/brand1.png',
    'https://i.ibb.co/hyhpJ8m/brand2.png',
    'https://i.ibb.co/G7xCkHd/brand3.png',
    'https://i.ibb.co/tbG8rTX/brand4.png',
    'https://i.ibb.co/SmbwrPz/brand5.png',
    'https://i.ibb.co/VwLQDRn/brand6.png',
    'https://i.ibb.co/jVT43yt/brand7.png',
    'https://i.ibb.co/JzyW0cw/brand8.png',
    'https://i.ibb.co/vdLbxqy/brand9.png',
    'https://i.ibb.co/phjrWt9/brand10.png',
    'https://i.ibb.co/C1ypWLv/brand11.png',
    'https://i.ibb.co/SRnQ8Y9/brand12.png',
    'https://i.ibb.co/hD0vtYB/brand13.png'
];

export const sortCartData = [
    {
        link: 'https://icms-image.slatic.net/images/ims-web/beea236c-559f-41f8-9ec2-17c4d47be899.png',
        name: 'free delivery',
    },
    {
        link: 'https://icms-image.slatic.net/images/ims-web/fb8aaa8f-6b54-4fc1-81f7-b9ac44c4d4d5.png',
        name: 'mart',
    },
    {
        link: 'https://icms-image.slatic.net/images/ims-web/e5c45443-9535-42fa-89a0-ab90f53ca937.png',
        name: 'boys fashion',
    },
    {
        link: 'https://icms-image.slatic.net/images/ims-web/162a7cf8-e9d7-4297-809d-68cfb92a4993.png',
        name: 'girls fashion',
    },
    {
        link: 'https://icms-image.slatic.net/images/ims-web/a213d8c9-43dc-43ea-8fe3-d302bc74ba0a.png',
        name: 'beauty glamour',
    },
]

export const topNavItemsLink = [
    {
        name: 'Customer care',
        to: 'Customer_care',
    },
    {
        name: 'Home',
        to: '/',
    },
]

export const filterSectionBgColor = [
    {
        colorName: 'text-red-500',
        bgColor: 'bg-[#820303]'
    },
    {
        colorName: 'text-green-500',
        bgColor: 'bg-[#03820e]'
    },
    {
        colorName: 'text-blue-500',
        bgColor: 'bg-[#070382]'
    },
    {
        colorName: 'text-yellow-500',
        bgColor: 'bg-[#827503]'
    },
    {
        colorName: 'text-pink-500',
        bgColor: 'bg-[#820360]'
    },
]

export const delivery_replacement_data = [
    {
        id: 1,
        icon: <TbTruckDelivery className='w-full' />,
        name: "Free delivery",
        textColor: 'text-green-500'
    },
    {
        id: 2,
        icon: <TbReplace className='w-full' />,
        name: "30 day replacement",
        textColor: 'text-purple-500'
    },
    {
        id: 3,
        icon: <TbTruckDelivery className='w-full' />,
        name: "Chengra fast delivery",
        textColor: 'text-green-700'
    },
]

export const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

export const dashMiniCardData = [
    {
        name: "Today's Money",
        value: "$15,240",
        percent: 40,
        icon: <BiMoney />,
    },
    {
        name: "Total Users",
        value: "2015",
        percent: 4,
        icon: <AiOutlineUsergroupAdd />,
    },
    {
        name: "Total Sales",
        value: "45078",
        percent: 11,
        icon: <FcSalesPerformance />,
    },
    {
        name: "Today's Order",
        value: "245",
        percent: 13,
        icon: <FaFirstOrder />,
    },
]

export const userDashMiniCardData = [
    {
        name: "Total comments",
        value: "34125",
        percent: 23,
        icon: <FaComments />,
    },
    {
        name: "Our customers",
        value: "210000",
        percent: 37,
        icon: <FaUserFriends />,
    },
    {
        name: "Total likes",
        value: "425041",
        percent: 42,
        icon: <AiFillLike />,
    },
    {
        name: "Total share",
        value: "54210",
        percent: 21,
        icon: <FaShare />,
    },
]

// export const bannerPic = [
//     { id: 1, pic: 'https://as1.ftcdn.net/v2/jpg/01/91/82/44/1000_F_191824469_CJFxbuGqEJCnDRK83N97i17R7oEUJtEM.jpg' },
//     { id: 2, pic: 'https://as1.ftcdn.net/v2/jpg/02/19/10/12/1000_F_219101232_9gYB191gBUCxTSE455FUkmQB1MioqtVp.jpg' },
//     { id: 3, pic: 'https://as1.ftcdn.net/v2/jpg/01/23/12/38/1000_F_123123866_EGxIsP6jRf1hLP56OHDUWHHyJF2Kkhfp.jpg' },
//     { id: 4, pic: 'https://as1.ftcdn.net/v2/jpg/01/52/61/36/1000_F_152613619_kaNluqI3oUjvIhEQDcDfuksXknNJ45lf.jpg' },
//     { id: 5, pic: 'https://as1.ftcdn.net/v2/jpg/02/21/01/52/1000_F_221015223_JFpTeUN84cxi2SED9Ug9snZlifE0und4.jpg' },
//     { id: 6, pic: 'https://as2.ftcdn.net/v2/jpg/01/38/53/99/1000_F_138539919_c8vb5eC9112n4kxLBB4pU4ez6NC6G77i.jpg' },
//     { id: 7, pic: 'https://as2.ftcdn.net/v2/jpg/01/41/03/45/1000_F_141034518_wXdy3QxcL9vA1H5VY6Jl5PTNul4YLsE7.jpg' },
// ]

export const dashboardLink = {
    buyer: [
        { name: 'Dashboard', to: '/dashboard/userDash', icon: <MdDashboard /> },
        { name: 'My order', to: '/dashboard/My_order', icon: <InboxIcon /> },
        { name: 'My cart', to: '/dashboard/My_cart', icon: <FaCartArrowDown /> },
    ],
    admin: [
        { name: 'Dashboard', to: '/dashboard', icon: <MdDashboard /> },
        { name: 'Manage account', to: '/dashboard/Manage_account', icon: <MdManageAccounts /> },
        { name: 'Upload & Update', to: '/dashboard/Upload_&_Update', icon: <MdTipsAndUpdates /> },
        { name: 'Administration', to: '/dashboard/Administration', icon: <MdAdminPanelSettings /> },
        { name: 'Management', to: '/dashboard/Management', icon: <FcManager /> },
        { name: 'Payment history', to: '/dashboard/history_of_payment', icon: <FaPaypal /> },
        { name: 'Send mail', to: '/dashboard/Send_mail', icon: <BiMailSend /> },
    ],
    storeManager: [
        { name: 'Dashboard', to: '/dashboard/userDash', icon: <MdDashboard /> },
        { name: 'My order', to: '/dashboard/My_order', icon: <InboxIcon /> },
        { name: 'My cart', to: '/dashboard/My_cart', icon: <FaCartArrowDown /> },
        { name: 'Administration', to: '/dashboard/Administration', icon: <MdAdminPanelSettings /> },
        { name: 'Management', to: '/dashboard/Management', icon: <FcManager /> },
    ],
}