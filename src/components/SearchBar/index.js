// import React, { Component } from 'react'
// import styled from 'styled-components'
// // import api from '../../modules/api'
//
//
// const StyledSearchBar = styled.div`
//   .search-input {
//     margin: 15px 0 15px 0;
//   }
// `
//
// export default class SearchBar extends Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       results: [],
//       searchValue: '',
//     }
//     this.handleClick = this.handleClick.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handlePut = this.handlePut.bind(this)
//   }
//
//   async componentDidMount() {
//     // this.setState({
//     //   results: await api.getUserList(20, 0)
//     // })
//   }
//
//   async handleClick() {
//     // const res = await api.getUserById(this.state.searchValue)
//     // this.setState({
//     //   results: res,
//     // })
//   }
//
//   async handlePut() {
//     const dull = this.state.results.slice(0, 1)[0]
//     dull.isDeleted = true
//
//     // const attempt = await api.putUserUpdate(dull)
//     // if (Object.keys(attempt).includes('id', 'isDeleted', 'city', 'country', 'username')) {
//     //   console.log('un objet user m\'est retourné')
//     //   const newState = this.state
//     //   newState[attempt.id] = attempt
//     //   console.log(newState[attempt.id])
//     //   this.setState(newState)
//     // }
//   }
//
//   handleChange(event) {
//     this.setState({ searchValue: event.target.value })
//   }
//
//   // Ceinture et bretelles
//   handleSubmit(e) {
//     e.preventDefault()
//   }
//
//   render() {
//     try {
//       return (
//         <StyledSearchBar>
//           <button onClick={this.handlePut}>TEST UPDATE</button>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               type='text'
//               className='search-input'
//               autoComplete='off'
//               placeholder='Search by id'
//               value={this.state.searchValue}
//               onChange={this.handleChange}
//             />
//             <button className='button is-info' onClick={this.handleClick}>
//               Add Item
//             </button>
//           </form>
//         </StyledSearchBar>
//       )
//     } catch (e) {
//       console.log('Error SearchBar: ', e)
//       return null
//     }
//   }
// }
