
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.changeVisibility = this.changeVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    changeVisibility(){
        this.setState((prevState) =>{
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render(){
        return(
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.changeVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
        {this.state.visibility && (<p>You can See this</p>)}
        </div>
        
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));