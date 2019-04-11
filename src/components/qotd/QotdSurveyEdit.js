import React from 'react';
import { connect } from 'react-redux';
import { fetchQotd, signIn, submitQotd } from '../../actions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

class QotdSurveyEdit extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    renderAnswers() {
        const choices = this.props.qotd.QuestionChoices;
        if (choices === undefined) {
            return <Form.Check type="radio" label="test"></Form.Check>
        } else {
            return choices.map(answer => {
                return (
                    <Form.Check type="radio" key ={choices.indexOf(answer)} id={choices.indexOf(answer)} label={answer} />
                );
             });
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    onButtonSubmit = (formValues) => {
        this.props.submitQotd(formValues);
    }

    render() {
        return (
            <div>
                <br />
                <Alert key='dark' variant='dark'>
                    <h4>Welcome {this.props.username}</h4>
                </Alert>
                <Card style={{ width: '26rem' }}>
                    <Card.Header as="h5">Question of the Day</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.qotd.QuestionText}</Card.Title>
                        <Card.Body>{this.props.qotd.QuestionDescription}</Card.Body>
                        <Form>
                            {this.renderAnswers()}
                        </Form>
                        <br />
                        <Button variant="primary" onSubmit={this.onButtonSubmit}>Submit</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        qotd: state.qotd.qotd,
        questions: state.questions,
        responseKey: state.responseKey,
        username: state.username.username
    }
}

export default connect(mapStateToProps, { signIn, fetchQotd, submitQotd })(QotdSurveyEdit);