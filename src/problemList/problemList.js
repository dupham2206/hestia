import React from 'react';
import GlobalStatusBar from '../appBar/appBar';
import ProblemTabEditor from './problemTab/problemTabEditor';

class ProblemList extends React.Component {
    render() {
        return(
            <>
                <GlobalStatusBar />
                <ProblemTabEditor/>
            </>
        )
    }
}

export default ProblemList;