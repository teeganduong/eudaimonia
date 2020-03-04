import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
font-weight: bold;
`

class Handle extends React.Component {
    render() {
        return (
            <Container {...this.props}>
              {this.props.name}
            </Container>
        )
    }
}

export default Handle;
