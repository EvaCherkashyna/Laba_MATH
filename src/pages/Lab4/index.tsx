import React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageSVG } from './image';

const Laba4 = () => {
  return (
    <Box className=" flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md max-w-3xl mx-auto my-10">
      <Typography variant='h4' gutterBottom align='center'>
        Зображення створене через вектори SVG
      </Typography>
      <ImageSVG />
    </Box>
  )
}

export default Laba4
