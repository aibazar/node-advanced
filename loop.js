// node myCode.js //

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myCode running //
myCode.run();

function shouldContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate? //
  // Check two: Any pending OS tasks? (Like server listening to port) //
  // Check three: Any pending long running operations? (Like fs module) //
}