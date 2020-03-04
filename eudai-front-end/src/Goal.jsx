import React from 'react';
import Task from './Task';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Handle from './Handle';

const Container = styled.div`
border: 1px dashed black;
`;

const TasksContainer = styled.div``;

class Goal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            tasks: []
        };
    }

    getTasks() {
        fetch('http://localhost:9000/tasks/' + this.props.id)
            .then(res => res.json())
            .then((result) => {this.setState(
                {
                    isLoaded: true,
                    tasks: result
                }
            )});
    }

    componentDidMount() {
        this.getTasks();
    }

    render() {
        if (!this.state.isLoaded){
            return (
                <div>Loading...</div>
            );
        } else {
            return (
                <Draggable draggableId={'g'+this.props.id} index={this.props.index}>
                  {(provided) => (
                      <Container
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        >
                        <Handle  {...provided.dragHandleProps} name={this.props.name} />
                        <Droppable
                          droppableId={'gd'+this.props.id}
                          type={"Tasks"}
                          >
                          {(provided) => (
                              <TasksContainer
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                >
                                {this.state.tasks.map((task, index) => <Task key={task.task_id} index={index} id={task.task_id} {...task} /> )}
                              {provided.placeholder}
                              </TasksContainer>
                          )}
                      </Droppable>
                          </Container>
                  )}
                </Draggable>
            );
        }
    }
}

export default Goal;
