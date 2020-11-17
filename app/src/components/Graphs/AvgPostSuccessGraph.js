import React, { useEffect } from 'react';
//import useChartConfig from 'hooks/useChartConfig'
//import Box from 'components/Box'
import { Chart } from 'react-charts';
import './graph.css';

const AvgPostSuccessGraph = (props) => {

    // function drawChart() {
    //     console.log(data)
    //     if (data[0].x == undefined) {
    //         return;
    //     } else {
    const freshData = props.freshData;
    const width = props.width;
    const height = props.height;
    // transforming data to match codepen exampe [{a: val, b:val}...]
    console.log("got data");
    let margin = 20;
    //S const h = height - 2 * margin, w = width - 2 * margin

    var lst = [];
    freshData[0].x.forEach(function (item, index) {
        lst.push({ x: freshData[0].x[item], y: freshData[0].y[index] })

    });
    console.log(lst);
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