const hotel = [{
    id: 1,
    hotelName: "Shubham",
    managerName: "Ravi Pangale",
    noOfRooms: 100,
    contactNo: "9091234581",
    address: "Ratnagiri,Bondye"
}];

function getHotel(req, res) {
    return res.send(hotel);
}

function addHotel(req, res) {
    const { hotelName, managerName, noOfRooms, address, contactNo } = req.body;
    const id = hotel.length + 1;
    hotel.push({
        id,
        hotelName,
        managerName,
        noOfRooms,
        address,
        contactNo
    });
    console.log(hotel);
    return res.send("HOTEL ADDED SUCCESSFULLY...");
}

function updateHotel(req, res) {
    const id = req.params.id;
    const {hotelName, managerName, noOfRooms, address, contactNo} = req.body;


    const index = hotel.findIndex(emp => emp.id == id);
    if (index === -1) {
        return res.send("SORRY HOTEL NOT FOUND...");
    } 

    hotel[index].hotelName = hotelName;
    hotel[index].managerName = managerName;
    hotel[index].noOfRooms = noOfRooms;
    hotel[index].address = address;
    hotel[index].contactNo = contactNo;
    return res.send("HOTEL UPDATED SUCCESSFULLY....");

}

function deleteHotel(req, res) {
    const id = req.params.id;
    const index = hotel.findIndex(emp => emp.id == id);
    if (index === -1) {
        return res.send("SORRY HOTEL NOT FOUND");
    } 

    hotel.splice(index, 1);
    return res.send("HOTEL DELETED SUCCESSFULLY....");
}

module.exports = {
    getHotel,
    addHotel,
    updateHotel,
    deleteHotel
}