import * as React from 'react'
import { Card, CardContent, CardActionArea, Badge, Chip } from '@mui/material';
import { indigo, lightGreen } from '@mui/material/colors';
import { SvgIconComponent } from '@mui/icons-material';

export type DashboardCardPropsType = {
    id: string
    icon: React.ReactElement<SvgIconComponent>
    title: string
    color: string
    actionCount: number
    link: string
}

export function DashboardCard(props: DashboardCardPropsType) {
    return (
        <Card
            sx={{
                minWidth: 240,
                borderRadius: 3,
                background: props.color
            }}
        >
            <CardActionArea href={props.link}>
                <CardContent>
                    <Badge badgeContent={props.actionCount} color="warning">
                        <Chip
                            icon={props.icon}
                            label={props.title}
                            sx={{ fontSize: '1rem', fontWeight: 'bold', borderColor: indigo[200] }}
                            variant='outlined' />
                    </Badge>
                    {props.actionCount > 0 &&
                        <Chip
                            label="There are new events"
                            color="secondary"
                            size="small"
                            sx={{
                                fontWeight: 'bold',
                                marginLeft: '1rem',
                                bgcolor: lightGreen['A200'],
                                fontSize: '0.7rem'
                            }}
                        />}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}



