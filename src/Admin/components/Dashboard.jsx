import { Grid } from "@mui/material";
import React from "react";
import Achivement from "./Achivement"
import MonthlyOverview from "./MonthlyOverview";
import OrderTableView from "../view/OrderTableView"


const Dashboard = () => {
    return (
        <div className="p-6">
            <Grid container spacing={2}>
                <Grid className='shadow-lg shadow-gray-600' item xs={12} md={4} display="flex"  >
                    <Achivement />
                </Grid>
                <Grid className='shadow-lg shadow-gray-600' item xs={12} md={8} display="flex">
                    <MonthlyOverview />
                </Grid>
                <Grid item xs={12} sx={{ width: "100%" }}>
                    <OrderTableView />
                </Grid>

            </Grid>
        </div>
    )
}

export default Dashboard;