import { Box, Typography } from '@mui/material'
import React from 'react'

const getSymmetricPolarCoordinates = (r: number, theta: number) => {
  const symmetricTheta = -theta;
  return { r, theta: symmetricTheta * (180 / Math.PI) };
};

const TaskA = () => {
  return (
    <Box className="mt-8 text-center">
      <Typography variant="h6">A) Полярні координати симетричної точки</Typography>
      <Typography className="mt-4">
        Точка C(3, -π/4) симетрична відносно полярної вісі має координати:
      </Typography>
      <Typography>
        R = {getSymmetricPolarCoordinates(3, Math.PI / 4).r.toFixed(2)}, &Theta; = {getSymmetricPolarCoordinates(3, Math.PI / 4).theta.toFixed(2)}°
      </Typography>
    </Box>
  )
}

export default TaskA
