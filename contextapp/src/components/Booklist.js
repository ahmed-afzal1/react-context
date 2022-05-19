import React,{Component, useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// class Booklist extends Component {
//     static contextType = ThemeContext;
    
//     render() { 
//         const {isLightTheme, light, dark} = this.context;
//         const theme = isLightTheme ? light : dark;

//         return (
//             <div className='book-list' style={{color:theme.syntax, background:theme.bg}}>
//                 <ul>
//                     <li style={{background: theme.ui}}>The People of the mist</li>
//                     <li style={{background: theme.ui}}>Harry potter and the order of finix</li>
//                     <li style={{background: theme.ui}}>Mother</li>
//                 </ul>
//             </div>
//         );
//     }
// }

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className='book-list' style={{color:theme.syntax, background:theme.bg}}>
            <ul>
                <li style={{background: theme.ui}}>The People of the mist</li>
                <li style={{background: theme.ui}}>Harry potter and the order of finix</li>
                <li style={{background: theme.ui}}>Mother</li>
            </ul>
        </div>
     );
}
 
export default BookList;
 
// export default Booklist;