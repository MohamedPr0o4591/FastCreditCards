import React, { useEffect, useState } from 'react';
import { Box, IconButton, Paper, Stack } from '@mui/material';
import { AccessTime, Info } from '@mui/icons-material';
import { Container } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Ads_Card from '../../../components/Ads_Card';

function Ads_Surf() {

    const [result, setResult] = useState('')

    const [points, setPoints] = useState(0);
    const [countdown, setCountdown] = useState(20);

    const handleAdClick = () => {
        window.open('https://example.com', '_blank');
    };

    useEffect(() => {
        let interval;

        if (countdown > 0) {
            interval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [countdown]);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            setResult('You closed the advertisement too soon');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const handlePointsAddition = () => {
        setPoints((prevPoints) => prevPoints + 1);
    };


    return (
        <div className='ads-surf-page '>

            <h3 >
                Surf Ads
            </h3>

            <Paper
                className='text-light p-2 opacity-50 mt-3'
                sx={{
                    bgcolor: '#3575',
                }}
            >

                <Stack direction={'row'} gap={1} alignItems={'center'}>

                    <Info sx={{ color: 'tomato' }} />

                    <span  >
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

export default Ads_Surf
