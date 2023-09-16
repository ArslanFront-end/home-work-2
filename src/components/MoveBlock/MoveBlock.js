import '../../index.css'
import React, {Component} from "react";
import video from '../video/fon4.mp4'
class MoveBlock extends Component{
    constructor(props) {
        super(props)
        this.state = {
            color: "red",
            color2: "blue"
        }
    }

    changeColor = () => {
        this.setState({color: this.state.color ==="red"?"blue":"red"})
        this.setState({color2: this.state.color2 ==="blue"?"red":"blue" })
    }

    render(){
        return(
            <div className="wrapper">
                <video src={video} autoPlay loop controls></video>
                <div className="container" >
                    <div className="red-block" onClick={() => this.changeColor()} style={{backgroundColor: this.state.color}}>

                    </div>
                    <div className="blue-block" onClick={() => this.changeColor()} style={{backgroundColor: this.state.color2}}>

                    </div>
                </div>
            </div>
        )
    }
}

export default MoveBlock
