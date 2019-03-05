import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as userActions from '../../actions/userActions'

const StyledUserTable = styled.table`
  align       : center;
  width       : 70%;
  border-style: solid;
  border-color: var(--purple);
  margin      : auto;
`

class UserTable extends React.Component {
  handleClick(e) {
    console.log('event', e)
  }
  render() {
    console.log(this.props)
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
            {this.props.users.map(elt =>
              (<tr key={elt.id} onClick={this.handleClick}>
                <th scope='col'>{elt.id}</th>
                <th scope='col'>{elt.username}</th>
                <th scope='col'>{elt.city}</th>
                <th scope='col'>{elt.country}</th>
                {elt.isDeleted ?
                  (<th scope='col'>cross.svg</th>) : (<th scope='col'>check.svg</th>)}
              </tr>))}
          </tbody>
        </StyledUserTable>
      )
    } catch (e) {
      console.log('Error UserTable: ', e)
      return null
    }
  }
}

UserTable.propTypes = {
  userActions: PropTypes.objectOf(PropTypes.func).isRequired,
  users: PropTypes.shape({
    id: PropTypes.number,
    isDeleted: PropTypes.bool,
    name: PropTypes.string,
    username: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
}

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
