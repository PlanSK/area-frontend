import { v1 } from "uuid";
import { Container, Grid } from "@mui/material";
import { DashboardCard, DashboardCardPropsType } from "./DashboardCard";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { purple, green, red } from "@mui/material/colors";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const dashboardItems: Array<DashboardCardPropsType> = [
    { id: v1(), icon: <CalendarMonthOutlinedIcon />, title: 'Shifts', color: purple[900], actionCount: 0 },
    { id: v1(), icon: <GroupOutlinedIcon />, title: 'Users', color: green[500], actionCount: 1 },
    { id: v1(), icon: <SchoolOutlinedIcon />, title: 'Misconducts', color: red[700], actionCount: 0 },
]


export function DashBoard() {
    return (
        <Container>
            <Grid container spacing={2} direction='row' justifyContent="center">
                {dashboardItems.map((dashboardItem) => (
                    <Grid item xs sm md key={dashboardItem.id}>
                        <DashboardCard
                            id={dashboardItem.id}
                            icon={dashboardItem.icon}
                            title={dashboardItem.title}
                            color={dashboardItem.color}
                            actionCount={dashboardItem.actionCount}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}