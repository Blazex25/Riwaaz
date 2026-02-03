import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Avatar,
    IconButton,
    Box,
} from "@mui/material";

import TrendingUp from "@mui/icons-material/TrendingUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const stats = [
    {
        title: "Sales",
        value: "245k",
        color: "#E5D68A",
        icon: <TrendingUp />,
    },
    {
        title: "Customers",
        value: "12.5k",
        color: "#22CB5C",
        icon: <AccountCircleIcon />,
    },
    {
        title: "Products",
        value: "1.54k",
        color: "#DE4839",
        icon: <SettingsCellIcon />,
    },
    {
        title: "Revenue",
        value: "88k",
        color: "#12B0E8",
        icon: <AttachMoneyIcon />,
    },
];

const MonthlyOverview = () => {
    return (
        <Card>
            <CardHeader
                title="Monthly Overview"
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
                subheader={
                    <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 600 }}>
                            Total 48.5% growth
                        </Box>{" "}
                        this month
                    </Typography>
                }
            />

            <CardContent sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    {stats.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        mr: 2,
                                        width: 44,
                                        height: 44,
                                        bgcolor: item.color + "33",
                                        color: item.color,
                                        
                                    }}
                                >
                                    {item.icon}
                                </Avatar>

                                <Box>
                                    <Typography variant="caption" >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h6">{item.value}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default MonthlyOverview;
