import React from 'react';
import { Header, HeaderData } from './Header';
import { StaffDashboard, StaffDashboardPropsType } from './StaffDashboard';
import { EmployeeDashboard, EmployeeDashboardPropsType } from './EmployeeDashboard';

function App() {
  const data: HeaderData = {
    profileData: {profileImage: "", profileName: "Anonymous", staffPermissions: true},
    messagesCount: 0
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
    <div className="App">
      <Header profileData={data.profileData}
              messagesCount={data.messagesCount}
      />
      <main>
        <div className="container">
          <StaffDashboard unverifiedWorkshifts={dashboardData.unverifiedWorkshifts}
                          inactiveUsers={dashboardData.inactiveUsers}
                          waitExplanationMisconducts={dashboardData.waitExplanationMisconducts}
                          waitDecisionMisconducts={dashboardData.waitDecisionMisconducts}
          />
          <EmployeeDashboard workshiftsCount={employeeData.workshiftsCount}
                             summaryEarnings={employeeData.summaryEarnings}
                             penaltySum={employeeData.penaltySum}
                             penaltyCount={employeeData.penaltyCount}
                             waitExplanationMisconducts={employeeData.waitExplanationMisconducts}
                             isCashier={employeeData.isCashier}
                             summaryShortage={employeeData.summaryShortage}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
