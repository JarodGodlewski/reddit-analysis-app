import React, { useEffect } from 'react';
import { Chart } from 'react-charts';
import './graph.css';

const CommentsSincePostGraph = (props) => {


    const freshData = props.freshData;

    var lst = [];
    freshData[0].x.forEach(function (item, index) {
        lst.push({ x: freshData[0].x[index], y: freshData[0].y[index] })

    });
    
    var formattedData = lst;

    const data = React.useMemo(
        () => [
            {
                label: 'Total Top Level Comments',
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
                <p>Total Top Level Comments</p>
            </div>

            <div className="OuterGraph">
                <Chart data={data} axes={axes} tooltip />
            </div>

            <div className="AvgXAxis">
                <p>Time Since Posted (Minutes)</p>
            </div>
        </div>
    )
}



export default CommentsSincePostGraph;