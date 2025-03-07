import './EtichettaSaluto.css';

function EtichettaSaluto({text}) {  // Oppure EtichettaSaluto(props)
    return (
        <p>Ciao {text}</p>  // <p>Ciao {props.text}</p>
    );
}

export default EtichettaSaluto;
