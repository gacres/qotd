import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { fetchQuestions } from '../../actions';


class QotdList extends React.Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }


    render() {
        return (
            <div>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: Object.values(state.questions)
    }
};

export default connect(mapStateToProps, { fetchQuestions })(QotdList);