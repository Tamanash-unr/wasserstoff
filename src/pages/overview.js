import "./Overview.css";
import dataset from "../dataset/dataset.json";
import WorldMap from "react-svg-worldmap";
import InfoCard from "../components/InfoCard/InfoCard";

function Overview(){
    const year = 2021; // hardcoded for now, will be dynamic later
    
    function getHighestInvestedCountry(){

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
                            All Over World
                        </div>
                        <div className="section_top_content">
                            $ {dataset["XW"].flows[year - 2000].toLocaleString("en-US")}
                        </div>
                    </div>
                    <div className="section_main">
                        <InfoCard />
                        <InfoCard />
                        <InfoCard />
                    </div>
                    <div className="section_bottom">

                    </div>
                </section>
            </div>
            <div className="overview_right">
                <WorldMap
                    backgroundColor="none"
                    color="#5756b3"
                    size="xxl"
                    data={filterData()}
                />
            </div>
        </div>    
    );
}

export default Overview;