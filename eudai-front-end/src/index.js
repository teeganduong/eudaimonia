import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import GoalList from './GoalList';
import { DragDropContext } from 'react-beautiful-dnd';


class App extends React.Component {

    render () {
        return (
                <DragDropContext onDragEnd={this.onDragEnd}>
                <GoalList />
                </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
