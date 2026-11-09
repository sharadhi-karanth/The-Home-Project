const odbc = require("odbc");

const connectionString =
    "Driver={ODBC Driver 18 for SQL Server};" +
    "Server=SHARADHI\\SQLEXPRESS;" +
    "Database=ManeFarmDB;" +
    "Trusted_Connection=Yes;" +
    "TrustServerCertificate=Yes;";

async function testConnection() {
    try {
        const connection = await odbc.connect(connectionString);

        console.log("Connected to SQL Server successfully!");

        const result = await connection.query(
            "SELECT DB_NAME() AS DatabaseName"
        );

        console.log(result);

        await connection.close();

    } catch (error) {
        console.error("Connection failed:");
        console.error(error);
    }
}

testConnection();