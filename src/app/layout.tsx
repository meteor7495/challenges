
import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';

import 'shared/styles/globals.scss';

import {MantineProvider, ColorSchemeScript, DirectionProvider} from '@mantine/core';
import {Notifications} from '@mantine/notifications';
import {DatesProvider} from '@mantine/dates';
import React, {Suspense} from "react";
import dayjs from "dayjs";
import jalaliday from "jalali-plugin-dayjs";
import {ThemeConfig} from "../shared";


interface LayoutProps {
    children: React.ReactNode;
}

export default async function RootLayout({children}: LayoutProps) {

    dayjs.extend(jalaliday)

    dayjs.calendar( 'jalali' )

    const theme = ThemeConfig('dana');

    return (
        <html lang={'fa-IR'} dir={'rtl'}>
        <head>
            <ColorSchemeScript defaultColorScheme={'light'} async/>
        </head>
        <body>
            <DirectionProvider detectDirection initialDirection={'rtl'}>
                <MantineProvider theme={theme} defaultColorScheme={'light'}>
                    <Notifications/>
                    <DatesProvider settings={{locale: 'fa', firstDayOfWeek: 6, weekendDays: [4, 5], timezone: 'UTC'}}>
                        <Suspense>
                            {children}
                        </Suspense>
                    </DatesProvider>
                </MantineProvider>
            </DirectionProvider>
        </body>
        </html>
    );
}