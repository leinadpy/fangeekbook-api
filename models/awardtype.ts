import { Sequelize, Model } from "sequelize";
import {
  iCatalogueAttributes,
  iCatalogueInstance,
} from "../src/utils/iCatalogue";

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class AwardType
    extends Model<iCatalogueAttributes, iCatalogueInstance>
    implements iCatalogueAttributes
  {
    id!: number;
    description!: string;
    status!: boolean;

    static associate = (models: any) => {
      // define association here
    };
  }
  AwardType.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "AwardType",
      freezeTableName: true,
      tableName: "award_type",
      underscored: true,
    }
  );
  return AwardType;
};
