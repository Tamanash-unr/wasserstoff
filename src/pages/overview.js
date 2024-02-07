import "./Overview.css";
import dataset from "../dataset/dataset.json";
import WorldMap from "react-svg-worldmap";
import InfoCard from "../components/InfoCard/InfoCard";

function Overview(){
    const year = 2021; // hardcoded for now, will be dynamic later
    
    // const data = [
    //     { country: "cn", value: 1389618778 }, // china
    //     { country: "in", value: 1311559204 }, // india
    //     { country: "us", value: 331883986 }, // united states
    //     { country: "id", value: 264935824 }, // indonesia
    //     { country: "pk", value: 210797836 }, // pakistan
    //     { country: "br", value: 210301591 }, // brazil
    //     { country: "ng", value: 208679114 }, // nigeria
    //     { country: "bd", value: 161062905 }, // bangladesh
    //     { country: "ru", value: 141944641 }, // russia
    //     { country: "mx", value: 127318112 }, // mexico
    //   ];

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