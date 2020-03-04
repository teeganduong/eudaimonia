import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import Moment from 'react-moment';

const Container = styled.div``;
const Cell = styled.div`
display: table-cell;
width: 200px;
`;

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            complete: props.complete,
            flag: props.flag
        }
        this.completeToggled = this.completeToggled.bind(this);
        this.flagToggled = this.flagToggled.bind(this);
    }

    completeToggled() {
        this.setState((state, props) => ({
            complete: !state.complete
        }));
    }

    flagToggled() {
        this.setState((state, props) => ({
            flag: !state.flag
        }));
    }

    render() {
        return (
            <Draggable draggableId={'t'+this.props.id} index={this.props.index}>
              {(provided) => (
                  <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    >
                    <Cell>
                      <input type="checkbox" checked={this.state.complete} onChange={this.completeToggled}/>
                    </Cell>
                    <Cell>{this.props.name}</Cell>
                    {/*<Cell>{this.props.majorTags.join(", ")}</Cell>
                    <Cell>{this.props.minorTags.join(", ")}</Cell>*/}
                    <Cell>
                      {this.props.due_date !== null &&
                          <Moment format='MM/DD/YYYY'>
                                {this.props.due_date}
                              </Moment>
                          }
                    </Cell>
                    <Cell>
                      <input type="checkbox" checked={this.state.flag} onChange={this.flagToggled} />
                    </Cell>
                  </Container>
              )}
            </Draggable>
        );
    }
}

export default Task;
