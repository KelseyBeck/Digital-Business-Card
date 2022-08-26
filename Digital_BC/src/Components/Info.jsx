export default function Info(){
    
    function github(){
        window.open("https://github.com/KelseyBeck");
    }

    function linkedin(){
        window.open("https://www.linkedin.com/in/kelsey-beck/");
      }

    return(
        <div id = 'info'>
            <div id='id'>
                 <h1>Kelsey Beck</h1>
                <h3 id = 'career'>Software Developer</h3>
            </div>
            <div id='buttons'>
                <button onClick={github}>Github</button>
                <button onClick={linkedin}>LinkedIn</button>
            </div>
            <div id='about'>
                <h3>About</h3>
                <p>
                    I'm a full stack developer with a particular interest in
                    in finding answers to challenging problems, creating a tomorrow
                    we could all be happy to live in.
                </p>
            </div>
            <div id='interests'>
                <h3>Interests</h3>
                <p>
                    • Adventrous Home Cook <br/>
                    • Camping Enthusiast<br/>
                    • Graphic Artist {"&"} Designer
                </p>
            </div>
        </div>
    );
}