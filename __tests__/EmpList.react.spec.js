import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { EmployeesList } from "../src/EmployeesList";
import { Link } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
let mockClickEvent = jest.fn();
const empArray = [
  {
    Empid: 1,
    Name: "Dedie Bernhardi",
    email: "dbernhardi0@whitehouse.gov",
    Sex: "Female"
  },
  {
    Empid: 2,
    Name: "Weider Lenchenko",
    email: "wlenchenko1@sakura.ne.jp",
    Sex: "Male"
  },
  {
    Empid: 3,
    Name: "Kizzie Gerritzen",
    email: "kgerritzen2@wsj.com",
    Sex: "Female"
  }
];

describe("Employess List Test", () => {
  let wrapper = shallow(
    <EmployeesList empArray={empArray} requestAllEmpData={mockClickEvent} />
  );
  it("h1 tag is present", () => {
    expect(wrapper.find("h1").text()).toBe("Employee List");
  });
  it("number of employess Details should be 3", () => {
    //console.log(eButton.find(Link).debug());
    //expect(eButton.find("emp-row")).to.have.lengthOf(1);
    expect(wrapper.find(Link)).toHaveLength(3);
  });
  it("second employee should be Male", () => {
    expect(
      wrapper
        .find(Link)
        .at(1)
        .find(".emp-sex")
        .text()
    ).toBe("Male");
  });
});
