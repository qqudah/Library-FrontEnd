import exp from "constants";

class BookModel {
  constructor(
    public id: number,
    public title: string,
    public author?: string,
    public description?: string,
    public copies?: number,
    public copiesAvailable?: number,
    public category?: string,
    public imgURL?: string
  ) {}
}
 export default BookModel;