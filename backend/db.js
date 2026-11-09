const odbc = require("odbc");

const connectionString =
    "Driver={ODBC Driver 18 for SQL Server};" +
    "Server=SHARADHI\\SQLEXPRESS;" +
    "Database=ManeFarmDB;" +
    "Trusted_Connection=Yes;" +
    "TrustServerCertificate=Yes;";

async function getConnection() {
    try {
        const connection = await odbc.connect(connectionString);

        return connection;

    } catch (error) {
        console.error("Database connection failed:");
        console.error(error);

        throw error;
    }
}

module.exports = getConnection;