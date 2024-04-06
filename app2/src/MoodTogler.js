export default function MoodTogler(){
    let darkMoodOn = true;
    const darkMood = <h1>Dark mood on</h1>;
    const lightMood = <h1>Light modd on</h1>;

    const handleClick = () => {
        darkMoodOn = !darkMoodOn;
        if (darkMoodOn){
            console.log("dark mood on");
        }else {
            console.log("dark mood off")
        }
    }

    return(
        <div>
            {darkMoodOn ? darkMood : lightMood}
            <button onClick={handleClick}>toogle mood</button>
        </div>
    )
}