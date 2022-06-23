const book = [{
    id: 1,
    bookName: "Shubham",
    prise: "400",
    ISBN: 100,
    autherName: "Ravikala Suvare",
    publisherName: "Shubham Pangale",
    publishedDate: "22/11/2021",
    edition: "19th"
}];

function getbook(req, res) {
    return res.send(book);
}

function addbook(req, res) {
    const { bookName, prise, ISBN, autherName, publisherName, publishedDate, edition } = req.body;
    const id = book.length + 1;
    book.push({
        id,
        bookName,
        prise,
        ISBN,
        autherName,
        publisherName, 
        publishedDate, 
        edition 
    });
    console.log(book);
    return res.send("book ADDED SUCCESSFULLY...");
}

function updatebook(req, res) {
    const id = req.params.id;
    const {bookName, prise, ISBN, autherName, publisherName, publishedDate, edition } = req.body;


    const index = book.findIndex(emp => emp.id == id);
    if (index === -1) {
        return res.send("SORRY book NOT FOUND...");
    } 

    book[index].bookName = bookName;
    book[index].prise = prise;
    book[index].ISBN = ISBN;
    book[index].autherName = autherName;
    book[index].publisherName = publisherName;
    book[index].publishedDate = publishedDate;
    book[index].edition = edition;

    return res.send("book UPDATED SUCCESSFULLY....");

}

function deletebook(req, res) {
    const id = req.params.id;
    const index = book.findIndex(emp => emp.id == id);
    if (index === -1) {
        return res.send("SORRY book NOT FOUND");
    } 

    book.splice(index, 1);
    return res.send("book DELETED SUCCESSFULLY....");
}

module.exports = {
    getbook,
    addbook,
    updatebook,
    deletebook
}