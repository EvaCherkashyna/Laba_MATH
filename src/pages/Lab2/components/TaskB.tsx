import { Box, Typography } from '@mui/material'
import React from 'react'

const TaskB = () => {
  return (
    <Box className="mt-8 text-center">
      <Typography variant="h6">Б) Масштабовані координати точок</Typography>
      <Typography variant="inherit"> Нова одиниця довжини буде втричі більша: Тобто, якщо кожна одинична відстань буде втричі більшою, це означає, що нові координати будуть отримані діленням на 3.</Typography>
      <Typography className="mt-4">
        Точка A(9): {9 / 3}, Точка B(5): {(5 / 3).toFixed(2)}
      </Typography>
    </Box>
  )
}

export default TaskB
