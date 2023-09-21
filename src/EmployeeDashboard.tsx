import React from 'react';
import { Container, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { v1 } from 'uuid';
import { IndicatorDashboardCard, IndicatorDashboardCardPropsType } from './IndicatorDashboardCard';

export type EmployeeDashboardPropsType = {
  workshiftsCount: number
  summaryEarnings: number
  penaltySum: number
  penaltyCount: number
  waitExplanationMisconducts: number
  isCashier: boolean
  summaryShortage: number
}

export function EmployeeDashboard() {
  return (
    <Container>
    <Grid container spacing={2} direction='row' justifyContent="center" sx={{ my: '5px' }}>
      <Grid md={3}>
      <IndicatorDashboardCard />
      </Grid>
      <Grid md={3}>
      <IndicatorDashboardCard />
      </Grid>
    </Grid>
    <Divider />
</Container>
  )
}
