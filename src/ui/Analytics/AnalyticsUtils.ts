export function addActionCauseToList(newActionCause, actionCauseList) {
  if (newActionCause.name && newActionCause.type) {
    actionCauseList[newActionCause.name] = newActionCause;
  }
}
