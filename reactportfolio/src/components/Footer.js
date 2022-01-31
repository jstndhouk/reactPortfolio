import React from 'react';
import '../styles/Header.css';
import instaIcon from '../images/Instagram-Icon.png'

export default function Footer() {
    return (
        <footer>
            <iframe src="https://ghbtns.com/github-btn.html?user=jstndhouk&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="230" height="30" title="GitHub"></iframe>
            <img src={instaIcon} width="50px" height="50px" alt="A portrait of me, Justin Houk" />
        </footer>)
}