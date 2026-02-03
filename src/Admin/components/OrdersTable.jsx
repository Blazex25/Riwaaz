import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrders,
  shipOrder,
  deliverOrder,
  deleteOrder,
  confirmOrder
} from "../../State/Admin/Order/Action";

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
  Button,
  AvatarGroup,
  Menu,
  MenuItem
} from "@mui/material";

const OrdersTable = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const handleMenuOpen = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };

  const handleConfirmedOrder = async () => {
    await dispatch(confirmOrder(selectedOrderId));
    handleClose();
  };

  const handleShipedOrder = async () => {
    await dispatch(shipOrder(selectedOrderId));
    handleClose();
  };

  const handleDeliveredOrder = async () => {
    await dispatch(deliverOrder(selectedOrderId));
    handleClose();
  };

  const handleDeleteOrder = async (orderId) => {
    await dispatch(deleteOrder(orderId));
  };

  return (
    <div className="p-10">
      <Card className="mt-2">
        <CardHeader title="All Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {adminOrder?.orders?.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    <AvatarGroup max={2} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar
                          key={orderItem._id}
                          src={orderItem.product.imageUrl}
                        />
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  <TableCell>
                    {item.orderItems.map((orderItem) => (
                      <p key={orderItem._id}>{orderItem.product.title}</p>
                    ))}
                  </TableCell>

                  <TableCell>{item._id}</TableCell>
                  <TableCell>{item.totalPrice}</TableCell>

                  <TableCell>
                    <span
                      className={`text-white px-5 py-2 rounded-full ${
                        item.orderStatus === "CONFIRMED"
                          ? "bg-[#369236]"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-[#4141ff]"
                          : item.orderStatus === "PLACED"
                          ? "bg-[#02B290]"
                          : item.orderStatus === "PENDING"
                          ? "bg-[gray]"
                          : "bg-[#025720]"
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={(e) => handleMenuOpen(e, item._id)}
                    >
                      Status
                    </Button>
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteOrder(item._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* SINGLE MENU */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleConfirmedOrder}>Confirm Order</MenuItem>
        <MenuItem onClick={handleShipedOrder}>Ship Order</MenuItem>
        <MenuItem onClick={handleDeliveredOrder}>Deliver Order</MenuItem>
      </Menu>
    </div>
  );
};

export default OrdersTable;
