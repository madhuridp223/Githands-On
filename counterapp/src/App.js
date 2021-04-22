import React ,{Component} from 'react';
import CountPeople from './Component/CountPeople';
import "./App.css";
class App extends Component{
    render(){
        return(
            <center>
            <div className="App">
                <CountPeople/>
            </div>
            </center>
        )
    }
}
export default App