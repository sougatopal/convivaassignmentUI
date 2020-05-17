import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { requestAllEmpData } from "./actions/empListAction";

export class EmployeesList extends React.Component {
  componentDidMount() {
    this.props.requestAllEmpData();
  }
  render() {
    const { empArray = [] } = this.props;
    return (
      <>
        <div className="empApp">
          <h1>Employee List</h1>
          <div className="emp-detail-wrapper ">
            <div className="emp-row">
              <div className="empID">Empid</div>
              <div className="responsive-wrp">
                <div className="emp-name">Name</div>
                <div className="emp-email">Email</div>
                <div className="emp-sex">Sex</div>
              </div>
            </div>

            {empArray.map((elem, index) => {
              return (
                <Link
                  className="emp-row"
                  key={index}
                  to={`/address/${elem.Empid}`}
                >
                  <div className="empID">{elem.Empid}</div>
                  <div className="responsive-wrp">
                    <div className="emp-name">{elem.Name}</div>
                    <div className="emp-email">{elem.email}</div>
                    <div className="emp-sex">{elem.Sex}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    empArray: state.allEmpData.data
  };
};

export default connect(
  mapStateToProps,
  { requestAllEmpData }
)(EmployeesList);
