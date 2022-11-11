import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'categories'})
export class Category {
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idC : number;
    @Column({type: 'varchar'})
    public nameC: string;
}