import express from "express"
import pkg from "pg"
import path from "path"
import cors from "cors"
import { fileURLToPath } from "url"

const { Pool } = pkg
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

const pool = new Pool({
  connectionString:
    "postgresql://database_owner:8vnE1McYmXBa@ep-red-field-a64umv97.us-west-2.aws.neon.tech/database?sslmode=require",
  ssl: {
    rejectUnauthorized: false,
  },
})

app.use("/images", express.static(path.join(__dirname, "public/images")))
app.use(
  cors({
    origin: "https://harvest-go-vercel.vercel.app",
  })
)

app.get("/api/meatseafoodavail", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * FROM Products
      INNER JOIN Main_Warehouse ON Products.itemid = Main_Warehouse.itemid
      INNER JOIN Suppliers ON Main_Warehouse.supid = Suppliers.supid
    `)

    res.json(result.rows)
  } catch (error) {
    console.error("Error fetching data from database:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// Serverless Vercel Functions already take care of this //
// This code was only used for local development/testing //

/* const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
}) */

export default app
