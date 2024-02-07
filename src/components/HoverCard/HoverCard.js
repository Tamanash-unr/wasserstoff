import "./HoverCard.css";
import { BarChart } from "@mui/x-charts";

function HoverCard(props){
    const { chartData } = props;

    const year = [];
    chartData.year.forEach(ele => year.push(ele.toString()));

    const valueFormatter = (value) => `$ ${value.toLocaleString("en-US")}`;

    return (
        <div className="hoverCard">
            <p>Investments Over the Years</p>
            <BarChart
                xAxis={[
                    {
                    data: year,
                    scaleType: 'band',
                    },
                ]}
                series={[
                    {
                    data: chartData.flows,
                    valueFormatter
                    },
                ]}
                width={1200}
                height={150}
            />
        </div>
    )
}

export default HoverCard;