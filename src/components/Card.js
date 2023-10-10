function Card(props){
    const {titleText, descText} = props;
    return <div className={'card'}>
        <h3 className={'cardtitle'}>{titleText}</h3>
        <p className={'cardDesc'}>{descText}</p>
        <p className={'cardFooter'}>{new Date().getFullYear()}</p>
    </div>
}

export default Card;