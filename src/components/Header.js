import React from "react"


export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/icon.webp" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Choose an image, write you text, save your meme</h4>
        </header>
    )
}