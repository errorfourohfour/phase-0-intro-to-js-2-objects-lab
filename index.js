// Write your solution in this file!
const employee = {
    name: 'Zach',
    streetAddress: '96 street'
}

function updateEmployeeWithKeyAndValue(employee, key, value)  {
       return Object.assign({},employee,{[key]: value })
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee,{[key]: value })
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name; //why not employee.key??
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name; //you can choose the specific key? I thought the function should be able to delete name or streetAddress
    return employee;
}

