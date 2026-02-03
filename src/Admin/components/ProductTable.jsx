import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findProducts, deleteProduct } from "../../State/Product/Action";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import { Card, CardHeader } from "@mui/material";



const ProductTable = () => {
    const dispatch = useDispatch();
    const  {products} = useSelector(store => store);
    console.log("Products in table:", products);
    const handleProductDelete = (productId) => {
        dispatch(deleteProduct(productId));
    }

    useEffect(() => {
        const data = {
            category: "",
            colors: [],
            sizes: [],
            minPrice:0,
            maxPrice : 100000,
            minDiscount: 0,
            sort:  "price_low",
            pageNumber: 0,
            pageSize: 10,
            stock: ""
        }
        dispatch(findProducts(data));

    }, [products.deletedProduct]);

    return (
        
        <div className="p-5">
            <Card className="mt-2">
                <CardHeader title="All Products" />
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Brand</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            <TableCell align="left">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.products?.content?.map((item) => (
                            <TableRow
                                key={item.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">
                                    <Avatar src={item.imageUrl}>
                                    </Avatar>
                                    </TableCell>
                                <TableCell align="left" scope="row">
                                    {item.title}
                                </TableCell>
                                <TableCell align="left">{item.brand}</TableCell>
                                <TableCell align="left">{item.category}</TableCell>
                                <TableCell align="left">{item.discountedPrice}</TableCell>
                                <TableCell align="left">{item.quantity}</TableCell>
                                <TableCell align="left">
                                    <Button onClick={()=>handleProductDelete(item._id)} variant="outlined" color="error">
                                        Delete
                                    </Button>
                                    </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Card>
            
        </div>
    )
}

export default ProductTable