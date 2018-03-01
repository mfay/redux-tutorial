import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from './userActions.jsx';

class Layout extends React.Component {

    render() {
        return (
            <div>
                <h1>Users</h1>
                <UserList users={this.props.users} onClick={this.props.fetchUsers} />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

class UserList extends React.Component {
    render() {
        const peeps = this.props.users.map(user => <li>{user.name}</li>);

        if (peeps.length > 0) {
            return (
                <ul>{peeps}</ul>
            );
        } else {
            return (
                <button onClick={this.props.onClick}>Load Users</button>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);