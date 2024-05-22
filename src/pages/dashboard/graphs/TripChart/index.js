import React, { useState, useRef, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";

const TripExpensesChart = () => {
    const chartRef = useRef(null);
    const chartContainerRef = useRef(null);
    const [options, setOptions] = useState({
        theme: "ag-default",
        title: {
            text: "Chart Theme Example",
            overrides: {
                common: {
                    title: {
                        fontSize: 24,
                    },
                },
                bar: {
                    series: {
                        label: {
                            enabled: true,
                            color: 'black',
                        },
                    },
                },
            },
        },
        data: getData(),
        series: [
            {
                type: "pie",
                angleKey: "value",
                calloutLabelKey: "label",
            },
        ],
        background: {
            fill: "#435C70"
        },
        legend: {
            item: {
                label: {
                    color: "#FFFFFF" // Font color for the legend labels
                }
            }
        }
    });

    // Update chart dimensions when window size changes
    useEffect(() => {
        const handleResize = () => {
            const chart = chartRef.current.api;
            if (chart && chartContainerRef.current) {
                const { clientWidth, clientHeight } = chartContainerRef.current;
                chart.setChartOption("width", clientWidth);
                chart.setChartOption("height", clientHeight);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{ width: "100%", height: "100%" }} ref={chartContainerRef}>
            <AgChartsReact ref={chartRef} options={options} />
        </div>
    );
};


// Define your data fetching function here (getData)
const getData = () => {
    // Replace this with your actual data fetching logic
    return [
        { label: "Category 1", value: 100 },
        { label: "Category 2", value: 200 },
        { label: "Category 3", value: 300 },
    ];
};

export default TripExpensesChart;
