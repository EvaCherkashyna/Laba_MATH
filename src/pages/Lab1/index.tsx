import { Box, Button, Grid2 as Grid, Stack, Tab, Tabs, TextField, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import TabPanel from '../../components/TabPanel';
import RGBToCMYTab from './components/RGBToCMYTab';
import ColorIlluminator from './components/ColorIlluminator';
import MixColors from './components/MixColors';


const Lab1 = () => {
  const theme = useTheme();
  const [tab, setTab] = useState<number>(0);

  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box className="p-6 bg-gray-50 rounded-lg shadow-md max-w-3xl mx-auto my-10">
      <Typography variant="h4" style={{ marginBottom: "16px" }}
        className="text-center text-blue-600 font-semibold">
        Color Converter
      </Typography>

      <Tabs
        value={tab}
        onChange={handleTabChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="RGB to CMY Converter" {...a11yProps(0)} />
        <Tab label="Make Color Lighter" {...a11yProps(1)} />
        <Tab label="Mix Colors" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={tab} index={0} dir={theme.direction}>
        <RGBToCMYTab />
      </TabPanel>
      <TabPanel value={tab} index={1} dir={theme.direction}>
        <ColorIlluminator />
      </TabPanel>
      <TabPanel value={tab} index={2} dir={theme.direction}>
        <MixColors />
      </TabPanel>

    </Box >
  )
}

export default Lab1;
