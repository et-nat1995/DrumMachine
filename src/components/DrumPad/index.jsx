import React, {useEffect} from 'react';

const baseUrl = "https://s3.amazonaws.com/freecodecamp/drums/";

const DrumPads = props => {
    const handlePlay = e =>{
        document.getElementById(props.keyString).play();
        document.getElementById('display').innerText = props.audioId;
    }

    const handleKeydown = (e) => e.keyCode === props.keyCode ? handlePlay() : null;

    useEffect(()=>{
        document.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    })


    return(
        <div className='drum-pad' id={props.audioId} onClick={handlePlay}>
            {props.keyString}
            <audio className='clip' id={props.keyString} src={`${baseUrl}${props.url}`}/>
        </div>
    )
}

export default DrumPads;