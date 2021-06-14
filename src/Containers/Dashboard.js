import React from 'react'
import Structure from '../Components/Structure'
import { Pie, Line } from 'react-chartjs-2';
const chartData = {
    labels: ['confirm', 'awaiting action', 'delivered', 'cancelled'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
  };
  const data1 = {
    labels: ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6'],
    datasets: [
      {
        label: 'New Orders',
        data: [12, 19, 13, 50, 20, 30],
        fill: true,
        backgroundColor: '#A400FF',
        borderColor: '#A400FF',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Return Orders',
        data: [1, 2, 1, 1, 2, 2],
        fill: true,
        backgroundColor: '#AAB8E4',
        borderColor: '#AAB8E4',
        yAxisID: 'y-axis-2',
      },
    ],
  };
  
  const lineChartptions = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };
  
export default function Dashboard() {
    return (
        <Structure>
            <div className="row">
                <div className="col-md-3">
                    <div className="count-box first">
                        <p className="count-cat">Products</p>
                        <p className="count-num">23</p>
                    </div>
                </div>


                <div className="col-md-3">
                    <div className="count-box second">
                        <p className="count-cat">Customers</p>
                        <p className="count-num">23</p>
                    </div>
                </div>


                <div className="col-md-3">
                    <div className="count-box third">
                        <p className="count-cat">Live Customers</p>
                        <p className="count-num">23</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="count-box fourth">
                        <p className="count-cat">Orders</p>
                        <p className="count-num">23</p>
                    </div>
                </div>



              
            </div>

            <section className="row mt-5">
            <div className="col-md-4">
                    <Pie data={chartData}></Pie>
                </div>


                <div className="col-md-8">
                <Line data={data1} options={lineChartptions} />

                </div>
            </section>
        </Structure>
    )
}