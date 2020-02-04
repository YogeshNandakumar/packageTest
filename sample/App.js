import React from 'react';
import BasicIncrement from '../src/BasicIncrement';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to REACT!</h1>
                <BasicIncrement />
            </div>
        )
    }
}

export default App