import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateEmploymentTypes1747842576639 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "employment_types",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "category",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true
        );

        await queryRunner.createTable(
            new Table({
                name: "employment_types_translations",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "employment_type_id",
                        type: "int",
                    },
                    {
                        name: "language_code",
                        type: "varchar",
                        length: "5",
                    },
                    {
                        name: "field",
                        type: "varchar",
                    },
                    {
                        name: "value",
                        type: "text",
                    },
                ],
            }),
            true
        );

        await queryRunner.createForeignKey(
            "employment_types_translations",
            new TableForeignKey({
                columnNames: ["employment_type_id"],
                referencedTableName: "employment_types",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("employment_types_translations");
        await queryRunner.dropTable("employment_types");
    }

}
