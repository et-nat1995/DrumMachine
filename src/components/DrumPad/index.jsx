import React, {useEffect} from 'react';

const baseUrl = "https://s3.amazonaws.com/freecodecamp/drums/";

const DrumPads = props => {
    const handlePlay = e =>{
        document.getElementById(props.keyString).play();
        document.getElementById(props.audioId).classList.add('playing');
        document.getElementById('display').innerText = props.audioId;
    }

    const handleKeydown = (e) => e.keyCode === props.keyCode ? handlePlay() : null;

    const removeTransition = (e) => {
        if(e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }

    useEffect(()=>{
        document.getElementById(props.audioId).addEventListener('transitionend', removeTransition)
        document.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
            window.removeEventListener('transitionend', removeTransition);
        };
    })


    return(
        <div className='drum-pad cell' id={props.audioId} onClick={handlePlay}>
            <span className='sound'>{props.audioId}</span>
            <span>{props.keyString}</span>
            <audio className='clip' id={props.keyString} src={`${baseUrl}${props.url}`}/>
        </div>
    )
}

export default DrumPads;