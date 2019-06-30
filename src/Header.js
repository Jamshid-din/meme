import React from "react"
import logo from "./meme_logo.png"
class Header extends React.Component{

    render(){
        return(
            <header>
                <img 
                    src={logo}
                    alt="Problem?"
                />
                <p>Meme Generator</p>
            </header>
        )
    }
}
export default Header;