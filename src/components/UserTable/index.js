import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import PropTypes from 'prop-types'

import * as userActions from '../../actions/userActions'

const StyledUserTable = styled.table`
  align       : center;
  width       : 70%;
  border-style: solid;
  border-color: #1C61C6;
  margin      : auto;
`

class UserTable extends React.Component {
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
  }

  handleClick(id) {
    console.log('event', id.target)
  }

  handleUpdate() {
    // this.props.userActions.getUserList(20, 1)
    this.props.userActions.getUserList(20, 0)
  }

  render() {
    try {
      return (
        <StyledUserTable className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Username</th>
              <th scope='col'>City</th>
              <th scope='col'>Country</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(elt => (
              <tr key={elt.id} onClick={this.handleClick}>
                <th scope='col'>{elt.username}</th>
                <th scope='col'>{elt.city}</th>
                <th scope='col'>{elt.country}</th>
                {elt.isDeleted ?
                  (<th scope='col'>cross.svg</th>) : (<th scope='col'>check.svg</th>)}
              </tr>
            ))}
          </tbody>
          <button onClick={this.handleUpdate}>update</button>
        </StyledUserTable>
      )
    } catch (e) {
      console.log('Error UserTable: ', e)
      return null
    }
  }
}

// UserTable.propTypes = {
//   userActions: PropTypes.objectOf(PropTypes.func).isRequired,
//   users: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     isDeleted: PropTypes.bool,
//     name: PropTypes.string,
//     username: PropTypes.string,
//     city: PropTypes.string,
//   })).isRequired,
// }

const mapStateToProps = state => ({
  users: state.users,
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTable)
