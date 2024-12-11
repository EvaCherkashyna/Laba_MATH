import React, { useState } from 'react'
import { Box, Button, Grid2 as Grid, Stack, TextField } from '@mui/material';
import { mixColors } from '../../../helpers/RGB&Hex';

const MixColors = () => {
  const [hexColor2, setHexColor2] = useState("#ffffff");
  const [mixedColor, setMixedColor] = useState<string | null>(null);
  const [hexColor1, setHexColor1] = useState("#000000");

  const handleMixColors = () => {
    const result = mixColors(hexColor1, hexColor2);
    setMixedColor(result);
  };

  const handleReset = () => {
    setHexColor1("#000000");
    setHexColor2("#ffffff");
    setMixedColor(null);
  };
  return (
    <div>
      <Box className="mt-4">
        <Grid container spacing={2} className="mb-4">
          <Grid size={{ xs: 6, md: 6 }}>
            <TextField
              label="HEX Color 1"
              variant="outlined"
              fullWidth
              value={hexColor1}
              onChange={(e) => setHexColor1(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 6 }}>
            <TextField
              label="HEX Color 2"
              variant="outlined"
              fullWidth
              value={hexColor2}
              onChange={(e) => setHexColor2(e.target.value)}
            />
          </Grid>
        </Grid>
        <Stack direction="row" spacing={2} className="mb-2">
          <Button variant="outlined" color="primary" fullWidth onClick={handleMixColors}>
            Mix Colors
          </Button>
          <Button variant="outlined" color="secondary" fullWidth onClick={handleReset}>
            Reset
          </Button>

        </Stack>
        {mixedColor && (
          <Box
            className="h-16 rounded-lg mt-4 flex items-center justify-center text-white font-medium"
            style={{ backgroundColor: mixedColor }}
          >
            Mixed Color: {mixedColor}
          </Box>
        )}
      </Box>
    </div>
  )
}

export default MixColors
