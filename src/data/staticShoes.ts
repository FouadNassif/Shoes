export type Shoe = {
    id: number;
    name: string;
    brand: string;
    description: string;
    category: string;
    colors: string[];
    sizes: number[];
    price: number;
    originalPrice?: number;
    isOnSale: boolean;
    mainImage: string;
    inStock: boolean;
    rating: number;
    reviews: number;
    tags: string[];
    material: string[];
    gender: "Men" | "Women" | "Unisex";
    date: string;
};

export const shoes: Shoe[] = [
    {
        id: 1,
        name: "Air Max 270",
        brand: "Nike",
        description: "The Nike Air Max 270 delivers visible cushioning underfoot and a sleek, modern design. The Max Air unit provides exceptional comfort and impact protection.",
        category: "Lifestyle",
        colors: ["black", "white", "red", "blue"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        price: 120,
        originalPrice: 150,
        isOnSale: true,
        mainImage: "/assets/img/shoes/img1.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 1200,
        tags: ["new", "popular", "sale"],
        material: ["Mesh", "Synthetic", "Rubber"],
        gender: "Men",
        date: "2025-1-01"
    },
    {
        id: 2,
        name: "Ultra Boost 22",
        brand: "Adidas",
        description: "The Ultra Boost 22 features responsive cushioning and a Primeknit+ upper for a snug, supportive fit. Perfect for running or everyday wear.",
        category: "Running",
        colors: ["white", "black", "blue", "gray"],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        price: 180,
        isOnSale: false,
        mainImage: "/assets/img/shoes/img2.jpg",
        inStock: true,
        rating: 4.7,
        reviews: 950,
        tags: ["trending"],
        material: ["Primeknit", "Boost", "Continental Rubber"],
        gender: "Women",
        date: "2025-1-12"
    },
    {
        id: 3,
        name: "Classic Leather",
        brand: "Reebok",
        description: "The Reebok Classic Leather combines timeless style with modern comfort. The leather upper provides durability while the cushioned midsole offers all-day comfort.",
        category: "Lifestyle",
        colors: ["white", "black", "navy"],
        sizes: [38, 39, 40, 41, 42, 43],
        price: 80,
        isOnSale: false,
        mainImage: "/assets/img/shoes/img3.jpg",
        inStock: true,
        rating: 4.3,
        reviews: 750,
        tags: ["classic"],
        material: ["Leather", "Synthetic", "Rubber"],
        gender: "Unisex",
        date: "2025-1-02"
    },
    {
        id: 4,
        name: "Chuck Taylor All Star",
        brand: "Converse",
        description: "The iconic Chuck Taylor All Star features a canvas upper, rubber toe cap, and vulcanized rubber sole. A timeless classic that never goes out of style.",
        category: "Lifestyle",
        colors: ["black", "white", "red", "blue"],
        sizes: [37, 38, 39, 40, 41, 42, 43],
        price: 45,
        originalPrice: 60,
        isOnSale: true,
        mainImage: "/assets/img/shoes/img4.jpg",
        inStock: true,
        rating: 4.6,
        reviews: 2000,
        tags: ["classic", "popular", "sale"],
        material: ["Canvas", "Rubber", "Metal Eyelets"],
        gender: "Unisex",
        date: "2025-1-05"
    },
    {
        id: 5,
        name: "Old Skool",
        brand: "Vans",
        description: "The Vans Old Skool features the iconic side stripe and durable canvas upper. Perfect for skateboarding or casual wear.",
        category: "Skateboarding",
        colors: ["black", "white", "red", "blue"],
        sizes: [38, 39, 40, 41, 42, 43],
        price: 65,
        isOnSale: false,
        mainImage: "/assets/img/shoes/img5.jpg",
        inStock: true,
        rating: 4.4,
        reviews: 1500,
        tags: ["popular"],
        material: ["Canvas", "Suede", "Rubber"],
        gender: "Unisex",
        date: "2025-1-05"
    },
    {
        id: 6,
        name: "990v5",
        brand: "New Balance",
        description: "The New Balance 990v5 combines premium materials with advanced cushioning technology. Perfect for runners who demand both comfort and style.",
        category: "Running",
        colors: ["gray", "black", "white"],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        price: 175,
        isOnSale: false,
        mainImage: "/assets/img/shoes/img6.jpg",
        inStock: true,
        rating: 4.8,
        reviews: 850,
        tags: ["premium"],
        material: ["Mesh", "Suede", "ENCAP Midsole"],
        gender: "Men",
        date: "2025-1-09"
    },
    {
        id: 7,
        name: "Cloud Runner",
        brand: "On Running",
        description: "The Cloud Runner features On's signature CloudTec cushioning for a smooth, responsive ride. Perfect for long-distance runners.",
        category: "Running",
        colors: ["white", "black", "blue"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        price: 140,
        isOnSale: false,
        mainImage: "/assets/img/shoes/img7.jpg",
        inStock: true,
        rating: 4.6,
        reviews: 600,
        tags: ["new"],
        material: ["Engineered Mesh", "CloudTec", "Speedboard"],
        gender: "Women",
        date: "2025-1-18"
    },
    {
        id: 8,
        name: "RS-X",
        brand: "Puma",
        description: "The Puma RS-X combines retro style with modern comfort. The chunky sole and bold design make it a standout sneaker.",
        category: "Lifestyle",
        colors: ["white", "black", "red", "blue"],
        sizes: [38, 39, 40, 41, 42, 43],
        price: 110,
        isOnSale: false,
        mainImage: "/assets/img/shoes/img8.jpg",
        inStock: true,
        rating: 4.4,
        reviews: 700,
        tags: ["trending"],
        material: ["Mesh", "Synthetic", "RS Foam"],
        gender: "Men",
        date: "2025-1-08"
    },
    {
        id: 9,
        name: "Gel-Kayano 28",
        brand: "ASICS",
        description: "The ASICS Gel-Kayano 28 provides exceptional stability and cushioning for runners. Features FlyteFoam technology for lightweight comfort.",
        category: "Running",
        colors: ["white", "black", "blue"],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        price: 160,
        isOnSale: false,
        mainImage: "/assets/img/shoes/img9.jpg",
        inStock: true,
        rating: 4.7,
        reviews: 900,
        tags: ["premium"],
        material: ["Engineered Mesh", "FlyteFoam", "GEL Technology"],
        gender: "Women",
        date: "2025-1-09"
    },
    {
        id: 10,
        name: "Classic Clog",
        brand: "Crocs",
        description: "The Classic Clog features Croslite foam construction for lightweight comfort. Perfect for casual wear and water activities.",
        category: "Casual",
        colors: ["black", "white", "blue", "pink"],
        sizes: [36, 37, 38, 39, 40, 41, 42],
        price: 50,
        isOnSale: false,
        mainImage: "/assets/img/shoes/img10.jpg",
        inStock: true,
        rating: 4.2,
        reviews: 2500,
        tags: ["casual"],
        material: ["Croslite", "Synthetic", "Rubber"],
        gender: "Unisex",
        date: "2025-1-10"
    },
    {
        id: 11,
        name: "Air Force 1",
        brand: "Nike",
        description: "The iconic Air Force 1 features a leather upper and Air cushioning for all-day comfort. A timeless classic that never goes out of style.",
        category: "Lifestyle",
        colors: ["black", "white", "blue", "pink", "green", "purple"],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        price: 80,
        originalPrice: 100,
        isOnSale: true,
        mainImage: "/assets/img/shoes/img11.jpg",
        inStock: true,
        rating: 4.8,
        reviews: 3000,
        tags: ["classic", "popular", "sale"],
        material: ["Leather", "Nike Air", "Rubber"],
        gender: "Men",
        date: "2025-1-20"
    },
    {
        id: 12,
        name: "Superstar",
        brand: "Adidas",
        description: "The Adidas Superstar features the iconic shell toe and three stripes. A classic sneaker that's perfect for everyday wear.",
        category: "Lifestyle",
        colors: ["black", "white", "blue", "pink", "green", "purple"],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        price: 90,
        isOnSale: false,
        mainImage: "/assets/img/shoes/img12.jpg",
        inStock: true,
        rating: 4.7,
        reviews: 2800,
        tags: ["classic", "popular"],
        material: ["Leather", "Shell Toe", "Rubber"],
        gender: "Women",
        date: "2025-1-22"
    },
    {
        id: 13,
        name: "Classic Leather",
        brand: "Reebok",
        description: "The Reebok Classic Leather combines timeless style with modern comfort. The leather upper provides durability while the cushioned midsole offers all-day comfort.",
        category: "Lifestyle",
        colors: ["black", "white", "blue", "pink", "green", "purple"],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        price: 85,
        isOnSale: false,
        mainImage: "/assets/img/shoes/img13.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 2200,
        tags: ["classic"],
        material: ["Leather", "EVA Midsole", "Rubber"],
        gender: "Unisex",
        date: "2025-1-27"
    },
    {
        id: 14,
        name: "Old Skool",
        brand: "Vans",
        description: "The Vans Old Skool features the iconic side stripe and durable canvas upper. Perfect for skateboarding or casual wear.",
        category: "Skateboarding",
        colors: ["black", "white", "blue", "pink", "green", "purple"],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        price: 70,
        isOnSale: false,
        mainImage: "/assets/img/shoes/img14.jpg",
        inStock: true,
        rating: 4.6,
        reviews: 1800,
        tags: ["popular"],
        material: ["Canvas", "Suede", "Vulcanized Rubber"],
        gender: "Men",
        date: "2025-1-28"
    },
    {
        id: 15,
        name: "Classic Clog",
        brand: "Crocs",
        description: "The Classic Clog features Croslite foam construction for lightweight comfort. Perfect for casual wear and water activities.",
        category: "Casual",
        colors: ["black", "white", "blue", "pink", "green", "purple"],
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        price: 40,
        originalPrice: 55,
        isOnSale: true,
        mainImage: "/assets/img/shoes/img15.jpg",
        inStock: true,
        rating: 4.3,
        reviews: 2000,
        tags: ["casual", "sale"],
        material: ["Croslite", "Synthetic", "Rubber"],
        gender: "Women",
        date: "2025-1-30"
    }
];

// Filter functions
export const filterByGender = (shoes: Shoe[], gender: string) => {
    shoes = shoes.filter(shoe => shoe.gender === "Unisex");
    return shoes.filter(shoe => shoe.gender === gender);
};

export const filterByCategory = (shoes: Shoe[], category: string) => {
    return shoes.filter(shoe => shoe.category === category);
};

export const filterByPrice = (shoes: Shoe[], minPrice: number, maxPrice: number) => {
    return shoes.filter(shoe => shoe.price >= minPrice && shoe.price <= maxPrice);
};

export const filterByBrand = (shoes: Shoe[], brand: string) => {
    return shoes.filter(shoe => shoe.brand === brand);
};

export const filterBySize = (shoes: Shoe[], size: number) => {
    return shoes.filter(shoe => shoe.sizes.includes(size));
};

export const filterByColor = (shoes: Shoe[], color: string) => {
    return shoes.filter(shoe => shoe.colors.includes(color));
};

export const filterByRating = (shoes: Shoe[], minRating: number) => {
    return shoes.filter(shoe => shoe.rating >= minRating);
};

export const filterByInStock = (shoes: Shoe[]) => {
    return shoes.filter(shoe => shoe.inStock);
};

export const filterByTags = (shoes: Shoe[], tag: string) => {
    return shoes.filter(shoe => shoe.tags.includes(tag));
};

export const filterByDate = (shoes: Shoe[], startDate: string, endDate: string) => {
    return shoes.filter(shoe => {
        const shoeDate = new Date(shoe.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return shoeDate >= start && shoeDate <= end;
    });
}; 