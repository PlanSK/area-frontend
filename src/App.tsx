import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Maintoolbar, ToolbarData } from './Maintoolbar';
import { DashBoard, DashboardPropsType } from './Dashboard';
import { EmployeeDashboard, EmployeeDashboardPropsType } from './EmployeeDashboard';
import SignIn from './SignIn';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontSize: 12,
    },
});

function App() {
    const data: ToolbarData = {
        profileData: { profileImage: "", profileName: "Sergey Petroff", staffPermissions: false },
        messagesCount: 1
    }
    const dashboardData: DashboardPropsType = {
        unverifiedWorkshifts: 1,
        inactiveUsers: 0,
        waitExplanationMisconducts: 1,
        waitDecisionMisconducts: 0
    }
    const employeeData: EmployeeDashboardPropsType = {
        workshiftsCount: 10,
        summaryEarnings: 25604.05,
        penaltySum: 200,
        penaltyCount: 1,
        waitExplanationMisconducts: 1,
        isCashier: false,
        summaryShortage: 254.84,
        shortageCount: 3
    }
    let isAuthorized = true
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {isAuthorized ? (
                <>
                    <Maintoolbar
                        profileData={data.profileData}
                        messagesCount={data.messagesCount}
                    />
                    {data.profileData.staffPermissions ? (
                        <DashBoard
                            unverifiedWorkshifts={dashboardData.unverifiedWorkshifts}
                            inactiveUsers={dashboardData.inactiveUsers}
                            waitExplanationMisconducts={dashboardData.waitExplanationMisconducts}
                            waitDecisionMisconducts={dashboardData.waitDecisionMisconducts}
                        />) : (
                        <EmployeeDashboard
                            workshiftsCount={employeeData.workshiftsCount}
                            summaryEarnings={employeeData.summaryEarnings}
                            penaltySum={employeeData.penaltySum}
                            penaltyCount={employeeData.penaltyCount}
                            waitExplanationMisconducts={employeeData.waitExplanationMisconducts}
                            isCashier={employeeData.isCashier}
                            summaryShortage={employeeData.summaryShortage}
                            shortageCount={employeeData.shortageCount}
                        />
                    )}
                </>
            ) : (
                <SignIn />
            )}
        </ThemeProvider>
    );
}

export default App;
