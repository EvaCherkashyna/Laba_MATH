import React, { useState } from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';
import { hexToRGB, RGBToHex } from '../../../helpers/RGB&Hex';


function lightenColor(hex: string, percent: number) {
  const { r, g, b } = hexToRGB(hex);
  const newR = Math.min(255, Math.floor(r + (255 - r) * percent));
  const newG = Math.min(255, Math.floor(g + (255 - g) * percent));
  const newB = Math.min(255, Math.floor(b + (255 - b) * percent));
  return RGBToHex({ r: newR, g: newG, b: newB });
}


const ColorIlluminator = () => {
  const [hexColor, setHexColor] = useState("#000000");
  const [error, setError] = useState<string | null>(null);
  const [lightenPercent, setLightenPercent] = useState("0.35");
  const [lightenedColor, setLightenedColor] = useState<string | null>(null);


  const handleLightenColor = () => {
    const percent = parseFloat(lightenPercent);
    if (percent >= 0 && percent <= 1) {
      const result = lightenColor(hexColor, percent);
      setLightenedColor(result);
    }
  };

  const handleReset = () => {
    setLightenPercent("0")
    setLightenedColor(null)
    setError(null)
    setHexColor("#000000")
  };


  const handleLightenPercent = (value: string) => {
    const percantage = parseFloat(value);
    if (percantage >= 0 && percantage < 1) {
      setError(null);
      setLightenPercent(value);
    } else if (value === "") {
      setError(null);
      setLightenPercent(String(percantage || "0"));
    } else {
      setError("Please enter a valid decimal number strictly between 0 and 1 (e.g., 0.35 for 35%).");
    }
  };


  return (
    <Box className="mt-4 ">
      <Box className="flex gap-4 mb-2">
        <TextField
          label="HEX Color"
          variant="outlined"
          fullWidth
          value={hexColor}
          onChange={(e) => setHexColor(e.target.value)}
          className="mb-4"
        />
        <TextField
          label="Lighten by (fraction)"
          variant="outlined"
          fullWidth
          error={Boolean(error)}
          value={lightenPercent}
          onChange={(e) => handleLightenPercent(e.target.value)}
          className="mb-4"
          required
          helperText="Enter a number between 0 and 1(excluding 0 and 1) (e.g., 0.35 for 35%)"
        />
      </Box>
      <Stack direction="row" spacing={2} className="mb-2">
        <Button variant="outlined" color="primary" fullWidth onClick={handleLightenColor}>
          Lighten Color
        </Button>
        <Button variant="outlined" color="secondary" fullWidth onClick={handleReset}>
          Reset
        </Button>

      </Stack>
      {lightenedColor && (
        <Box
          className="rounded-md p-4 flex items-center justify-center text-white font-medium"
          style={{ backgroundColor: lightenedColor }}
        >
          Lightened Color: {lightenedColor}
        </Box>
      )}
    </Box>
  );
};

export default ColorIlluminator;
