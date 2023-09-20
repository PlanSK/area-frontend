import { v1 } from "uuid";
import { Container, Divider } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { DashboardCard, DashboardCardPropsType } from "./DashboardCard";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { purple, red, indigo, cyan } from "@mui/material/colors";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

export type DashboardPropsType = {
    unverifiedWorkshifts: number,
    inactiveUsers: number,
    waitExplanationMisconducts: number,
    waitDecisionMisconducts: number
}

export function DashBoard(props: DashboardPropsType) {
    const dashboardItems: Array<DashboardCardPropsType> = [
        { id: v1(), icon: <CalendarMonthOutlinedIcon />, title: 'Shifts', color: purple[900], actionCount: props.unverifiedWorkshifts, link: '/workshifts' },
        { id: v1(), icon: <GroupOutlinedIcon />, title: 'Users', color: cyan[700], actionCount: props.inactiveUsers, link: '/users' },
        { id: v1(), icon: <SchoolOutlinedIcon />, title: 'Misconducts', color: red[700], actionCount: (props.waitDecisionMisconducts + props.waitExplanationMisconducts), link: '/misconducts' },
        { id: v1(), icon: <EqualizerIcon />, title: 'Analytic', color: indigo[700], actionCount: 0, link: '/analytic' },
        { id: v1(), icon: <PermContactCalendarIcon />, title: 'Calendar', color: indigo[700], actionCount: 0, link: '/calendar' },
        { id: v1(), icon: <NoteAltIcon />, title: 'Reports', color: indigo[700], actionCount: 0, link: '/reports' },
    ]

    return (
        <Container>
            <Grid container spacing={2} direction='row' justifyContent="center" sx={{ marginBottom: '5px' }}>
                {dashboardItems.map((dashboardItem) => (
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
            <Divider />
        </Container>
    );
}