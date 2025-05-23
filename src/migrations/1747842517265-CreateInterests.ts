import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateInterests1747842517265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "interests",
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
                name: "interests_translations",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "interest_id",
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
            "interests_translations",
            new TableForeignKey({
                columnNames: ["interest_id"],
                referencedTableName: "interests",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("interests_translations");
        await queryRunner.dropTable("interests");
    }

}
