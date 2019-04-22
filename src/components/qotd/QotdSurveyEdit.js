import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitQotd } from '../../actions';

class QotdSurveyEdit extends React.Component {
    componentDidMount() {
        console.log("QotdSurveyEdit.componentDidMount");
        console.log(this.props);
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div>
                    <br />
                    <div className="alert alert-danger">
                        {error}
                    </div>
                </div>
            )
        }
    }

    onRadioClick() {

    }

    renderAnswers = ({ input, meta }) => {
        const choices = this.props.qotd.QuestionChoices;
        console.log(choices);
        if (choices === undefined) {
            return <input type='radio' label='error'></input>;
        } else {
            let counter = 0;
            return choices.map((value, key) => {
                counter ++;
                //console.log(key);
                //console.log(value);
                return (
                    <div>
                        <input name="answer" type="radio" key={counter} id={key} label={value} autoComplete="off" />
                    </div>
                );
            });
        }
    }

    onSubmit(formValues) {
        this.props.submitQotd(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <br />
                <div className="alert alert-dark">
                    <h3>Welcome {this.props.username}</h3>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h4>Question of the Day</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.qotd.QuestionText}</h5>
                        <p className="card-text">{this.props.qotd.QuestionDescription}</p>
                        <Field name="answer" component={this.renderAnswers} />
                    </div>
                    <div className="card-footer">
                        <div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
                
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.answer) {
        errors.answer = 'Please provide an answer before tapping Submit';
    }

    return errors;
};

const formWrapped = reduxForm({
    form: 'surveyEdit',
    validate
})(QotdSurveyEdit);

const mapStateToProps = (state) => {
    //console.log("QotdSurveyEdit.mapStateToProps");
    //console.log(state);
    return {
        qotd: state.qotd,
        username: state.username.username,
        token: state.token
    }
};

export default connect(mapStateToProps, { submitQotd })(formWrapped);