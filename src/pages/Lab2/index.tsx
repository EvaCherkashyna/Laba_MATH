import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import 'tailwindcss/tailwind.css';
import TaskA from './components/TaskA';
import TaskB from './components/TaskB';
import TaskV from './components/TaskV';
import TaskG from './components/TaskG';
import TaskG2 from './components/TaskG2';

const CalculationTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => setSelectedTab(newValue);

  return (
    <Box className="p-6 max-w-3xl mx-auto">
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="Завдання А" />
        <Tab label="Завдання Б" />
        <Tab label="Завдання В" />
        <Tab label="Завдання Г" />
        <Tab label="Завдання Ґ" />
      </Tabs>

      {selectedTab === 0 && <TaskA />}
      {selectedTab === 1 && <TaskB />}
      {selectedTab === 2 && <TaskV />}
      {selectedTab === 3 && <TaskG />}
      {selectedTab === 4 && <TaskG2 />}
    </Box>
  );
};

export default CalculationTabs;
