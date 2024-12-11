import React, { useState } from 'react'
import { Box, Button, Grid2 as Grid, Stack, TextField, Typography } from '@mui/material';

const RGBToCMYTab = () => {
  const [rgb, setRgb] = useState({ r: "0", g: "0", b: "0" })
  const [cmy, setCmy] = useState<{ c: number, m: number, y: number } | null>(null)

  const handleRGBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (/^[0-9]*$/.test(value) && +value <= 255) {
      setRgb({ ...rgb, [name]: value });
    }
    setCmy(null)
  }
  const convertRGBToCMY = () => {
    const r = parseInt(rgb.r) / 255;
    const g = parseInt(rgb.g) / 255;
    const b = parseInt(rgb.b) / 255;
    const c = 1 - r;
    const m = 1 - g;
    const y = 1 - b;
    setCmy({
      c: parseFloat((c * 100).toFixed(0)),
      m: parseFloat((m * 100).toFixed(0)),
      y: parseFloat((y * 100).toFixed(0)),
    });
  }
  const handleReset = () => {
    setRgb({ r: "0", g: "0", b: "0" });
    setCmy(null);
  }

  const getRGBColor = () => `rgb(${rgb.r || 0}, ${rgb.g || 0}, ${rgb.b || 0})`
  return (
    <>
      <Grid container spacing={2} className="mb-4">
        {["r", "g", "b"].map((color) => (
          <Grid key={color} size={{ xs: 4, md: 4 }}>
            <TextField
              label={color.toUpperCase()}
              variant="outlined"
              type="number"
              name={color}
              value={rgb[color as keyof typeof rgb]}
              onChange={handleRGBChange}
              fullWidth
              inputProps={{ min: 0, max: 255 }}
              className="bg-white rounded-md shadow-sm"
            />
          </Grid>))}
      </Grid>
      <Box
        className="h-12 rounded-lg mb-4 flex items-center justify-center text-white font-medium"
        style={{ backgroundColor: getRGBColor() }}
      >
        RGB Preview
      </Box>

      <Stack direction="row" spacing={2} className="mb-2">
        <Button variant="outlined" color="primary" fullWidth onClick={convertRGBToCMY}>Convert to CMY</Button>
        <Button variant="outlined" color="secondary" fullWidth onClick={handleReset}>Reset</Button>
      </Stack>

      {
        cmy && (
          <Box className="  text-gray-700">
            <Box
              className="h-12 rounded-lg mb-4 mt-4 flex items-center justify-center text-white font-medium"
              style={{ backgroundColor: getRGBColor() }}
            >
              CMY Preview
            </Box>
            <Typography variant='h6' className="text-blue-600 font-semibold">
              CMY Values:
            </Typography>
            <Box className="p-4 bg-gray-100 rounded-lg">
              <Typography>C: {cmy.c}</Typography>
              <Typography>M: {cmy.m}</Typography>
              <Typography>Y: {cmy.y}</Typography></Box>

          </Box>
        )
      }
    </>
  )
}

export default RGBToCMYTab
