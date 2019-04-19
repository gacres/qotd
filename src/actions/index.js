import api from '../apis/qotd';
import history from '../history';
import { 
    LOG_IN,
    SIGN_IN, 
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

    dispatch({ type: SIGN_IN, payload: { username: username, questions: response.data.documents, responseKey: response.data.response_key }});

    if (response.data.response_key === "") {
        history.push('/qotd');
    } else {
        const questionKey = document.QuestionKey;
        history.push(`/qotd/${questionKey}`);
    }
};

export const fetchQotd = (username) => async dispatch => {
    console.log('called fetchQotd');
    const response = await api.post('/questionoftheday', { username: username });

    dispatch({ type: FETCH_QOTD, payload: response.data });
    history.push('/qotd');
};

export const fetchQuestions = () => async dispatch => {
    console.log('called fetchQuestions');
    const response = await api.get('/listquestionsoftheday', token);
    console.log(response.data);
    dispatch({ type: FETCH_QUESTIONS, payload: { questions: response.data.documents } });
    history.push('/responses');
};

export const submitQotd = (formValues) => async dispatch => {
    console.log('called submitQotd');
    const response = await api.post('/response', formValues);

    dispatch({ type: SUBMIT_QOTD, payload: response.data });
    history.push('/qotd');
};