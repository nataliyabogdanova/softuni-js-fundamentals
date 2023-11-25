function companyUsers(array) {

    let companyEmployees = {};
    for (let companyEmployee of array) {
        let [companyName, employeeId] = companyEmployee.split(" -> ");

        if (companyName in companyEmployees) {
            if (!companyEmployees[companyName].includes(employeeId)) {
                companyEmployees[companyName].push(employeeId);
            }
        } else {
            companyEmployees[companyName] = [employeeId];
        }
    }
    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, employeeIds] of entries) {
        console.log(name);
        employeeIds.forEach(id => console.log(`-- ${id}`));
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])