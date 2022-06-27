import './styles.css';

export function Card(props){
    return (
        <div className='card'>
            <strong>{props.name === null ? "Nome não informado" : props.name}</strong>
            <div className='local'>
                <p>{props.location === null ? "Localização não informada" : props.location}</p>
            </div>
            <div className='img-container'>
                <img src={props.avatar} alt="profile picture" />
            </div>
            
        </div>
    )
}