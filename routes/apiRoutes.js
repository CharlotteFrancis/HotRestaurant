var tableData = require(../db/tableData)
var waitingData = require(../db/waitingData)

modeule.exports = function(app) 
{
  app.get("/api/table", function(req, res)
  {
    res.json(tableData)
  })
  app.get("/api.waitlist", function(req, res)
  {
    res.json(waitListData)
  })

  app.post("/api/tables", function(re, res)
  {
    if (tableData.length < 5)
    {
      tableData.push(req.body)
      res.json(true)
    }
    else
    {
      waitingData.push(req.body)
      res.json(false)
    }
  })
}