import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions';


class QotdList extends React.Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    renderList() {
        return this.props.questions.map(question => {
            return (
                <div id={question.QuestionKey}>
                    {question.QuestionText}
                    <div>
                        {question.QuestionDescription}
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Previous Questions</h2>
                <div>{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: Object.values(state.questions)
        //questions: state.questions
    }
};

export default connect(mapStateToProps, { fetchQuestions })(QotdList);