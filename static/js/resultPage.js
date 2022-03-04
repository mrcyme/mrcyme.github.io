export {getResults}
function getResults()
{
  var tabular = document.getElementById("resultPanel");
  this.connection = new WebSocket("ws://localhost:8765/")
  this.connection.onmessage = function(event){
  self.results = JSON.parse(event.data).results
  self.sectorPresentation = JSON.parse(event.data).sector_presentation
  }
  console.log(self.results)
  document.getElementById("FetchRequestOutput").innerHTML = "<p>bre></p>"
  }
