import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileCreds extends Component {
  render() {
    const { experience} = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <p>
          {exp.team === '' ? null : (
            <span>
              <strong>Team: </strong> <Link to="/jax"> {exp.team} </Link>
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-12">
        <div className="card card-body bg-light mb-3">
          <h3 className="text-center text-info">Team</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Team Listed</p>
          )}
        </div>
      </div>
      </div>
    );
  }
}

export default ProfileCreds;
