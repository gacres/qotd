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

export const login = () => async dispatch => {
    const response = await api.get('/login', config);

    console.log(response.data);
    dispatch({ type: LOG_IN, payload: response.data});
    history.push('/');
}

export const signIn = (username) => async dispatch => {
    const response = await api.post('/questionoftheday', { "username": username }, config);

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
    const response = await api.get('/listquestionsoftheday');

    dispatch({ type: FETCH_QUESTIONS, payload: response.data });
    history.push('/responses');
};

export const submitQotd = (formValues) => async dispatch => {
    console.log('called submitQotd');
    const response = await api.post('/response', formValues);

    dispatch({ type: SUBMIT_QOTD, payload: response.data });
    history.push('/qotd');
};