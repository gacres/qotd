import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

class QotdSurveyDisplay extends React.Component {

    render() {
        return (
            <div>
                <br />
                <Card style={{ width: '26rem' }}>
                    <Card.Header as="h5">Question of the Day</Card.Header>
                    <Card.Body>
                        <Card.Title>What is your favourite beer?</Card.Title>
                        <div>
                            <ProgressBar striped label="Australian 15" variant="success" now={15} />
                            <br/>
                            <ProgressBar striped label="Belgian 60" variant="info" now={60} />
                            <br/>
                            <ProgressBar striped label="Canadian 25" variant="warning" now={25} />
                            <br/>
                            <ProgressBar animated label="German 65" variant="danger" now={65} />
                            <br/>
                            <ProgressBar striped label="Guiness 50" variant="success" now={50} />
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default QotdSurveyDisplay;