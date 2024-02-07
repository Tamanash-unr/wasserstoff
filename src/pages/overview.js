import "./Overview.css";
import dataset from "../dataset/dataset.json";
import { WorldMap, CountryContext}  from "react-svg-worldmap";
import InfoCard from "../components/InfoCard/InfoCard";
import CircularInfoCard from "../components/CircularInfoCard/CircularInfoCard";
import HoverCard from "../components/HoverCard/HoverCard";

function Overview(){
    const year = 2021; // hardcoded for now, will be dynamic later
    const investments = [];

    // Get investments of all countries except World(XW) and others starting with code UN
    for(const country of Object.keys(dataset)){
        if(country !== "XW" && !country.includes("UN_")){
            investments.push(dataset[country].flows[year - 2000]);
        }
    }

    // Sort in Ascending Order
    investments.sort(function(a, b){return a-b})
    
    // Get the Highest Invested Amount in given year
    function getHighestInvested(){
        return investments[investments.length - 1]
    }

    // Get the Lowest Invested Amount in given year
    function getLowestInvested(){
        for(const i of investments){
            if(i !== 0){
                return i;
            }
        }
    }

    // Get Countries with no Investments in given year
    function getNoInvestments(){
        let count = 0;

        for(const i of investments){
            if(i === 0){
                count += 1;
            } else {
                break;
            }
        }

        return count;
    }

    // Get Countrywise Map Data
    function filterData(){
        const newData = [];

        for(const country of Object.keys(dataset)){
            let obj = {
                country: country,
                value: dataset[country].flows[year - 2000]
            }

            newData.push(obj)
        }

        return newData;
    }

    // Custom Styling function for Map Component
    const stylingFunction = ({
        countryValue,
        minValue,
        maxValue,
        country,
        color,
      }: CountryContext) => {
        const calculatedValue =
          typeof countryValue === "string" ? minValue : countryValue;
        const opacityLevel =
          calculatedValue !== undefined
            ? 0.1 + (6 * (calculatedValue - minValue)) / (maxValue - minValue)
            : 0;
        return {
          fill: country === "US" ? "blue" : color,
          fillOpacity: opacityLevel,
          stroke: "blue",
          strokeWidth: 1,
          strokeOpacity: 0.2,
          cursor: "pointer",
        };
      };

    return (
        <div className="overview">
            <div className="overview_left">
                <p className="heading">
                    International Finance received for clean energy
                    <br/>
                    (2000 - 2021)
                </p>
                <section>
                    <div className="section_top">
                        <div className="section_top_head">
                            All Over World ({year})
                        </div>
                        <div className="section_top_content">
                            $ {dataset["XW"].flows[year - 2000].toLocaleString("en-US")}
                        </div>
                    </div>
                    <div className="section_main">
                        <InfoCard 
                            title="Highest Investment Received"
                            value={`$ ${getHighestInvested().toLocaleString("en-US")}`}
                            backgroundColor="#8676ff"
                            iconClass="fas fa-money-bill-trend-up"
                        />
                        <InfoCard 
                            title="Lowest Investment Received"
                            value={`$ ${getLowestInvested().toLocaleString("en-US")}`}
                            backgroundColor="#66c8ff"
                            iconClass="fas fa-arrow-trend-down"
                        />
                        <InfoCard 
                            title="Countries with no Investments"
                            value={getNoInvestments()}
                            backgroundColor="#ff9066"
                            iconClass="fas fa-ban"
                        />
                    </div>
                    <div className="section_bottom">
                        <CircularInfoCard 
                            valueA={getNoInvestments()}
                            valueB={investments.length}
                            textValue="Total Countries With Investments"
                            isNeutral={true}
                        />
                        <CircularInfoCard
                            valueA={dataset["XW"].flows[year - 1 - 2000]}
                            valueB={dataset["XW"].flows[year - 2000]}
                            textValue="Investments than Last Year"
                        />
                    </div>
                </section>
            </div>
            <div className="overview_right">
                <WorldMap
                    backgroundColor="none"
                    color="#5756b3"
                    size="xxl"
                    data={filterData()}
                    valuePrefix="$"
                    styleFunction={stylingFunction}
                />
            </div>
            <HoverCard chartData={dataset["XW"]}/>
        </div>    
    );
}

export default Overview;