import React from 'React';
import {render} from 'react-dom'

class App extends Component {
    render() {
        return (
            <div className="boom">
                <h1>Boom</h1>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'))