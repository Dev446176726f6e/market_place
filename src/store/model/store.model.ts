import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Category } from 'src/category/model/category.model';

interface IStoreCreationAttr {
  name: string;
  image: string;
  phone: string;
  location: string;
}

@Table({ tableName: 'store', timestamps: false })
export class Store extends Model<Store, IStoreCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  name: string;

  @Column({ type: DataType.STRING })
  image: string;

  @Column({ type: DataType.STRING })
  phone: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  location: string;

  @HasMany(() => Category)
  categories: Category[];
}
