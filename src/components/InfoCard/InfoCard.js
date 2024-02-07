import "./InfoCard.css";

function InfoCard(props){
    const { iconClass, backgroundColor, title, value} = props;

    let bgColor = backgroundColor ? backgroundColor : "purple";

    return (
        <div className="info_card">
            <div className="info_card_icon" style={{backgroundColor: bgColor, color: "white"}}>
                {
                    iconClass ?
                    <i className={iconClass} /> :
                    <i className="fas fa-icons"/>
                }
            </div>
            <div className="info_card_content">
                <div className="info_card_title">{title ? title : "Title"}</div>
                <div className="info_card_value">{value ? value : "200"}</div>
            </div>
        </div>
    );  
}

export default InfoCard;