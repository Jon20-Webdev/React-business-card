import React from 'react'
import './MainContent.css'
import facebook from './assets/Facebook Icon.png'
import linkedin from './assets/linkedin.svg'
import github from './assets/GitHub Icon.png'
import mail from './assets/Mail.svg'
import Me from './assets/me.png'
import Twitter from './assets/Twitter Icon.png'
import Instagram from './assets/Instagram Icon.png'

export default function MainContent(){
    return (
        <>
            <div className='container'>
                <div className='img-container'>
                <img className='main-img' src={Me} alt="me" />
                </div>
                <div className='sub-container'>
                    <h2 className='name'>Jon Manuel Palencia</h2>
                    <h4 className='role'>Web Developer</h4>
                    <h5 className='web'>jonpalencia20@gmail.com</h5>
                    <div className='connect'>
                        <a className='mail' href=""><img src={mail} alt="mail" /> Email</a>
                        <a className='linkedin' href="" target='_blank'><img src={linkedin} alt="" />LinkedIn</a>
                    </div>
                    <div className='about'>
                        <h3>About</h3>
                        <p>I am an aspiring Web developer. Skilled in conceptualizing, designing, development, and deploying software containing logical solutions to business problems. </p>
                    </div>
                    <div className='interest'>
                        <h3>Interests</h3>
                        <p>Learnning new skills, Sports, Games, I'am a tech enthusiast, like playing online games, but most of all learning new things constantly it gives me the urge to improve my skills and knowledge to be more and more better.</p>
                    </div>
                </div>
                <div className='footer'>
                    <a href="https://web.facebook.com/JMPalencia.xx/" target="_blank" ><img className='facebook' src={facebook} alt="facebook" /></a>
                    <a href=""><img className='twitter' src={Twitter} target="_blank" /></a>
                    <a href=""><img className='instagram' src={Instagram} alt="Instagram" target="_blank" /></a>
                    <a href="https://github.com/Jon20-Webdev" target="_blank" ><img className='github' src={github} alt="github" /></a>
                </div>
            </div>
        </>
    )
}
