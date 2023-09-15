import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Last7DaysSell = () => {
    const [series, setSeries] = useState([44, 55, 13, 43, 47, 61, 34]);
    const customLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const options = {
        chart: {
            width: 380,
            type: 'pie',
            background: 'transparent',
        },
        labels: customLabels,
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
        theme: {
            mode: 'dark',
        },
        title: {
            text: 'Last week sell',
            style: {
                color: '#fff',
                fontSize: 20,
            }
        },
        colors: ['#FF5733', '#3366CC', '#33CC99', '#FFCC29', '#9933CC', '#C51605', '#66CC66']
    };

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="pie"
                width={380}
            />
        </div>
    );
};

export default Last7DaysSell;
