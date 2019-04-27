import api from '../apis/qotd';
import history from '../history';
import { 
    LOG_IN,
    SIGN_IN,
    FETCH_RESULT,
    FETCH_QOTD,
    FETCH_QUESTIONS,
    SUBMIT_QOTD
} from './types';

var config = {headers: { 'Content-Type': 'application/json' }, auth: { 'username': 'gacres', 'password': 'c3ugforever'}};
var token = {headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTU2ODcyMDN9.aqywbV17158makmkVOz-eK8Zdx_f-5Bp3-61MMiQMMA' }};

export const login = () => async dispatch => {
    const response = await api.get('/login', config);

    dispatch({ type: LOG_IN, payload: response.data});
    history.push('/');
}

export const signIn = (username) => async dispatch => {
    const response = await api.post('/questionoftheday', { "username": username }, token);

    let responseData={...response.data, username: username};
    dispatch({ type: SIGN_IN, payload: responseData });

    if (response.data.response_key === "") {
        history.push('/qotd');
    } else {
        const questionKey = document.QuestionKey;
        history.push(`/result/${questionKey}`);
    }
};

export const fetchResult = (questionKey) => async dispatch => {
    console.log("called fetchResult");
    const response = await api.get(`/resultsforquestionkey/${questionKey}`, token);

    dispatch({ type: FETCH_RESULT, payload: response.data });
    history.push(`/result/${questionKey}`);
}

export const fetchQotd = (questionKey) => async dispatch => {
    console.log('called fetchQotd');
    const response = await api.get(`/resultsforquestionkey/${questionKey}`, token);

    dispatch({ type: FETCH_QOTD, payload: response.data });
    history.push(`/result/${questionKey}`);
};

export const fetchQuestions = () => async dispatch => {
    console.log('called fetchQuestions');
    const response = await api.get('/listquestionsoftheday', token);
    
    dispatch({ type: FETCH_QUESTIONS, payload: { questions: response.data.documents } });
    //history.push('/responses');
};

export const submitQotd = (formValues) => async dispatch => {
    console.log('called index.js:submitQotd');
    console.log('formValues: ' + formValues);
    const response = await api.post('/response', formValues);

    dispatch({ type: SUBMIT_QOTD, payload: response.data });
    history.push('/qotd');
};