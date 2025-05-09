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

const ImgPath = "/assets/img/Shoes/";

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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        mainImage: "/assets/img/shoes/Shoes1.jpg",
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
        name: "Air Jordan 1 High",
        brand: "Nike",
        description: "The Air Jordan 1 High combines iconic basketball heritage with modern style. Features premium leather construction and Nike Air cushioning.",
        category: "Basketball",
        colors: ["red", "black", "white", "blue"],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45],
        price: 170,
        isOnSale: false,
        mainImage: "/assets/img/shoes/Shoes13/Shoes1.jpg",
        inStock: true,
        rating: 4.9,
        reviews: 2200,
        tags: ["premium", "basketball"],
        material: ["Leather", "Nike Air", "Rubber"],
        gender: "Men",
        date: "2025-1-15"
    },
    {
        id: 14,
        name: "NMD R1",
        brand: "Adidas",
        description: "The NMD R1 features Boost cushioning and a Primeknit upper for ultimate comfort. The distinctive EVA plugs add a modern touch.",
        category: "Lifestyle",
        colors: ["black", "white", "red", "blue"],
        sizes: [39, 40, 41, 42, 43, 44],
        price: 130,
        originalPrice: 160,
        isOnSale: true,
        mainImage: "/assets/img/shoes/Shoes14/Shoes1.jpg",
        inStock: true,
        rating: 4.6,
        reviews: 1800,
        tags: ["trending", "sale"],
        material: ["Primeknit", "Boost", "EVA"],
        gender: "Unisex",
        date: "2025-1-16"
    },
    {
        id: 15,
        name: "Classic Leather Legacy",
        brand: "Reebok",
        description: "The Classic Leather Legacy combines vintage style with modern comfort. Features a premium leather upper and cushioned midsole.",
        category: "Lifestyle",
        colors: ["white", "black", "navy", "red"],
        sizes: [38, 39, 40, 41, 42, 43],
        price: 85,
        isOnSale: false,
        mainImage: "/assets/img/shoes/Shoes15/Shoes1.jpg",
        inStock: true,
        rating: 4.4,
        reviews: 950,
        tags: ["classic"],
        material: ["Leather", "Synthetic", "Rubber"],
        gender: "Unisex",
        date: "2025-1-17"
    },
    {
        id: 16,
        name: "One Star",
        brand: "Converse",
        description: "The One Star features a premium leather upper and signature star logo. A modern take on a classic design.",
        category: "Lifestyle",
        colors: ["black", "white", "red", "blue"],
        sizes: [37, 38, 39, 40, 41, 42, 43],
        price: 70,
        isOnSale: false,
        mainImage: "/assets/img/shoes/Shoes16/Shoes1.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 1200,
        tags: ["classic"],
        material: ["Leather", "Rubber", "Canvas"],
        gender: "Unisex",
        date: "2025-1-18"
    },
    {
        id: 17,
        name: "Sk8-Hi",
        brand: "Vans",
        description: "The Sk8-Hi features a high-top design with the iconic side stripe. Perfect for skateboarding or street style.",
        category: "Skateboarding",
        colors: ["black", "white", "red", "blue"],
        sizes: [38, 39, 40, 41, 42, 43],
        price: 75,
        isOnSale: false,
        mainImage: "/assets/img/shoes/Shoes17/Shoes1.jpg",
        inStock: true,
        rating: 4.6,
        reviews: 1600,
        tags: ["popular"],
        material: ["Canvas", "Suede", "Rubber"],
        gender: "Unisex",
        date: "2025-1-19"
    },
    {
        id: 18,
        name: "574 Classic",
        brand: "New Balance",
        description: "The 574 Classic combines retro style with modern comfort. Features ENCAP midsole technology for superior cushioning.",
        category: "Lifestyle",
        colors: ["gray", "black", "white", "blue"],
        sizes: [39, 40, 41, 42, 43, 44],
        price: 100,
        isOnSale: false,
        mainImage: "/assets/img/shoes/Shoes18/Shoes1.jpg",
        inStock: true,
        rating: 4.7,
        reviews: 1400,
        tags: ["classic"],
        material: ["Mesh", "Suede", "ENCAP"],
        gender: "Unisex",
        date: "2025-1-20"
    },
    {
        id: 19,
        name: "Cloud X",
        brand: "On Running",
        description: "The Cloud X features On's signature CloudTec cushioning and a lightweight design. Perfect for both running and training.",
        category: "Running",
        colors: ["white", "black", "blue"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        price: 150,
        isOnSale: false,
        mainImage: "/assets/img/shoes/Shoes19/Shoes1.jpg",
        inStock: true,
        rating: 4.8,
        reviews: 800,
        tags: ["premium"],
        material: ["Engineered Mesh", "CloudTec", "Speedboard"],
        gender: "Men",
        date: "2025-1-21"
    },
    {
        id: 20,
        name: "Future Rider",
        brand: "Puma",
        description: "The Future Rider combines retro running style with modern comfort. Features a lightweight design and responsive cushioning.",
        category: "Lifestyle",
        colors: ["white", "black", "red", "blue"],
        sizes: [38, 39, 40, 41, 42, 43],
        price: 80,
        originalPrice: 100,
        isOnSale: true,
        mainImage: ImgPath + "Shoes20/Shoes1.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 1100,
        tags: ["trending", "sale"],
        material: ["Mesh", "Synthetic", "Rubber"],
        gender: "Unisex",
        date: "2025-1-22"
    },
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

export const staticShoes = [
    {
        id: 1,
        name: "Puma Lows 1",
        brand: "Puma",
        description: "The Puma Lows 1 delivers visible cushioning underfoot and a sleek, modern design. The Puma Lows unit provides exceptional comfort and impact protection.",
        category: "Lifestyle",
        colors: ["white"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        price: 150,
        originalPrice: 180,
        isOnSale: true,
        mainImage: "/assets/img/Shoes/Shoes1/Shoes1.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 1200,
        tags: ["new", "popular", "sale"],
        material: ["Mesh", "Synthetic", "Rubber"],
        gender: "Unisex",
        date: "2025-1-01"
    },
    {
        id: 2,
        name: "Nike Air Max",
        brand: "Nike",
        description: "The Nike Air Max delivers visible cushioning underfoot and a sleek, modern design. The Nike Air Max unit provides exceptional comfort and impact protection.",
        category: "Running",
        colors: ["white", "red", "blue"],
        sizes: [41, 42, 43, 44, 45],
        price: 120,
        isOnSale: false,
        mainImage: "/assets/img/Shoes/Shoes2/Shoes1.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 1200,
        tags: ["new", "popular", "sale"],
        material: ["Mesh", "Synthetic", "Rubber"],
        gender: "Men",
        date: "2025-1-01"
    },
    {
        id: 3,
        name: "Nike Air Force 1",
        brand: "Puma",
        description: "The Nike Air Force delivers visible cushioning underfoot and a sleek, modern design. The Nike Air Force unit provides exceptional comfort and impact protection.",
        category: "Lifestyle",
        colors: ["black"],
        sizes: [43, 44, 45],
        price: 180,
        isOnSale: false,
        mainImage: "/assets/img/Shoes/Shoes3/Shoes1.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 1200,
        tags: ["new", "popular", "sale"],
        material: ["Mesh", "Synthetic", "Rubber"],
        gender: "Men",
        date: "2025-1-01"
    },
    {
        id: 4,
        name: "Puma Navy Forest",
        brand: "Puma",
        description: "The Puma Navy Forest delivers visible cushioning underfoot and a sleek, modern design. The Puma Navy Forest unit provides exceptional comfort and impact protection.",
        category: "Walking",
        colors: ["black"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        price: 150,
        originalPrice: 200,
        isOnSale: true,
        mainImage: "/assets/img/Shoes/Shoes4/Shoes1.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 1200,
        tags: ["new", "popular", "sale"],
        material: ["Mesh", "Synthetic", "Rubber"],
        gender: "Men",
        date: "2025-1-01"
    },
    {
        id: 5,
        name: "Jordan 4 Low Mix",
        brand: "Nike",
        description: "The Jordan 4 Low Mix delivers visible cushioning underfoot and a sleek, modern design. The Jordan 4 Low Mix unit provides exceptional comfort and impact protection.",
        category: "Lifestyle",
        colors: ["black"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        price: 190,
        isOnSale: false,
        mainImage: "/assets/img/Shoes/Shoes5/Shoes1.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 1200,
        tags: ["new", "popular", "sale"],
        material: ["Mesh", "Synthetic", "Rubber"],
        gender: "Unisex",
        date: "2025-1-01"
    },
    {
        id: 6,
        name: "Adidas Ultra Boost",
        brand: "Adidas",
        description: "The Adidas Ultra Boost features responsive Boost cushioning and a Primeknit upper for a snug, supportive fit. Perfect for running or everyday wear.",
        category: "Running",
        colors: ["white", "black"],
        sizes: [39, 40, 41, 42, 43, 44],
        price: 180,
        originalPrice: 220,
        isOnSale: true,
        mainImage: "/assets/img/Shoes/Shoes6/Shoes1.jpg",
        inStock: true,
        rating: 4.7,
        reviews: 950,
        tags: ["premium", "sale"],
        material: ["Primeknit", "Boost", "Continental Rubber"],
        gender: "Unisex",
        date: "2025-1-15"
    },
    {
        id: 7,
        name: "New Balance 574",
        brand: "New Balance",
        description: "The New Balance 574 combines classic style with modern comfort. Features ENCAP midsole technology for superior support and durability.",
        category: "Lifestyle",
        colors: ["gray", "navy"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        price: 110,
        isOnSale: false,
        mainImage: "/assets/img/Shoes/Shoes7/Shoes1.jpg",
        inStock: true,
        rating: 4.6,
        reviews: 850,
        tags: ["classic", "popular"],
        material: ["Suede", "Mesh", "ENCAP"],
        gender: "Men",
        date: "2025-1-20"
    },
    {
        id: 8,
        name: "Vans Sk8-Hi",
        brand: "Vans",
        description: "The Vans Sk8-Hi features a high-top design with the iconic side stripe. Perfect for skateboarding or street style.",
        category: "Skateboarding",
        colors: ["black", "white"],
        sizes: [38, 39, 40, 41, 42, 43],
        price: 85,
        originalPrice: 95,
        isOnSale: true,
        mainImage: "/assets/img/Shoes/Shoes8/Shoes1.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 1200,
        tags: ["classic", "sale"],
        material: ["Canvas", "Suede", "Vulcanized Rubber"],
        gender: "Unisex",
        date: "2025-1-25"
    },
    {
        id: 9,
        name: "ASICS Gel-Nimbus",
        brand: "ASICS",
        description: "The ASICS Gel-Nimbus provides exceptional cushioning and support for long-distance runners. Features GEL technology and FlyteFoam for superior comfort.",
        category: "Running",
        colors: ["blue", "silver"],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        price: 160,
        isOnSale: false,
        mainImage: "/assets/img/Shoes/Shoes9/Shoes1.jpg",
        inStock: true,
        rating: 4.8,
        reviews: 750,
        tags: ["premium", "new"],
        material: ["Engineered Mesh", "FlyteFoam", "GEL"],
        gender: "Women",
        date: "2025-1-28"
    },
    {
        id: 10,
        name: "Reebok Classic",
        brand: "Reebok",
        description: "The Reebok Classic combines timeless style with modern comfort. Features a soft leather upper and cushioned midsole for all-day wear.",
        category: "Lifestyle",
        colors: ["white", "navy"],
        sizes: [37, 38, 39, 40, 41, 42, 43],
        price: 90,
        originalPrice: 110,
        isOnSale: true,
        mainImage: "/assets/img/Shoes/Shoes10/Shoes1.jpg",
        inStock: true,
        rating: 4.4,
        reviews: 680,
        tags: ["classic", "sale"],
        material: ["Leather", "EVA Midsole", "Rubber"],
        gender: "Unisex",
        date: "2025-1-30"
    },
    {
        id: 11,
        name: "Nike Air Jordan 1",
        brand: "Nike",
        description: "The iconic Air Jordan 1 features a leather upper and Air cushioning for all-day comfort. A timeless classic that never goes out of style.",
        category: "Lifestyle",
        colors: ["black", "red"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        price: 180,
        originalPrice: 200,
        isOnSale: true,
        mainImage: "/assets/img/Shoes/Shoes11/Shoes1.jpg",
        inStock: true,
        rating: 4.8,
        reviews: 2500,
        tags: ["classic", "popular", "sale"],
        material: ["Leather", "Nike Air", "Rubber"],
        gender: "Men",
        date: "2025-2-01"
    },
    {
        id: 12,
        name: "Adidas Samba",
        brand: "Adidas",
        description: "The Adidas Samba features a suede upper and gum rubber outsole. Perfect for both indoor sports and casual wear.",
        category: "Lifestyle",
        colors: ["white", "black"],
        sizes: [39, 40, 41, 42, 43, 44],
        price: 100,
        isOnSale: false,
        mainImage: "/assets/img/Shoes/Shoes12/Shoes1.jpg",
        inStock: true,
        rating: 4.7,
        reviews: 1800,
        tags: ["classic", "popular"],
        material: ["Suede", "Gum Rubber"],
        gender: "Unisex",
        date: "2025-2-05"
    },
    {
        id: 13,
        name: "New Balance 327",
        brand: "New Balance",
        description: "The New Balance 327 combines retro style with modern comfort. Features a suede and mesh upper with ENCAP midsole technology.",
        category: "Lifestyle",
        colors: ["gray", "navy"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        price: 120,
        isOnSale: false,
        mainImage: "/assets/img/Shoes/Shoes13/Shoes1.jpg",
        inStock: true,
        rating: 4.6,
        reviews: 950,
        tags: ["retro", "popular"],
        material: ["Suede", "Mesh", "ENCAP"],
        gender: "Unisex",
        date: "2025-2-10"
    },
    {
        id: 14,
        name: "Puma RS-X",
        brand: "Puma",
        description: "The Puma RS-X combines retro style with modern comfort. Features a chunky sole and bold design.",
        category: "Lifestyle",
        colors: ["white", "blue"],
        sizes: [39, 40, 41, 42, 43, 44],
        price: 110,
        originalPrice: 130,
        isOnSale: true,
        mainImage: "/assets/img/Shoes/Shoes14/Shoes1.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 800,
        tags: ["retro", "sale"],
        material: ["Mesh", "Synthetic", "RS Foam"],
        gender: "Men",
        date: "2025-2-15"
    },
    {
        id: 15,
        name: "Vans Old Skool",
        brand: "Vans",
        description: "The Vans Old Skool features the iconic side stripe and durable canvas upper. Perfect for skateboarding or casual wear.",
        category: "Skateboarding",
        colors: ["black", "white"],
        sizes: [38, 39, 40, 41, 42, 43],
        price: 85,
        isOnSale: false,
        mainImage: "/assets/img/Shoes/Shoes15/Shoes1.jpg",
        inStock: true,
        rating: 4.7,
        reviews: 1500,
        tags: ["classic", "popular"],
        material: ["Canvas", "Suede", "Vulcanized Rubber"],
        gender: "Unisex",
        date: "2025-2-20"
    },
    {
        id: 16,
        name: "ASICS Gel-Lyte III",
        brand: "ASICS",
        description: "The ASICS Gel-Lyte III features GEL technology for superior cushioning and a split tongue design for a unique look.",
        category: "Running",
        colors: ["white", "red"],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        price: 130,
        isOnSale: false,
        mainImage: "/assets/img/Shoes/Shoes16/Shoes1.jpg",
        inStock: true,
        rating: 4.6,
        reviews: 900,
        tags: ["premium", "new"],
        material: ["Mesh", "GEL", "FlyteFoam"],
        gender: "Men",
        date: "2025-2-25"
    },
    {
        id: 17,
        name: "Reebok Classic",
        brand: "Reebok",
        description: "The Reebok Classic combines timeless style with modern comfort. Features a soft leather upper and cushioned midsole.",
        category: "Lifestyle",
        colors: ["white", "navy"],
        sizes: [37, 38, 39, 40, 41, 42, 43],
        price: 90,
        originalPrice: 110,
        isOnSale: true,
        mainImage: "/assets/img/Shoes/Shoes17/Shoes1.jpg",
        inStock: true,
        rating: 4.4,
        reviews: 680,
        tags: ["classic", "sale"],
        material: ["Leather", "EVA Midsole", "Rubber"],
        gender: "Unisex",
        date: "2025-3-01"
    },
    {
        id: 18,
        name: "Nike Dunk Low",
        brand: "Nike",
        description: "The Nike Dunk Low features a leather upper and Air cushioning. A versatile sneaker perfect for everyday wear.",
        category: "Lifestyle",
        colors: ["green", "white"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        price: 110,
        isOnSale: false,
        mainImage: "/assets/img/Shoes/Shoes18/Shoes1.jpg",
        inStock: true,
        rating: 4.7,
        reviews: 1200,
        tags: ["popular", "new"],
        material: ["Leather", "Nike Air", "Rubber"],
        gender: "Unisex",
        date: "2025-3-05"
    },
    {
        id: 19,
        name: "Adidas Forum Low",
        brand: "Adidas",
        description: "The Adidas Forum Low features a leather upper and classic three stripes design. A timeless basketball-inspired sneaker.",
        category: "Lifestyle",
        colors: ["white", "blue"],
        sizes: [39, 40, 41, 42, 43, 44],
        price: 100,
        originalPrice: 120,
        isOnSale: true,
        mainImage: "/assets/img/Shoes/Shoes19/Shoes1.jpg",
        inStock: true,
        rating: 4.5,
        reviews: 850,
        tags: ["classic", "sale"],
        material: ["Leather", "Rubber"],
        gender: "Men",
        date: "2025-3-10"
    },
    {
        id: 20,
        name: "New Balance 530",
        brand: "New Balance",
        description: "The New Balance 530 features a mesh and suede upper with ABZORB cushioning for superior comfort.",
        category: "Lifestyle",
        colors: ["silver", "navy"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        price: 140,
        isOnSale: false,
        mainImage: "/assets/img/Shoes/Shoes20/Shoes1.jpg",
        inStock: true,
        rating: 4.6,
        reviews: 750,
        tags: ["premium", "new"],
        material: ["Mesh", "Suede", "ABZORB"],
        gender: "Unisex",
        date: "2025-3-15"
    }
];