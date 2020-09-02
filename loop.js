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
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Entire body executes in one tick //
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval //

  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks //

  // 3) Pause execution. Continue when: //
  //  - a new pendingOSTask is done //
  //  - a new pendingOperation is dome //
  //  - a timer is about to complete //

  // Look at pendingTimers. Call any setImmediate //
}