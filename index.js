let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
  }
  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedValue, ...newEmployee } = employee;
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

