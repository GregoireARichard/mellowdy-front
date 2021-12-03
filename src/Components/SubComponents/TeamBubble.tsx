import React from "react";
import "../../css/SubComponents/TeamBubble.css";
import playicon from "../../img/SubComponents/Bubble/Play-icon.svg";
import nextmusicicon from "../../img/SubComponents/Bubble/next-music-icon.svg"
import { Bubble } from "../../decl";

export type TeamBubbleProps = {
    key:number,
    index: number,
    bubble: Bubble,
    getRightClickedId: (index: number) => void,
    getLeftClickedId: (index: number) => void,
    getMiddleClickedId: (index: number) => void
}

class TeamBubble extends React.Component<TeamBubbleProps> {
    

    handleBubbleRightClick = () => {
        const { index } = this.props
        this.props.getRightClickedId(index)
    }

    handleBubbleLeftClick = () => {
        const { index } = this.props
        this.props.getLeftClickedId(index)
    }

    handleBubbleMiddleClick = () => {
        const {index}=this.props
        this.props.getMiddleClickedId(index)
    }
    
    render() {
        const { bubble } = this.props

        return(
            <div className="bubble">
                <div className="bubble-infos">
                    <h2 className="teammate-name">{bubble.name}</h2>
                    <p className="teammate-position">{bubble.post}</p>
                    <p className="teammate-musical-desc">My musical description</p>
                    <div className="music-interface">
                        <img  src={nextmusicicon} alt="Previous music icon" onClick={this.handleBubbleLeftClick}/>
                        <img src={playicon} alt="Track play icon" onClick={this.handleBubbleMiddleClick}/>
                        <img src={nextmusicicon} alt="Next music icon" className="nextmusicicon" onClick={this.handleBubbleRightClick}/>
                    </div>
                    <p className="teammate-music"><span>{bubble.musictitles[bubble.bubbleid]}</span> - {bubble.artistnames[bubble.bubbleid]}    </p>
                </div>
            </div>
        );
    }
}

export default TeamBubble;