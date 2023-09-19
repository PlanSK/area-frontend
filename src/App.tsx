import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Maintoolbar, ToolbarData } from './Maintoolbar';
import { MainCard } from './MainCard'
import { StaffDashboard, StaffDashboardPropsType } from './StaffDashboard';
import { EmployeeDashboard, EmployeeDashboardPropsType } from './EmployeeDashboard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const data: ToolbarData = {
    profileData: {profileImage: "", profileName: "Sergey", staffPermissions: true},
    messagesCount: 1
  }
  const dashboardData: StaffDashboardPropsType = {
    unverifiedWorkshifts: 1,
    inactiveUsers: 0,
    waitExplanationMisconducts: 0,
    waitDecisionMisconducts: 0
  }
  const employeeData: EmployeeDashboardPropsType = {
    workshiftsCount: 1,
    summaryEarnings: 20564.05,
    penaltySum: 200,
    penaltyCount: 1,
    waitExplanationMisconducts: 1,
    isCashier: true,
    summaryShortage: 254.84
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Maintoolbar
        profileData={data.profileData}
        messagesCount={data.messagesCount}
      />
      <MainCard />
    </ThemeProvider>
  );
}

export default App;
