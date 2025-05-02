export interface IProduct {
  getID(): number;
  getName(): string;
  getPrice(): number;
  getDetails(): string[];
  getCategory(): string;
  getImage(): string;
  getType(): string;
}