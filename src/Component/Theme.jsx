// import { useEffect, useState } from "react";

 const Theme = () => {

//     const [theme , setTheme] = useState("lightTheme");
//     const toggleTheme = () => {
//         if(theme === "darkTheme"){
//             setTheme("lightTheme");
//         }
//         else{
//             setTheme("darkTheme");
//         }
//     };
    
//     useEffect =(() => {
//         document.body.className = theme;
//     } ,[theme]) ;
    
    return(
        <>
        <div className="themeContainer">
        <h1>TIC TAC TOE GAME</h1>
        </div>
        {/* <div className="btn" onClick={() => toggleTheme()}><button >Change Theme</button></div> */}
        </>
        
    )
}

export default Theme;