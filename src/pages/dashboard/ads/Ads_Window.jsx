import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack } from '@mui/material';
import { AccessTime, Info } from '@mui/icons-material';
import { Container } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Ads_Card from '../../../components/Ads_Card';


function Ads_Window() {
    return (
        <div className='ads-window-page '>

            <h3 >
                Window Ads
            </h3>

            <Paper
                className='text-light p-2 opacity-50 mt-3'
                sx={{
                    bgcolor: '#3575',
                }}
            >

                <Stack direction={'row'} gap={1} alignItems={'center'}>

                    <Info sx={{ color: 'tomato' }} />

                    <span >
                        Any link served through advertisements is not an endorsement or recommendation by FastCreditCards. Please exercise your due diligence before use.

                    </span>


                </Stack>
            </Paper>

            <Stack mt={2} gap={2}>


                <Ads_Card />

                <Ads_Card />
                <Ads_Card />
                <Ads_Card />
                <Ads_Card />
                <Ads_Card />
                <Ads_Card />
                <Ads_Card />

            </Stack>


        </div>
    )
}

export default Ads_Window
