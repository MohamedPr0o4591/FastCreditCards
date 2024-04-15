import { Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './BirthdaySelector.css'

const BirthdaySelector = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    // قائمة الأيام (1 إلى 31)
    const days = Array.from({ length: 31 }, (_, index) => index + 1);

    // قائمة الأشهر
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    useEffect(() => {
        localStorage.day = day;
        localStorage.month = month;
        localStorage.year = year;
    }, [day, month, year])

    // قائمة السنوات (اعتبارًا من 1900 وحتى السنة الحالية)
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1900 + 1 }, (_, index) => currentYear - index);

    return (
        <div>
            <Stack gap={1.3}>
                <label>
                    Select your birth date
                </label>



                <Box className="date_selector"
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3 ,1fr)',
                    }}
                >
                    <select value={day} onChange={(e) => setDay(e.target.value)} >
                        <option value="">dd</option>
                        {days.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                    <select value={month} onChange={(e) => setMonth(e.target.value)}>
                        <option value="">mm</option>
                        {months.map((m, index) => <option key={index} value={index + 1}>{m}</option>)}
                    </select>
                    <select value={year} onChange={(e) => setYear(e.target.value)}>
                        <option value="">yy</option>
                        {years.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                </Box>

            </Stack>


        </div>
    );
};

export default BirthdaySelector;
