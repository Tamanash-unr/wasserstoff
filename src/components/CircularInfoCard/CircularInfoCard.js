import "./CircularInfoCard.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularInfoCard(props){
    const {valueA, valueB, isNeutral, textValue} = props;
    const diff = valueB - valueA;

    const colorScheme = {
        positive: "#01b92a",
        negative: "#ff2d2e",
        neutral: "#023aff"
    }
    
    function getPercentageDifference(){
        let c = valueA > valueB ? valueA : valueB;

        let percentDiff = Math.abs((valueA - valueB) / c * 100);
        percentDiff = Math.trunc(percentDiff);

        return percentDiff;
    }

    function getColorScheme(){
        if (isNeutral === true) {
            return colorScheme.neutral;
        }

        if (diff < 0){
            return colorScheme.negative;
        } else if(diff > 0){
            return colorScheme.positive
        } else if(diff === 0){
            return colorScheme.neutral;
        }
    }

    function getCardText(){
        if(!textValue){
            return "Info Text";
        }

        if (diff < 0 && !isNeutral){
            return "Less " + textValue;
        } else if(diff > 0 && !isNeutral){
            return "More " + textValue;
        } else if(diff === 0 || isNeutral){
            return textValue;
        }
    }

    const percentage = getPercentageDifference();

    return (
        <div className="circular_info_card">
            <div className="circular_info_card_elem">
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`} 
                    styles={buildStyles({
                        //PathColor
                        pathColor: getColorScheme(),
                        textColor: getColorScheme(),
                        trailColor: '#d6d6d6',
                    })}
                />
            </div>
            <div className="circular_info_card_content">
                { getCardText() }
            </div>
        </div>
    )
}

export default CircularInfoCard;