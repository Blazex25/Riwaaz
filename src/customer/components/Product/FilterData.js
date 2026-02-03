export const colors = [
    "White",
    "Black",
    "Red",
    "Maroon",
    "Yellow",
    "Green",
    "Pink",
    "Blue",
];

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            {value: 'white'||'White', label: 'White'},
            {value: 'black'||'Black', label: 'Black'},
            {value: 'red', label: 'Red'},
            {value: 'maroon', label: 'Maroon'},
            {value: 'yellow', label: 'Yellow'},
            {value: 'green', label: 'Green'},
            {value: 'pink', label: 'Pink'},
            {value: 'blue', label: 'Blue'},
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            {value: 'XS', label: 'XS'},
            {value: 'S', label: 'S'},
            {value: 'M', label: 'M'},
            {value: 'L', label: 'L'},
            {value: 'XL', label: 'XL'},
            {value: 'XXL', label: 'XXL'},
        ],
    },
];

export const singleFilter = [
    {
        id: 'price',
        name: 'Price',
        options: [
            {value: '500-5000', label: '₹500-₹5000'},
            {value: '5000-10000', label: '₹5000-₹10000'},
            {value: '10000-15000', label: '₹10000-₹15000'},
            {value: '15000-20000', label: '₹15000-₹20000'},
            {value: '20000+', label: '₹20000+'},
        ],
    },
    {
        id: 'discount',
        name: 'Discount Range',
        options: [
            {value: '10-20', label: '10-20%'},
            {value: '20-30', label: '20-30%'},
            {value: '30-40', label: '30-40%'},
            {value: '40-50', label: '40-50%'},
            {value: '50+', label: '50%+'},
        ],
    },
    {
        id: 'stock',
        name: 'Availability',
        options: [
            {value: 'inStock', label: 'In Stock'},
            {value: 'outOfStock', label: 'Out of Stock'},
        ],
    },
];

export const sortOptions = [
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
];