import React,{Component} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    // static contextType = ThemeContext;
    render() { 
        return (
            <AuthContext.Consumer>{(authContext)=>(
                <ThemeContext.Consumer>{(themeContext)=>{
                    const {isAuthenticate,toggleAuth} = AuthContext;
                    const {isLightTheme, light, dark} = themeContext;
                    const theme = isLightTheme ? light : dark;
    
                    return(
                        <nav style={{background: theme.ui, color: theme.syntax}}>
                            <h1>Context App</h1>
                            <div onClick={toggleAuth}>
                                {isAuthenticate ? 'Logged In' : 'Logged Out'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    );
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>


        );
    }
}
 
export default Navbar;