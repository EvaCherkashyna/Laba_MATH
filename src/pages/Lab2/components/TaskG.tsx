import React from 'react'
import { Box, Typography } from '@mui/material'

const TaskG = () => {
  return (
    <Box className="mt-8 text-center">
      <Typography variant="h6">Г) Афінні координати точки P</Typography>
      <Typography className="mt-4">
        Точка P (49, 21, 7) в афінних координатах: ({49 / 7}, {21 / 7})
      </Typography>
    </Box>
  )
}

export default TaskG
