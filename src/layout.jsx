import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from './userActions.jsx';

class Layout extends React.Component {

    handleClick() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <UserList users={this.props.users} />
                <button onClick={this.handleClick.bind(this)}>Load</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

class UserList extends React.Component {
    render() {
        const peeps = this.props.users.map(user => <li>{user.name}</li>);

        return (
            <ul>{peeps}</ul>
        );
    }
}

export default connect(mapStateToProps)(Layout);