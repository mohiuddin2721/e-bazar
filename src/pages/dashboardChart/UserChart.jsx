import React from 'react';
import ReactApexChart from 'react-apexcharts';

const UserChart = () => {

    const options = {
        theme: {
            mode: 'dark',
        },
        chart: {
            height: 450,
            type: 'area',
            stacked: true,
            background: 'transparent',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        title: {
            text: '7% more in 2023',
            style: {
                color: '#0f0',
                fontSize: 14,
            }
        },
        subtitle: {
            text: 'users & sells overview',
            style: {
                color: '#fff',
                fontSize: 20,
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.5,
                opacityFrom: 1,
                opacityTo: 0.5,
                stops: [0, 50, 100],
                gradientToColors: ['#0e95ff', '#2cd9ff'],
            }
        }
    }


    const series = [
        {
            name: 'Sells',
            data: [207, 80, 434, 115, 480, 245, 475, 608],
            color: '#0e95ff',
        }, {
            name: 'Users',
            data: [487, 150, 512, 180, 745, 358, 815, 1125],
            color: '#2cd9ff',
        }
    ];

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={450}
            />
        </div>
    );
};

export default UserChart;