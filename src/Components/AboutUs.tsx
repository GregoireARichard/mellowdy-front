import React, { useState } from "react";
import TeamBubble from "./SubComponents/TeamBubble";
import moon from "../img/moon.svg"
import logo from "../img/Logo2.svg"
import Loulou from "../img/SubComponents/Bubble/Loulou.png"

function AboutUs(){

    var [bubbles,setBubbles] = useState([
        {bubbleid:1, name:"Loulou Cucu", post:"Front-end Developer", musictitles:["Prada", "GATTI","Killa Killa","I Know You","Man Of The Year","Miss You a Little","Bounce Out With That","Writing On The Wall","That Way", "Psycho, Pt.2"], artistnames:["24kGoldn","JACKBOYS","KSI","Lil Skies","Juice WRLD","Bryce Vine","YBN Nahmir","French Montana","Lil Uzi Vert","Russ"],links:["https://open.spotify.com/track/4wuMS7NGVbU7hdu94K5icd?si=26a7ac59e5724860","https://open.spotify.com/track/40mjsnRjCpycdUw3xhS20g?si=392767c51646415a","https://open.spotify.com/track/13Npvj6mfPFQL5DiBKWSIQ?si=b3db7bba65e04d67","https://open.spotify.com/track/5Cg98kiDYtCEHmjcKD0CJD?si=0e641630a58c42f2","https://open.spotify.com/track/7AvprzMsRJpybaalckaT8c?si=3a8c20b13f7a43bc","https://open.spotify.com/track/2tijppLc0gaWA2AfPDANvq?si=cd101373e2cb4a09","https://open.spotify.com/track/5gQcxYXqnofyocKgEbGYKt?si=e64feab9dc804baf","https://open.spotify.com/track/7ntUbTIwmwOD6ygCMRZT6e?si=28823fe83e954113","https://open.spotify.com/track/2ajzBr7vwHTEBeqDzcsNRC?si=35a20e1de6094d85","https://open.spotify.com/track/26OhjtaTamFocE08t83ml6?si=d08ed254987f4619"]},
        {bubbleid:1, name:"Gregoire Richard", post:"CTO - Back-end Developper", musictitles:["I remember","Mysterieum","Ultraviolet","Donnie Darko","Such a Remarkable Day","Tearing Me Up - RAC Mix","Go to keep on","Peach","Ar.Mour","Too Late"], artistnames:["Jon Hopkins","Hammock","Portico Quartet","Let's Eat Grandma","Charlotte Gainsbourg","Bob Moses","The chemical brothers","Future Islands","UNKLE","Tourist"],links:["https://open.spotify.com/track/45oJPQDkRbRipePLcXRdEL?si=277dc84fdff846c5","https://open.spotify.com/track/2dqYago9NyGXXbfdujj9OQ?si=36d23a7d46c8464f","https://open.spotify.com/track/1CdFAAgq4NisqVRDfyD8YV?si=5970e52c70024d2d","https://open.spotify.com/track/5Pn4AYzF6awkiD9zdnsRHt?si=b2fad3028a5f4f2f","https://open.spotify.com/track/3pilFnaQo0TguWvkOrmrNO?si=2015ebdeb4a24331","https://open.spotify.com/track/3ITsXUBPf1rMjE6C1Hzpb6?si=adbfaf530dbd4a49","https://open.spotify.com/track/4vh6Rn6FVG4w79JmlZ5p7d?si=30d8fb5276914687","https://open.spotify.com/track/44Y47AT30lSl5iPMZr6o83?si=8bf2db0755ca4455","https://open.spotify.com/track/6NZy3MCnIf6A6lXpCWCQ0q?si=809f15a684054685","https://open.spotify.com/track/5F187Is00MF7PGwgeCbS8c?si=388d84b3ba1643eb"]    },
        {bubbleid:1, name:"Lancelot Perinet-Marquet", post:"Marketing officer", musictitles:["Somendrom","Do for Vejle","Baker Street","Too Much Time On My Hands","We're An American Band -Remastered 2002 ","Waiting For A Girl Like You","If I'd Been The One","Le temps de l'amour ","Never Been To Spain","Take It Back"],artistnames:["Hans Philip","Veile Boldklub","Gerry Rafferty","Styx","Grand Funk Railroad","Foreigner","38 Special","Françoise Hardy","Three Dog Night","Drew Sycamore"],links:["https://open.spotify.com/track/3fVfF207M1h9sxUCGguHhV?si=9486a7e7e0f9464a","https://open.spotify.com/track/76IIFcYspHXvwfsgS2y7KC?si=dc508aeb8bb44047","https://open.spotify.com/track/5gOd6zDC8vhlYjqbQdJVWP?si=2886d99ab1564709","https://open.spotify.com/track/4hWUOIDHda9XOb1zDchftP?si=c2761f897b19416f","https://open.spotify.com/track/3XcjIvaZVUFAIdIYZqY9bd?si=2916a57b1acc4516","https://open.spotify.com/track/2OgVsp77En2nju8pnCieVU?si=696c325cfc974a16","https://open.spotify.com/track/6XomFpGnHv0hYgUoW75dOw?si=44c8481b52e54e27","https://open.spotify.com/track/6rqUOLt9dpfMANLMKTzoWj?si=bfb205fd9bb646d6","https://open.spotify.com/track/61OQuSzsom6geFCA18JwO6?si=bf1bcbd3026b40ef","https://open.spotify.com/track/0yzEGK3wzVhTPpl9zyqYwF?si=5606815d212f49cf"]},
        {bubbleid:1, name:"Léna Vulliez", post:"UI/UX designer", musictitles:["Pauline","Don't call me angel","Aristocrate","Genius","I need you tonight","Break my heart","La dot","Thefear","Don't Panik","Into the unknown"],artistnames:["Pomme","Ariana Grande","Heuss l'enfoiré","Sia","Punkin Machine","Dua Lipa","Aya Nakamura","Parcels","La Fine Equipe","Panic! At The Disco"],links:["https://open.spotify.com/track/4ysbxlUlb00V0vFvq4Ixk1?si=17aac5eb8e3b4e13","https://open.spotify.com/track/6zegtH6XXd2PDPLvy1Y0n2?si=25f9b21749024589","https://open.spotify.com/track/7gNlaZaMIjRUfnAYd9Dvmt?si=1c5e38fde16c4266","https://open.spotify.com/track/4xigPf2sigSPmuFH3qCelB?si=5f53edc502ca49d8","https://open.spotify.com/track/12SY1IDzol5dg1yBTUoKYx?si=c91c287c1bb6463f","https://open.spotify.com/track/017PF4Q3l4DBUiWoXk4OWT?si=86f9290cd9e4479c","https://open.spotify.com/track/3aRgAfrt6aQW8IimLq2aVG?si=3df6b337b3d243e7","https://open.spotify.com/track/3CC8GnChqlFoM49XBDAZ0w?si=937f5eb67b6f4da9","https://open.spotify.com/track/501rgKmJ2pA7XogmN5dBo5?si=ae48ddef6037495f","https://open.spotify.com/track/421eObjg0DTm2qajJl5OJm?si=c29e7ceb8d014eeb"]},
        {bubbleid:1, name:"Floriane Ryan", post:"UI/UX designer", musictitles:["Addicted to you","Round round","When you find me","Shy Away","NOT SOBER","Needed me","Valentino","Pain","GOODMORNINGTOKYO!","For The Night"],artistnames:["Shakira","Sugababes","Plenka","Twenty One Pilots","The Kid Laroi","Rihanna","24kGoldn","PinkPantheress","TOKYO'S REVENGE","Pop Smoke"],links:["https://open.spotify.com/track/4zy1s9GnxWsNzZp1688euA?si=5016e116780a4ce2","https://open.spotify.com/track/5O2Ft5ENCfAh6JCgykJs76?si=1a1b492e23d645b2","https://open.spotify.com/track/5Ea4HMH63TSbA19V81HYa9?si=54b485b0506d40e2","https://open.spotify.com/track/2nG54Y4a3sH9YpfxMolOyi?si=41cad83201d0413c","https://open.spotify.com/track/1JXBNvlDEl2epKSJ9EOgKX?si=4eec82e289b94226","https://open.spotify.com/track/4pAl7FkDMNBsjykPXo91B3?si=22b7052550614e10","https://open.spotify.com/track/6piAUJJQFD8oHDUr0b7l7q?si=dff3c83fa8364d5b","https://open.spotify.com/track/4S4QJfBGGrC8jRIjJHf1Ka?si=de704ee37a7d4b96","https://open.spotify.com/track/0Q2n5yzl2XRqYbV77tZNYp?si=e70fdd0f52ab483b","https://open.spotify.com/track/0PvFJmanyNQMseIFrU708S?si=9ddd4298378d489a"]},
        {bubbleid:1, name:"Oscar Satre", post:"Back-end Developper", musictitles:["Stay","One More Time","Down For The Ride","Untouchable","Run It Up","Feel Good","Memories","Echo","Lay It All On Me","Limelight"], artistnames:["Cheat Code","Robin Schulz","ItaloBrothers","Tritonal","Seeb","Gryffin","Laidback Luke","Yves V","Rudimental","Just A Gent"],links:["https://open.spotify.com/track/7wGoRwE6MZnm9flIMKWPul?si=9e515206d2154d37","https://open.spotify.com/track/3LdIlLTimyTyVfscwHwMiQ?si=b9e595e7b1384368","https://open.spotify.com/track/0L8NzGlH4nmnbOUSg4gO72?si=8450b4cacd2e42d4","https://open.spotify.com/track/05dL7chWJaVjMJnGO1YCKk?si=05e91767fa484178","https://open.spotify.com/track/6KQYQ5ycUHmDYFjL2jLXYC?si=77c0e52a80a94a1b","https://open.spotify.com/track/0Ev562zA4pmUsBqjxsxxdx?si=6b737a41cf4e4540","https://open.spotify.com/track/7b5cTNDPRxrnbjQYI7RXX7?si=8496fef974444ab4","https://open.spotify.com/track/57Zcl7oKKr29qHp38dzzWi?si=ab3af61b30da4ca8","https://open.spotify.com/track/52yXMESRTSLIF6Xs9WVDlW?si=13eea7c525ad4d91","https://open.spotify.com/track/3mof6Z6vz6gonsuIEQXank?si=f1aa315a6f724ee5"]},
        {bubbleid:1, name:"Kylian Ferrandez", post:"Marketing officer", musictitles:["Hey, Soul Sister","Relapse","Living Life, In The Night","Never Forget","It's You","Beat","I Gotta Feeling","stressed","All Night","Get You To The Moon "], artistnames:["Train","Slayloverboy","Cheriimoya","GASHI","Ali Gatie","Lil Tracy","Black Eyed Peas","Slayloverboy","2Scratch","Kina"],links:["https://open.spotify.com/track/4HlFJV71xXKIGcU3kRyttv?si=b37d8f4495e3405c","https://open.spotify.com/track/2A11vABVQtoqVovsbE7Ir2?si=2a6728c4cb7c4b31","https://open.spotify.com/track/6ChnGkBwnq2HUJD24YhMhW?si=8232c1c4c3f14262","https://open.spotify.com/track/0oFHlnUwZVhizux1FOAsfr?si=68e8980e9d5248c9","https://open.spotify.com/track/5DqdesEfbRyOlSS3Tf6c29?si=7e3b5ded052c4903","https://open.spotify.com/track/4IOmpWHND1FVjT7EFeZhLp?si=7caae016d3364dbe","https://open.spotify.com/track/4kLLWz7srcuLKA7Et40PQR?si=872dd933472c4624","https://open.spotify.com/track/0HXwMdqM8vg4gNeh8oOdkR?si=7030b37cdfac457d","https://open.spotify.com/track/0Y2EhhpZTKChZNerxIt6T9?si=9760db7793564a85","https://open.spotify.com/track/4ZLzoOkj0MPWrTLvooIuaa?si=7f83b94171c0499c"]}
    ])

    

    return(
        <div className="aboutus">
            <div className="headerau">
                <img src={logo} alt="Mellowdy's logo" />
                <div className="menu">
                    <p className="actif">About us</p>
                    <p>New Playlist</p>
                    <img src={moon} alt="A moon icon" />
                </div>
            </div>
            <div className="contentAboutUs">
                <h1>About us</h1>
                <p className="resume">Our team was composed of seven students in their third year of the Hetic school, from the Grande Ecole program. We had to create a service application using an api during a week-long Full Stack project. For our team, it will be the api of spotify which will hold our attention, we thus created with this last one a musical application. Our concept is to find you a music playlist based on your mood, and the few criteria you have entered.</p>
                <p className="question">Getting to know us through music ?</p>            
            </div>
            <div className="bubbles">
                {
                bubbles.map( (bubble, index) =>(
                    <TeamBubble
                        key={index}
                        index={index}
                        bubble={bubble}
                        getRightClickedId={(index: number) : void => {
                            if(bubbles[index].bubbleid!=10){
                                let temporarybubbles = [...bubbles];
                                let temporarybubble = {...temporarybubbles[index]}
                                temporarybubble.bubbleid+=1
                                temporarybubbles[index]=temporarybubble
                                setBubbles(temporarybubbles)     
                        }
                        }}
                        getLeftClickedId={(index: number) : void => {
                            if(bubbles[index].bubbleid!=1){
                                let temporarybubbles = [...bubbles];
                                let temporarybubble = {...temporarybubbles[index]}
                                temporarybubble.bubbleid-=1
                                temporarybubbles[index]=temporarybubble
                                setBubbles(temporarybubbles)
                            }
                        }}
                        getMiddleClickedId={(index: number) : void =>{
                            
                                //window.open(bubbles[index].links[bubbles[index].bubbleid], '_blank').focus()
                            
                        }}
                            />
                )) 
                }
                <img src={Loulou} alt="Louis Cuenot" className="loulou"/>
                <img src={Loulou} alt="Grégoire Richard" className="greg"/>
                <img src={Loulou} alt="Lancelot Perinet-Marquet" className="lancelot"/>
                <img src={Loulou} alt="Léna Vulliez" className="lenaze"/>
                <img src={Loulou} alt="Floriane Ryan" className="flow"/>
                <img src={Loulou} alt="Oscar Satre" className="oscar"/>
                <img src={Loulou} alt="Kylian Ferrandez" className="kylian"/>
            </div>
        </div>
    );

    
}

export default AboutUs;