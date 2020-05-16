import React from "react";
import { connect } from "react-redux";
import { requestEmpAddrData } from "./actions/empAddrAction";
import { Link } from "react-router-dom";

export class EmployeesAddr extends React.Component {
  super(props) {}
  componentDidMount() {
    const empID = this.props.match.params.id;
    this.props.requestEmpAddrData(empID);
  }

  render() {
    const { addrArray = [] } = this.props;
    return (
      <>
        <h1>Employess Address</h1>
        <p>
          <Link className="back-bt" to="/">
            Go Back
          </Link>
        </p>
        <div className="adress-wrapper">
          {addrArray.length > 0 ? (
            addrArray.map((elem, index) => {
              return (
                <div key={index} className="adress-card">
                  <p>{elem.name}</p>
                  <p>{elem.addr_line1}</p>
                  <p>{elem.addr_line2}</p>
                  <p>
                    {elem.city},{elem.state}-{elem.zipcode}
                  </p>
                  <p>{elem.country}</p>
                </div>
              );
            })
          ) : (
            <div className="no-adress-card">No address added</div>
          )}
        </div>
      </>
    );
  }
}

const mapsStsteToProps = state => {
  return {
    addrArray: state.empAddress.data
  };
};

export default connect(
  mapsStsteToProps,
  { requestEmpAddrData }
)(EmployeesAddr);
