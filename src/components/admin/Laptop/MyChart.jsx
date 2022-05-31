import { useEffect, useState } from "react";
import './Graph.css'
import { Chart } from "react-google-charts";
import axios from "axios";
import { url } from "../../../Env";
import { Spinner } from 'react-bootstrap'
export const options = {
    chart: {
        title: "",
    },
    series: {
        // Gives each series an axis name that matches the Y-axis below.
        0: { axis: "Temps" },
        1: { axis: "Daylight" },
    },
    axes: {
        // Adds labels to each axis; they don't have to match the axis names.


    },
};

export function MyChart({ height }) {

    const [postAmount, setPostAmount] = useState([])

    useEffect(() => {
        (
            async () => {
                let response = await axios.get(`${url}/api/stat`)
                let result = await response.data
                console.log(result);
                if (postAmount.length < 3) {
                    let newData = []
                    if (result.length < 12) {
                        for (let i = 0; i < result.length; i++) {
                            let arr = [new Date(result[i].date), result[i].views]
                            newData.push(arr)
                        }
                    } else {
                        for (let i = result.length - 1; i > result.length - 10; i--) {
                            let arr = [new Date(result[i].date), result[i].views]
                            newData.push(arr)
                        }
                    }
                    setPostAmount([...newData])
                }
            }
        )()
    }, [postAmount.length])

    return (
        <Chart
            key={postAmount}
            chartType="Line"
            width="100%"
            height={`${height}px`}
            data={[[{ type: "date" }, "",], ...postAmount]}
            options={options}
            loader={<Spinner animation="border" style={{ color: "#D05270" }} />}
        />
    );
}
