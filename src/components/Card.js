const todoTitle = 'Call Family';
const todoDecsription = 'Test is the best uses for the life time example for for for.'

function Card(){
    return <div className={'card'}>
        <h3 className={'cardtitle'}>{todoTitle}</h3>
        <p className={'cardDesc'}>{todoDecsription}</p>
        <p className={'cardFooter'}>{new Date().getFullYear()}</p>
    </div>
}

export default Card;