function addQuestion(question) {
    croct.session.edit().add("questions", question).save();
  }
  
  function hasQuestion(question) {
    croct.evaluate(`session's questions include '${question}'`).then(alert);
  }
  croct
    .evaluate(`user's stats' sessions`)
    .then((count) => alert(`Visits: ${count}`));
  croct
    .evaluate(`user is returning`)
    .then((returning) => alert(returning ? "Welcome back!" : "Welcome!"));
  