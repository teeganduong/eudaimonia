import React from 'react';
import Goal from './Goal';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const GoalTable = styled.div`
display: table;
width: auto;
border: 1px solid black;
border-spacing: 5px;
`;
const Container = styled.div`

`;

class GoalList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            goals: []
        };
    }

    getGoals() {
        fetch('http://localhost:9000/goals/0')
            .then(res => res.json())
            .then((result) => {this.setState(
                {
                    isLoaded: true,
                    goals: result
                }
            )});
    }

    componentDidMount() {
        this.getGoals();
    }

    render() {
        if (!this.state.isLoaded){
            return (
                <div>Loading...</div>
            );
        } else {
            return (
                <GoalTable>
                  <Droppable droppableId='GoalTable' type="Goals">
                    {(provided) => (
                        <Container
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          >
                          {this.state.goals.map((goal, index) => 
                                                <Goal
                                                      key={goal.goal_id}
                                                      id={goal.goal_id}
                                                      name={goal.name}
                                                      index={index}
                                                      />
                                               )}
                        {provided.placeholder}
                        </Container>
                    )}
                </Droppable>
                    </GoalTable>
            );
        }
    }
}

export default GoalList;
