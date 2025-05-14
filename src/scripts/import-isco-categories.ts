

const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const mysql = require("mysql2/promise");

const filePath = path.resolve(__dirname, "data", "isco_categories.csv");

const parseCsv = (file) => {
    return new Promise((resolve, reject) => {
        const rows = [];
        fs.createReadStream(file)
            .pipe(csv())
            .on("data", (row) => {
                const code = row["ISCO 08 Code"].trim();
                const level = parseInt(row["Level"]);
                const parent_code =
                    level === 1 ? null :
                        level === 2 ? code.slice(0, 1) :
                            level === 3 ? code.slice(0, 2) :
                                level === 4 ? code.slice(0, 3) : null;

                rows.push([
                    code,
                    row["Title EN"].trim(),
                    level,
                    row["Definition"]?.trim() || null,
                    parent_code
                ]);
            })
            .on("end", () => resolve(rows))
            .on("error", reject);
    });
};

const importCsvToMySQL = async () => {
    const connection = await mysql.createConnection({
        host: "localhost", // або ваш сервер
        user: "shark", // ваш користувач
        password: "11111111", // ваш пароль
        database: "shark", // ваша база даних
    });

    const data = await parseCsv(filePath);

    console.log(`Parsed ${data.length} rows.`);

    const insertQuery = `
    INSERT INTO isco_categories (code, title, level, definition, parent_code)
    VALUES ?
    ON DUPLICATE KEY UPDATE
      title = VALUES(title),
      level = VALUES(level),
      definition = VALUES(definition),
      parent_code = VALUES(parent_code)
  `;

    const [result] = await connection.query(insertQuery, [data]);

    console.log(`✅ Imported successfully.`);
    await connection.end();
};

importCsvToMySQL().catch((err) => {
    console.error("❌ Error:", err);
    process.exit(1);
});
