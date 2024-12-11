import React from 'react'
import { Box, Typography } from '@mui/material'

const getPolarCoordinates = (x: number, y: number) => {
  const r = Math.sqrt(x * x + y * y);
  const theta = Math.atan2(y, x) * (180 / Math.PI);
  return { r, theta };
};


const TaskV = () => {
  return (
    <Box className="mt-8 text-center">
      <Typography variant="h6">В) Полярні координати точки</Typography>
      <Typography className="mt-4">
        Точка C(&radic;3, 1) має полярні координати: R = {getPolarCoordinates(Math.sqrt(3), 1).r.toFixed(2)}, &Theta; = {getPolarCoordinates(Math.sqrt(3), 1).theta.toFixed(2)}°
      </Typography>
    </Box>
  )
}

export default TaskV
