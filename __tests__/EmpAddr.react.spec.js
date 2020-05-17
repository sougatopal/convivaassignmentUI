import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { EmployeesAddr } from "../src/EmployeesAddr";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
let mockClickEvent = jest.fn();
let empAddr = [
  {
    name: "xyz",
    addr_line1: "Mantri Gelatin",
    addr_line2: "Doddakanelli",
    city: "Bangalore",
    state: "Karnataka",
    zipcode: "560035",
    country: "India"
  },
  {
    name: "abc",
    addr_line1: "Shobha Greens",
    addr_line2: "Sarjapur",
    city: "Bangalore",
    state: "Karnataka",
    zipcode: "560035",
    country: "India"
  }
];
let mockMatch = {
  params: {
    id: 1
  }
};
describe("Employess Address Test", () => {
  let wrapper = shallow(
    <EmployeesAddr
      addrArray={empAddr}
      requestEmpAddrData={mockClickEvent}
      match={mockMatch}
    />
  );
  it("number of employess Address should be 2", () => {
    expect(wrapper.find(".adress-card")).toHaveLength(2);
  });
  it("number of employess Address should be 2", () => {
    expect(
      wrapper
        .find(".adress-card")
        .at(1)
        .childAt(2)
        .text()
    ).toBe("Sarjapur");
  });
  it("Empty Address should have noaddress container", () => {
    let emptyAddrWrapper = shallow(
      <EmployeesAddr
        addrArray={[]}
        requestEmpAddrData={mockClickEvent}
        match={mockMatch}
      />
    );
    expect(emptyAddrWrapper.find(".no-adress-card")).toHaveLength(1);
  });
});
