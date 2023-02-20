import { Rating } from "@mui/material";
import { useState } from "react";

const CalificacionEstrella = ({stars}) => {
  return (
    <div>
      <Rating name="half-rating-read" value={stars || 0} precision={0.1} readOnly />
    </div>
  );
};

export default CalificacionEstrella;
