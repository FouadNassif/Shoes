import { randomUUID } from "crypto";

// Arrays of possible values
const shoeNames = [
    "Air Max", "Ultra Boost", "Classic", "Runner", "Sprint", "Pro", "Elite",
    "Fusion", "Edge", "Prime", "Core", "Lite", "Flex", "Flow", "Pulse",
    "Velocity", "Momentum", "Dynamo", "Nova", "Zenith", "Apex", "Vortex",
    "Phantom", "Ghost", "Shadow", "Eclipse", "Nebula", "Cosmos", "Stellar"
];


const adjectives = [
    "Premium", "Elite", "Pro", "Ultra", "Max", "Super", "Hyper", "Mega",
    "Turbo", "Quantum", "Atomic", "Cosmic", "Galactic", "Stellar", "Lunar",
    "Solar", "Titan", "Dragon", "Phoenix", "Eagle", "Falcon", "Hawk"
];

const materials = [
    "Mesh", "Leather", "Synthetic", "Knit", "Canvas", "Suede", "Rubber",
    "Foam", "Textile", "Nylon", "Polyester", "Cotton", "Wool", "Denim"
];

const features = [
    "cushioned", "breathable", "lightweight", "durable", "flexible",
    "supportive", "responsive", "stable", "comfortable", "ergonomic"
];

const benefits = [
    "enhanced performance", "maximum comfort", "superior support",
    "optimal fit", "excellent traction", "great stability",
    "outstanding durability", "premium quality"
];

export const colors = [
    "Black", "White", "Red", "Blue", "Green", "Yellow", "Orange",
    "Purple", "Pink", "Brown", "Gray", "Silver", "Gold", "Navy",
    "Burgundy", "Teal", "Coral", "Lavender", "Mint", "Olive"
];

export const genders = ["Men", "Women"];

export const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];

export const categories = [
    "Running", "Basketball", "Training", "Lifestyle", "Walking",
    "Hiking", "Tennis", "Golf", "Soccer", "Skateboarding"
];

export const brands = [
    "Nike", "Adidas", "Puma", "Reebok", "New Balance", "Under Armour",
    "ASICS", "Skechers", "Converse", "Vans", "Fila", "Brooks", "Hoka",
    "Timberland", "Dr. Martens", "Crocs", "Birkenstock", "Allbirds",
    "Gucci", "Balenciaga", "Jordan", "Salomon", "Merrell", "On Running"
];

// Function to get random items from an array
const getRandomItems = <T>(arr: T[], count: number): T[] => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

// Function to generate a random price between min and max
const getRandomPrice = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Function to generate a random shoe
export const generateRandomShoe = () => {
    const name = `${getRandomItems(adjectives, 1)[0]} ${getRandomItems(shoeNames, 1)[0]}`;
    const material = getRandomItems(materials, 1)[0];
    const feature = getRandomItems(features, 2).join(" and ");
    const benefit = getRandomItems(benefits, 1)[0];
    
    return {
        id: Math.floor(Math.random() * 10),
        name: name,
        brand: getRandomItems(brands, 1)[0],
        description: `The ${name} features ${material} construction with ${feature} design for ${benefit}. Perfect for everyday wear and athletic activities.`,
        category: getRandomItems(categories, 1)[0],
        colors: getRandomItems(colors, 5),
        sizes: getRandomItems(sizes, Math.random() > 0.5 ? 5 : 7),
        price: getRandomPrice(50, 300),
        mainImage: `/assets/img/shoes/img${Math.floor(Math.random() * 10)}.jpg`,
        inStock: Math.random() > 0.1, // 90% chance of being in stock
        rating: Number((Math.random() * 2 + 3).toFixed(1)), // Random rating between 3.0 and 5.0
        reviews: Math.floor(Math.random() * 1000),
        tags: getRandomItems(["new", "popular", "trending", "limited"], Math.floor(Math.random() * 3) + 1),
        material: material,
        gender: getRandomItems(["Men", "Women", "Unisex"], 1)[0]
    };
};

export const generateRandomShoes = (count: number) => {
    return Array.from({ length: count }, generateRandomShoe);
};