import React from 'react'
import { Box, Typography } from '@mui/material'

const TaskG2 = () => {
  return (
    (
      <Box className="mt-8 text-center">
        <Typography variant="h6">Ґ) Старі декартові координати початку O' нової системи</Typography>
        <Typography className="mt-4">
          Формула перетворення: x = x', y = y' - 1.
        </Typography>
        <Typography>Старі координати O'(0, -1)</Typography>
      </Box>
    )
  )
}

export default TaskG2
