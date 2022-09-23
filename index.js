function superbowlWin(record){
  const broncoWin = record.find(record => record.result === "W")
  if(broncoWin){
    return broncoWin.year
  }
}