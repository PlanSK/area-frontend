import * as React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { DashboardCard, DashboardCardPropsType } from "./DashboardCard";

export type DashboardCardsGridPropsType = {
    dashboardItems: Array<DashboardCardPropsType>
}

export function DashboardCardsGrid(props: DashboardCardsGridPropsType) {
    return (
        <Grid container spacing={2} direction='row' justifyContent="center" sx={{ my: '5px' }}>
            {props.dashboardItems.map((dashboardItem) => (
                <Grid xs={12} sm={12} md={4} key={dashboardItem.id}>
                    <DashboardCard
                        id={dashboardItem.id}
                        icon={dashboardItem.icon}
                        title={dashboardItem.title}
                        color={dashboardItem.color}
                        actionCount={dashboardItem.actionCount}
                        link={dashboardItem.link}
                    />
                </Grid>
            ))}
        </Grid>
    );
}