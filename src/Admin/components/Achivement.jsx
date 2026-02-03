import styled from "@emotion/styled";
import { Button, CardContent, Typography } from "@mui/material";
import { positions } from "@mui/system";
import React from "react";
import { Card } from "@mui/material";

const TrignleImage = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: "absolute",
});

const TrofyImage = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: "absolute",
});

const Achivement = () => {
    return (
        <Card sx={{ position: "relative",  overflow: "hidden" }}>
  <CardContent
    sx={{
      paddingRight: "120px", 
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 600 }}>
      Shop With Riwaaz
    </Typography>

    <Typography sx={{ mt: 1 }}>
      Congratulations! 🎉
    </Typography>

    <Typography variant="h5" sx={{ fontWeight: 700 }}>
      500k
    </Typography>

    <Button
      size="small"
      variant="contained"
      sx={{ mt: 2 }}
    >
      View Sales
    </Button>

    {/* Trophy */}
    <TrofyImage
      src="https://tse2.mm.bing.net/th/id/OIP.FZ1_O8gJwXy602Me1YOFTQHaIc?pid=Api&P=0&h=180"
      alt="trophy"
      sx={{
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
        width: 80,
        height: "auto",
      }}
    />
  </CardContent>
</Card>

    )
}

export default Achivement