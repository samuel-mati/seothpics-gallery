
// Mock data for images
export const mockImages = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    alt: "Modern architecture building",
    photographer: "Alex Wong",
    likes: 234,
    width: 1200,
    height: 1800,
    categories: ["Architecture", "Urban"]
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Orange flowers in bloom",
    photographer: "Maria Johnson",
    likes: 512,
    width: 1600,
    height: 1066,
    categories: ["Nature", "Flowers"]
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Forest trees in sunlight",
    photographer: "Thomas Rivers",
    likes: 178,
    width: 1200,
    height: 1800,
    categories: ["Nature", "Forest"]
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Computer code on screen",
    photographer: "Sam Tech",
    likes: 421,
    width: 1600,
    height: 900,
    categories: ["Technology", "Code"]
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    alt: "Sunlight through forest",
    photographer: "Emily Green",
    likes: 315,
    width: 1200,
    height: 800,
    categories: ["Nature", "Forest"]
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    alt: "Modern architecture detail",
    photographer: "Robert Smith",
    likes: 187,
    width: 1600,
    height: 2400,
    categories: ["Architecture", "Modern"]
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1432839364048-43dae74c2e53",
    alt: "Mountain landscape",
    photographer: "Peter Alpine",
    likes: 259,
    width: 1600,
    height: 1066,
    categories: ["Nature", "Mountains"]
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    alt: "Aerial mountain view",
    photographer: "Sarah Heights",
    likes: 492,
    width: 1600,
    height: 900,
    categories: ["Nature", "Mountains"]
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    alt: "Waterfall in mountains",
    photographer: "Michael Waters",
    likes: 345,
    width: 1200,
    height: 1800,
    categories: ["Nature", "Water"]
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Mountain lake reflection",
    photographer: "Laura Lake",
    likes: 567,
    width: 1600,
    height: 1066,
    categories: ["Nature", "Water"]
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
    alt: "Modern building facade",
    photographer: "Chris Construct",
    likes: 124,
    width: 1200,
    height: 1600,
    categories: ["Architecture", "Urban"]
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c",
    alt: "City street at night",
    photographer: "Nick Urban",
    likes: 231,
    width: 1600,
    height: 900,
    categories: ["Urban", "Night"]
  }
];

// Extract unique categories from images
export const getCategories = () => {
  const categoriesSet = new Set<string>();
  mockImages.forEach(image => {
    image.categories.forEach(category => {
      categoriesSet.add(category);
    });
  });
  return Array.from(categoriesSet);
};
