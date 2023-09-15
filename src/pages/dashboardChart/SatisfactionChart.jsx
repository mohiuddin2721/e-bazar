import React from 'react';
import ApexCharts from 'react-apexcharts';

const SatisfactionChart = () => {

    const options = {
        series: [85],
        chart: {
            height: 150,
            type: 'radialBar',
            background: 'transparent',
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24,
                    },
                },
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0,
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35,
                    },
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: true,
                        color: '#0b0d76',
                        fontSize: '20px',
                    },
                    value: {
                        formatter: function (val) {
                            return `${parseInt(val)}%`;
                        },
                        color: '#0b0d76',
                        fontSize: '36px',
                        fontWeight: 700,
                        show: true,
                    },
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#ABE5A1'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
        theme: {
            mode: 'dark',
        },
        stroke: {
            lineCap: 'round',
        },
        labels: ['Satisfaction Rate'],
    };

    return (
        <div>
            <ApexCharts
                options={options}
                series={options.series}
                type="radialBar"
                height={350}
            />
        </div>
    );
};

export default SatisfactionChart;
