import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersEmploymentTypes1747942567882 implements MigrationInterface {
    private readonly tableName = "users_employment_types";
    private readonly fkUser = "FK_users_employment_types_user";
    private readonly fkEmploymentType = "FK_users_employment_types_employment_type";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                { name: "user_id", type: "integer", isPrimary: true },
                { name: "employment_type_id", type: "integer", isPrimary: true },
                { name: "created_at", type: "timestamptz", default: "CURRENT_TIMESTAMP" },
                { name: "updated_at", type: "timestamptz", default: "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" }
            ]
        }));

        await queryRunner.createForeignKey(this.tableName, new TableForeignKey({
            name: this.fkUser,
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey(this.tableName, new TableForeignKey({
            name: this.fkEmploymentType,
            columnNames: ["employment_type_id"],
            referencedTableName: "employment_types",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(this.tableName, this.fkUser);
        await queryRunner.dropForeignKey(this.tableName, this.fkEmploymentType);
        await queryRunner.dropTable(this.tableName);
    }
}
