import { useState, Fragment } from "react";
import {
    Grid,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Box,
    Paper
} from "@mui/material";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Product/Action";

const initialSizes = [
    { name: "S", quantity: 0 },
    { name: "M", quantity: 0 },
    { name: "L", quantity: 0 },
];

const CreateProductForm = () => {
    const [productData, setProductData] = useState({
        imageUrl: "",
        brand: "",
        title: "",
        color: "",
        discountedPrice: "",
        price: "",
        discountPercent: "",
        size: initialSizes,
        quantity: "",
        topLevelCategory: "",
        secondLevelCategory: "",
        thirdLevelCategory: "",
        description: "",
    });

    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSizeChange = (e, index) => {
        const { name, value } = e.target;
        const sizes = [...productData.size];
        sizes[index][name] = value;
        setProductData({ ...productData, size: sizes });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct({ data: productData, jwt }));
    };

    return (
        <Fragment>
            <Typography variant="h4" align="center" sx={{ mb: 4 }}>
                Add New Product
            </Typography>

            <Box display="flex" justifyContent="center">
                <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 900 }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            {/* Image */}
                            <Grid item xs={12}>
                                <TextField fullWidth label="Image URL" name="imageUrl" onChange={handleChange} />
                            </Grid>

                            {/* Basic Info */}
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Brand" name="brand" onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Title" name="title" onChange={handleChange} />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Color" name="color" onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Total Quantity" name="quantity" onChange={handleChange} />
                            </Grid>

                            {/* Pricing */}
                            <Grid item xs={12} sm={4}>
                                <TextField fullWidth label="Price" name="price" onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField fullWidth label="Discounted Price" name="discountedPrice" onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField fullWidth label="Discount %" name="discountPercent" onChange={handleChange} />
                            </Grid>

                            {/* Categories */}
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Top Category</InputLabel>
                                    <Select name="topLevelCategory" onChange={handleChange}>
                                        <MenuItem value="Men">Men</MenuItem>
                                        <MenuItem value="Women">Women</MenuItem>
                                        <MenuItem value="Kids">Kids</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Second Category</InputLabel>
                                    <Select name="secondLevelCategory" onChange={handleChange}>
                                        <MenuItem value="clothing">Clothing</MenuItem>
                                        <MenuItem value="accessories">Accessories</MenuItem>
                                        <MenuItem value="brands">Brands</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Third Category</InputLabel>
                                    <Select name="thirdLevelCategory" onChange={handleChange}>
                                        <MenuItem value="tops">Tops</MenuItem>
                                        <MenuItem value="women_dress">Dresses</MenuItem>
                                        <MenuItem value="t-shirts">T-Shirts</MenuItem>
                                        <MenuItem value="saree">Saree</MenuItem>
                                        <MenuItem value="lehnga_choli">Lehnga Choli</MenuItem>
                                        <MenuItem value="mens_kurta">Mens Kurta</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            {/* Description */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Description"
                                    name="description"
                                    onChange={handleChange}
                                />
                            </Grid>

                            {/* Sizes */}
                            <Grid item xs={12}>
                                <Typography variant="h6">Sizes</Typography>
                            </Grid>

                            {productData.size.map((size, index) => (
                                <Grid container item spacing={2} key={index}>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Size"
                                            name="name"
                                            value={size.name}
                                            onChange={(e) => handleSizeChange(e, index)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            type="number"
                                            label="Quantity"
                                            name="quantity"
                                            value={size.quantity}
                                            onChange={(e) => handleSizeChange(e, index)}
                                        />
                                    </Grid>
                                </Grid>
                            ))}

                            {/* Submit */}
                            <Grid item xs={12} textAlign="center">
                                <Button type="submit" variant="contained" size="large" sx={{ px: 6, py: 1.5 }}>
                                    Add Product
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Box>
        </Fragment>
    );
};

export default CreateProductForm;
