import PropTypes from 'prop-types'



const Header = (props, onAdd) => {
  return (
    <header>
      <h1>Day Tracker</h1>
      <h3 style={Heading}>To Track your day on go.</h3>
      
    </header>
  )
}
// Header.defaultProps ={
//    title: "Day tracker",
//  }
// Header.propTypes={
//     title: PropTypes.string.isRequired,
// }
const Heading={
  color: 'white',
  backgroundColor: 'black',

}

export default Header
