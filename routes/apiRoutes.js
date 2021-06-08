const tableData = require('../db/tableData.js')
const waitingData = require('../db/waitinglistData.js')

module.exports = function (app) {
  app.get("/api/table", function (req, res)
  {
    res.json(tableData)
  })
  app.get("/api.waitlist", function (req, res)
  {
    res.json(waitListData)
  })

  app.post("/api/tables", function (req, res)
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