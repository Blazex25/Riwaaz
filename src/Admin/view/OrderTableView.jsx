import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../State/Admin/Order/Action";

import {
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  AvatarGroup,
  Button
} from "@mui/material";

const OrderTableView = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <Card>
      <CardHeader title="Recent Orders" />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {adminOrder?.orders?.map((item) => (
              <TableRow key={item._id}>
                {/* Images */}
                <TableCell>
                  <AvatarGroup max={2}>
                    {item?.orderItems?.map((orderItem) => (
                      <Avatar
                        key={orderItem?._id}
                        src={orderItem?.product?.imageUrl}
                      />
                    ))}
                  </AvatarGroup>
                </TableCell>

                {/* Product titles */}
                <TableCell>
                  {item?.orderItems?.map((orderItem) => (
                    <p key={orderItem?._id}>
                      {orderItem?.product?.title}
                    </p>
                  ))}
                </TableCell>

                <TableCell>{item._id}</TableCell>
                <TableCell>₹{item.totalPrice}</TableCell>

                <TableCell>
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: "20px",
                      color: "#fff",
                      fontSize: "12px",
                      backgroundColor:
                        item.orderStatus === "CONFIRMED"
                          ? "#369236"
                          : item.orderStatus === "SHIPPED"
                          ? "#4141ff"
                          : item.orderStatus === "PLACED"
                          ? "#02B290"
                          : "#888"
                    }}
                  >
                    {item.orderStatus}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Card>
  );
};

export default OrderTableView;
