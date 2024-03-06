// Hero Image banner
import HeroImg from "../assets/Hero.png";

// Product Images New Arrivals
import product1 from '../assets/ProductCarousal/product-1.png';
import product2 from '../assets/ProductCarousal/product-2.png';
import product3 from '../assets/ProductCarousal/product-3.png';
import product4 from '../assets/ProductCarousal/product-4.png';

// Banner Images New Collections

import BannerProduct1 from '../assets/BannerImages/banner-product1.png';
import BannerProduct2 from '../assets/BannerImages/banner-product2.png';
import BannerProduct3 from '../assets/BannerImages/banner-product3.png';


// Other Products 
import Product1 from '../assets/SellerProducts/product1.png';
import Product2 from '../assets/SellerProducts/product2.png';
import Product3 from '../assets/SellerProducts/product3.png';
import Product4 from '../assets/SellerProducts/product4.png';
import Product5 from '../assets/SellerProducts/product5.png';
import Product6 from '../assets/SellerProducts/product6.png';
import Product7 from '../assets/SellerProducts/product7.png';
import Product8 from '../assets/SellerProducts/product8.png';


// Bottom Image banner
import BottomImg from "../assets/Bottom-Banner.png";

// InstaFeed Images

import InstaFeed1 from '../assets/InstaFeed/InstaFeed1.png';
import InstaFeed2 from '../assets/InstaFeed/InstaFeed2.png';
import InstaFeed3 from '../assets/InstaFeed/InstaFeed3.png';
import InstaFeed4 from '../assets/InstaFeed/InstaFeed4.png';

// React icons
import dollar from '../assets/react-icons/dollar.png'
import payment from '../assets/react-icons/payment.png'
import question from '../assets/react-icons/question.png'
import shipping from '../assets/react-icons/shipping.png'

const heroapi = {
    heading: "Discover the Sound of Freedom...",
    subtitle: "Experience immersive audio with our premium headphones. Perfect for music lovers, gamers, and podcast enthusiasts.Unparalleled sound quality, comfort, and style await you.",
    img: HeroImg,
    btnText: "Explore Now",
};

const newArrivals = {
    title: "New Arrivals",
    items: [
        {
            id: "0x1",
            title: "SkullCandy-Crusher anc 2",
            subtext: "wireless headphones",
            btn: "Add To Cart",
            price: "289",
            rating: "4.9",
            img: product1,
        },
        {
            id: "0x2",
            title: "Beats",
            subtext: "Studio Pro",
            btn: "Add To Cart",
            price: "369",
            rating: "4.7",
            img: product2,
        },
        {
            id: "0x3",
            title: "Sony-WH-720N Wireless ",
            subtext: "Noise Canceling",
            btn: "Add To Cart",
            price: "189",
            rating: "4.5",
            img: product3,
        },
        {
            id: "0x4",
            title: "SkullCandy - Rail True ",
            subtext: "Wireless Earbuds",
            btn: "Add To Cart",
            price: "299",
            rating: "4.8",
            img: product4,
        },
    ],
};

const shopCollection = {
    heading: "Shop Collection",
    items: [
        {
            id: "0sx1",
            title: "Headband",
            subtitle: "Collection",
            img: BannerProduct1,
        },
        {
            id: "0sx2",
            title: "Earbuds",
            subtitle: "Collection",
            img: BannerProduct2,
        },
        {
            id: "0sx3",
            title: "Accessories",
            subtitle: "Collection",
            img: BannerProduct3,
        },
    ],
};

const bestSeller = {
    title: "Best Seller",
    items: [
        {
            id: "0Bx1",
            title: "Sony-WH-10M5 Wireless",
            subText: "Noise Canceling",
            price: '299',
            btn: "Add To Cart",
            rating: "4.7",
            img: Product1,
        },
        {
            id: "0Bx2",
            title: "Beats",
            subText: "Studio Pro",
            price: '399',
            btn: "Add To Cart",
            rating: "4.8",
            img: Product2,
        },
        {
            id: "0Bx3",
            title: "Sony-WH-C70N Wireless",
            subText: "Noise Canceling",
            price: '299',
            btn: "Add To Cart",
            rating: "4.7",
            img: Product3,
        },
        {
            id: "0Bx4",
            title: "SkullCandy-Rail",
            subText: "Wireless Earbuds",
            price: '299',
            btn: "Add To Cart",
            rating: "4.7",
            img: Product4,
        },
        {
            id: "0Bx5",
            title: "Beats XM5 Pro+",
            subText: "Studio Pro",
            price: '199',
            btn: "Add To Cart",
            rating: "4.3",
            img: Product5,
        },
        {
            id: "0Bx6",
            title: "JBL Reflect Flow Pro+",
            subText: "Truly Wireless Sports",
            price: '299',
            btn: "Add To Cart",
            rating: "4.7",
            img: Product6,
        },
        {
            id: "0Bx7",
            title: "Bose",
            subText: "Quiet-Comfort",
            price: '499',
            btn: "Add To Cart",
            rating: "4.9",
            img: Product7,
        },
        {
            id: "0Bx8",
            title: "AKG",
            subText: " Y600NC Wireless",
            price: '399',
            btn: "Add To Cart",
            rating: "4.7",
            img: Product8,
        },
    ],
};


const services = {
    item: [
        {
            id: "0DX1",
            icon: shipping,
            title: 'Free Shipping',
            subText: 'Order above $200',
        },
        {
            id: "0DX2",
            icon: dollar,
            title: 'Money-back',
            subText: '30 days guarantee',
        },
        {
            id: "0DX3",
            icon: payment,
            title: 'Secure Payments',
            subText: 'Secured by Stripe',
        },
        {
            id: "0DX4",
            icon: question,
            title: '24/7 Support',
            subText: 'Phone and Email support',
        },
    ],
};

const newsFeed = {
    title: "News Feed",
    heading: "Instagram",
    subText: "Follow us on social media for more discount & promotions",
    web: "@audioPulse_official",

    items: [
        {
            id: '0NX1',
            img: InstaFeed1,
        },
        {
            id: '0NX2',
            img: InstaFeed2,
        },
        {
            id: '0NX3',
            img: InstaFeed3,
        },
        {
            id: '0NX4',
            img: InstaFeed4,
        },
    ],
};

const footerApi = {
    titles: [{ title: "About audioPulse" }, { title: "Get Help" }, { title: "Company" }],
    links: [
        [
            { link: "News" },
            { link: "Careers" },
            { link: "Investors" },
            { link: "Prupose" },
            { link: "Sustainability" },
        ],
        [
            { link: "Order Status" },
            { link: "Shipping & Delivery" },
            { link: "Payment Options" },
            { link: "Gift Card Balance" },
            { link: "Contact Us" },
            { link: "FAQ" },
            { link: "Blog" },
        ],
        [
            { link: "Gift Cards" },
            { link: "Promotions" },
            { link: "Find A Store" },
            { link: "Signup" },
            { link: "3legant Jouneral" },
            { link: "Send Us Feeback" },
        ],
    ]
};


export {
    heroapi,
    footerApi,
    bestSeller,
    newArrivals,
    newsFeed,
    services,
    shopCollection
}