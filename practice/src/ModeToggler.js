 function ModeToggler() {
    const DarkModeOn = false;
    const DarkMode = <h1>Dark Mode is on<h1>
    const LightMode = <h1>Light Mode is on</h1>

    handleClick () => {
        DarkModeOn = !DarkModeOn;
        if(DarkModeOn == True){
            console.log(Dark Mode is on)
        } else{
            console.log(Light Mode is on)
        }
        }

    return(
        <div>
            {DarkModeOn? DarkMode : LightMode}
            <button onClick = {handleClick}>
                Click Me
            </button>
        </div>
    )
    }

export default ModeToggler