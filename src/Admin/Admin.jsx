import React, { useState, useEffect } from "react";
import { CssBaseline, Drawer, ListItem, ListItemButton, ListItemIcon, Toolbar, useMediaQuery, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from "@mui/material/styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemText from "@mui/material/ListItemText";
import { Route, Routes, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductTable from "./components/ProductTable";
import OrderTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";

const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <InventoryIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingBagIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <PeopleIcon /> },
    { name: "AddProduct", path: "/admin/product/create", icon: <AddIcon /> },
];

const Admin = () => {
    const theme = useTheme();
    const islargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();


    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
            }}
        >
            <List>
                {menu.map((item) => (
                    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );

    return (
        <div className="flex h-screen w-full">
            <CssBaseline />

            {/* Sidebar */}
            <div className="w-[240px] border border-gray-300 shrink-0">
                {drawer}
            </div>

        
            <div className="flex-1 border border-blue-800 overflow-auto">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/product/create" element={<CreateProductForm />} />
                    <Route path="/products" element={<ProductTable />} />
                    <Route path="/orders" element={<OrderTable />} />
                    <Route path="/customers" element={<CustomersTable />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;
