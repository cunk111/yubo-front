import React, { Component } from 'react'
import styled from 'styled-components'

const StyledUserTable = styled.table`
  align       : center;
  width       : 70%;
  border-style: solid;
  border-color: var(--purple);
  margin      : auto;
`

export default class UserTable extends Component {
  handleClick(e) {
    console.log('event', e)
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
            {this.props.results.map(elt =>
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
