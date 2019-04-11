import React from 'react';
import { Router, Route } from 'react-router-dom';
import QotdList from './qotd/QotdList';
import QotdLogin from './qotd/QotdLogin';
import QotdSurveyEdit from './qotd/QotdSurveyEdit';
import QotdSurveyDisplay from './qotd/QotdSurveyDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './Navigation';
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Navigation />
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <Route path="/" exact component={QotdLogin} />
                                <Route path="/qotd" exact component={QotdSurveyEdit} />
                                <Route path="/qotd/:id" exact component={QotdSurveyDisplay} />
                                <Route path="/results" exact component={QotdList} />
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </Router>
        </div>
    );
};

export default App;