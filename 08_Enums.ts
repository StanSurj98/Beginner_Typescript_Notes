// ---- Enums in TypeScript ----

// Normally we would define an object and then access its key:values

const statuses = {
  notStarted: 0,
  inProgress: 1, 
  done: 2,
}

console.log(statuses.inProgress); // 1


// Let's try using Enums instead -- Note: The values automatically increment from 0
enum Status {
  NotStarted,
  InProgress,
  Done,
}
// We can use it as a value, and access like object.Property
console.log(Status.InProgress); // 1 - sort of like the Index of the keys if it were an Array

// Another benefit is we can use it as a Data Type
let notStartedStatus: Status = Status.NotStarted;

// notStartedStatus = 'foo' // breaks because it's not part of the valid data types!
notStartedStatus = Status.Done; // THIS works however! Limiting our options for re-assignment!
console.log(notStartedStatus);

// -- Assigning Values to Enums && Using it WITH Interfaces -- 

// Note: to assign values to enum use "=" sign
enum StatusEnum {
  Success = 200,
  CannotFind = 404,
}

interface TaskFetch {
  id: string
  status: StatusEnum;
}

const fetch1: TaskFetch = {
  id: "foo",
  status: StatusEnum.Success
}

console.log(`Initial fetch1 object's status: ${fetch1.status}`); // 200

// We can then reassign the 'status' property to 'one of' the 'StatusEnum' properties!
fetch1.status = StatusEnum.CannotFind;
// fetch1.status = 'bar'; // Again - will break, we've limited the choices of reassignment with Enums!

console.log(`Changed fetch1 object's status: ${fetch1.status}`); // 404


export {}