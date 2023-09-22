import * as React from 'react'
import { Container, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { v1 } from 'uuid';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { red, purple, cyan } from '@mui/material/colors'
import { IndicatorDashboardCard, IndicatorDashboardCardPropsType } from './IndicatorDashboardCard';
import { humanizeNumber } from './services';
import { DashboardCardPropsType } from './DashboardCard';
import { DashboardCardsGrid } from './DashboardCardsGrid';


export type EmployeeDashboardPropsType = {
    workshiftsCount: number
    summaryEarnings: number
    penaltySum: number
    penaltyCount: number
    waitExplanationMisconducts: number
    isCashier: boolean
    summaryShortage: number
    shortageCount: number
}

export function EmployeeDashboard(props: EmployeeDashboardPropsType) {
    let indicatorsDataList: Array<IndicatorDashboardCardPropsType> = [
        {
            id: v1(), title: 'Earnings', isPositive: true, indicatorsData: [
                { id: v1(), title: 'Earning', icon: <CurrencyRubleIcon />, value: humanizeNumber(props.summaryEarnings) },
                { id: v1(), title: 'Working shifts', icon: <EventAvailableIcon />, value: props.workshiftsCount }
            ]
        },
        {
            id: v1(), title: 'Penalties', isPositive: false, indicatorsData: [
                { id: v1(), title: 'Penalties', icon: <CurrencyRubleIcon />, value: humanizeNumber(props.penaltySum) },
                { id: v1(), title: 'Penalty count', icon: <EventAvailableIcon />, value: props.penaltyCount },
            ]
        },
    ]
    props.isCashier && indicatorsDataList.push({
        id: v1(), title: 'Shortages', isPositive: false, indicatorsData: [
            { id: v1(), title: 'Shortges', icon: <CurrencyRubleIcon />, value: humanizeNumber(props.summaryShortage) },
            { id: v1(), title: 'Shortges count', icon: <EventAvailableIcon />, value: props.shortageCount },
        ]
    })

    let actionsCardsList: Array<DashboardCardPropsType> = [
        { id: v1(), icon: <CalendarMonthRoundedIcon />, title: "Calendar", color: purple[900], actionCount: 0, link: "/calendar" },
        { id: v1(), icon: <SchoolRoundedIcon />, title: "Misconducts", color: red[700], actionCount: 0, link: "/misconducts" },
        { id: v1(), icon: <MenuBookRoundedIcon />, title: "Documents", color: cyan[700], actionCount: 0, link: "/documents" }
    ]
    return (
        <Container>
            <Grid container spacing={1} direction='row' justifyContent="center" sx={{ my: '5px' }}>
                {indicatorsDataList.map((item) =>
                    <Grid md={4} xs={12} sm={12}>
                        <IndicatorDashboardCard
                            id={item.id}
                            title={item.title}
                            isPositive={item.isPositive}
                            indicatorsData={item.indicatorsData}
                        />
                    </Grid>
                )}
            </Grid>
            <Divider />
            <DashboardCardsGrid dashboardItems={actionsCardsList} />
            <Divider />
        </Container>
    )
}
