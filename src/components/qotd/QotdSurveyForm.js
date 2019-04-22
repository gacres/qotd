// import React from 'react';
// import { Field, reduxForm } from 'redux-form'

// class QotdSurveyEdit extends React.Component {

//     componentDidMount() {
//         console.log(this.props);
//     }

//     renderInput({ input }) {
//         return <input {...input} />;
//     }

//     onSubmit = (formValues) => {
//         console.log(formValues);
//     }

//     render() {
//         return (
//             <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="container">
//                 <br />
//                 <div className="alert alert-dark">
//                     <h3>Welcome {this.props.username}</h3>
//                 </div>
//                 <div className="card">
//                     <div className="card-header">
//                         <h4>Question of the Day</h4>
//                     </div>
//                     <div className="card-body">
//                         <h5 className="card-title">QuestionText goes here</h5>
//                         <p className="card-text">QuestionDescription goes here</p>
//                         <Field name="answer" component={this.renderInput} label="What is your answer?" />
//                     </div>
//                     <div>
//                         <button type="submit" className="btn btn-primary">Submit</button>
//                     </div>
//                 </div>
//             </form>
//         );
//     }
// }

// export default reduxForm({
//     form: 'surveyEdit'
// })(QotdSurveyEdit);