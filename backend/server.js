const express = require("express");
const cors = require("cors");

const getConnection = require("./db");

const app = express();

const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test backend
app.get("/", (req, res) => {
    res.send("Backend is working!");
});
// Test database
app.get("/test-db", async (req, res) => {

    try {

        const connection = await getConnection();

        const result = await connection.query(
            "SELECT DB_NAME() AS DatabaseName"
        );

        await connection.close();

        res.json({
            message: "Database connected successfully!",
            database: result[0].DatabaseName
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database connection failed"
        });
    }
});


// Get all products
app.get("/products", async (req, res) => {

    try {

        const connection = await getConnection();

        const result = await connection.query(
            "SELECT * FROM Products"
        );

        await connection.close();

        res.json(result);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to fetch products"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});