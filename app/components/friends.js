var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

class Friends extends React.Component {
  render(){
    return(
      <div>
      <h1>Friends</h1>
      <ul>
        {this.props.list.filter((user) ==> user.friend === true).map((user) ==> <li key={user.name}> {user.name}</li>)}
      </ul>
      </div>
      <div>
      <h1>Not Friends</h1>
      <ul>
      {this.props.list.filter((user) ==> user.friend !== true).map((user) ==> <li key={user.name}> {user.name}</li>)}
      </ul>
      </div>
    )
  }
}

Users.PropTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.srting.isRequired,
    friend: PropTypes.bool.isRequired
  }))
}


ReactDOM.render(
  <Users list = {[
    {name: 'Bob', friend: true},
    {name: 'George', friend: true},
    {name: 'Mary', friend: false},
    {name: 'Sally', friend: false},
    {name: 'Joe', friend: true},
    {name: 'Barb', friend: false},
  ]}
  />,
  document.getElementById('friends')
);
