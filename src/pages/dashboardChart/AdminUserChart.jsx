import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AdminUserChart = () => {

    const series = [5, 20]
    const options = {
        theme: {
            mode: 'dark',
        },
        chart: {
            height: 360,
            type: 'donut',
            background: 'transparent'
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#000', '#000'],
                fontSize: 10,
            }
        },
        fill: {
            type: 'gradient',
        },
        labels: ['Admin', 'stor manager'],
        legend: {
            formatter: function (val, opts) {
                const seriesValue = opts.w.globals.series[opts.seriesIndex];
                const label = opts.w.config.labels[opts.seriesIndex];
                return label + " - " + seriesValue;
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }



    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="donut"
                height={360}
            />
        </div>
    );
};

export default AdminUserChart;