import React, { useEffect } from 'react';
import { Chart } from 'react-charts';
import './graph.css';

const AvgPostSuccessGraph = (props) => {

    const freshData = props.freshData;

    var lst = [];
    freshData[0].x.forEach(function (item, index) {
        lst.push({ x: freshData[0].x[item], y: freshData[0].y[index] })

    });
    var formattedData = lst;

    const data = React.useMemo(
        () => [
            {
                label: 'Average Score',
                data: formattedData
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )


    return (
        <div className="outer" >
            <div className="AvgYAxis">
                <p>Points Per Post</p>
            </div>

            <div className="OuterGraph">
                <Chart data={data} axes={axes} tooltip />
            </div>

            <div className="AvgXAxis">
                <p>Hours</p>
            </div>
        </div>
    )
}



export default AvgPostSuccessGraph;