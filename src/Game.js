import React from 'react'

const Game = (props) => {
    console.log(props)
    //30deg = 50vh
    
    
    const sw = props.screenSize.width/180
    const sh = props.screenSize.height/180

    console.log(props.screenSize.width, props.screenSize.height )
    console.log(props.screenSize.height/180*90)
    console.log(props.screenSize.height/180*60)
    console.log(props.screenSize.height/180*30)
    return (
        <div className="game" style={{width: `${props.screenSize.width}px`, height: `${props.screenSize.height}px`}}>
            <div style={{position: 'absolute', top: (props.screenSize.height/2), left: (props.screenSize.width/2), transform: ` translateY(${(sh*props.rotation.beta)+0}px) rotateZ(${props.rotation.alpha}deg)`}}>
            <div style={{position: 'absolute', top: 0, left: 0, transform: `  translateX(${sw*props.rotation.gamma}px)`}}><h1 style={{padding: '0', margin: '0'}}>B</h1></div>
            <div style={{position: 'absolute', top: 0, left: 0, transform: ` translateY(${-(props.screenSize.height/2)}px) translateX(${sw*props.rotation.alpha}px) rotateZ(${-props.rotation.alpha}deg)`}}><h1 style={{padding: '0', margin: '0'}}>F</h1></div>
            <div style={{position: 'absolute', top: 0, left: 0, transform: `translateY(${-(props.screenSize.height/2)}px) translateX(${(sw*props.rotation.alpha)-(props.screenSize.width)/2}px) rotateZ(${-props.rotation.alpha}deg)`}}><h1 style={{padding: '0', margin: '0'}}>FL</h1></div>
            <div style={{position: 'absolute', top: 0, left: 0, transform: `translateY(${-(props.screenSize.height/2)}px) translateX(${(sw*props.rotation.alpha)+(props.screenSize.width)/2}px) rotateZ(${-props.rotation.alpha}deg)`}}><h1 style={{padding: '0', margin: '0'}}>FR</h1></div>
            <div style={{position: 'absolute', top: 0, left: 0, transform: `translateY(${-(props.screenSize.height)}px) translateX(${sw*props.rotation.alpha}px) rotateZ(${-props.rotation.alpha}deg)`}}><h1 style={{padding: '0', margin: '0'}}>T</h1></div>
            </div>
            
            
        </div>
    )
}

export default Game

{/* <div style={{position: 'absolute', top: (props.screenSize.height/2)-80, left: (props.screenSize.width/2)-80, transform: `rotate(${props.alpha}deg)`}}><img src="blue_circle.png" alt="a"/></div>
            <div style={{position: 'absolute', top: (props.screenSize.height/2)-60, left: (props.screenSize.width/2)-60, transform: `translate(0px, ${props.beta}px)`}}><img src="green_circle.png" alt="b"/></div>
            <div style={{position: 'absolute', top: (props.screenSize.height/2)-40, left: (props.screenSize.width/2)-40, transform: `translate(${props.gamma}px,0px)`}}><img src="red_circle.png" alt="g"/></div> */}