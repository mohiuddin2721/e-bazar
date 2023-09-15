import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CategoryChart = () => {

    const options = {
        theme: {
            mode: 'dark',
        },
        chart: {
            height: 450,
            type: 'bar',
            stacked: true,
            background: 'transparent',
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
            }
        },
        tooltip: {
            followCursor: true
        },
        dataLabels: {
            formatter: (val) => {
                return `$${val}`
            },
            style: {
                colors: ['#000', '#fff'],
                fontSize: 10,
            }
        },
        xaxis: {
            tickPlacement: 'on',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            title: {
                text: 'Months',
                style: {
                    color: '#0f0'
                }
            }
        },
        yaxis: {
            labels: {
                formatter: (val) => {
                    return `$${val}`
                },
                style: {
                    colors: '#fff'
                }
            },
            title: {
                text: 'Amounts',
                style: {
                    color: '#0f0'
                }
            }
        },
        title: {
            text: 'sell - 2023',
            style: {
                color: '#fff',
                fontSize: 20,
            }
        }
    };

    const series = [
        {
            name: 'panjabi',
            data: [131, 140, 128, 151, 142, 209, 200, 218],
            color: '#C51605'
        },
        {
            name: 'shirt',
            data: [111, 132, 145, 232, 234, 252, 211, 242],
            color: '#379237'
        },
        {
            name: 'pant',
            data: [151, 102, 175, 182, 214, 259, 285, 301],
            color: '#EA1179'
        },
        {
            name: 'sarees',
            data: [80, 92, 105, 132, 174, 182, 241, 277],
            color: '#FD8D14'
        },
        {
            name: 'kameez',
            data: [70, 73, 85, 92, 102, 107, 111, 162],
            color: '#78C1F3'
        },
        {
            name: 'abaya',
            data: [170, 173, 179, 163, 207, 241, 292, 343],
            color: '#FF78C4'
        },
    ];

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={450}
            />
        </div>
    );
};

export default CategoryChart;