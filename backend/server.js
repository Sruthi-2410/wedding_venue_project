const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let bookings = [];

// Home route
app.get("/", (req, res) => {
  res.send("Wedding Venue Backend Running");
});

// Booking route
app.post("/book", (req, res) => {
  const { name, email, venue } = req.body;

  if (!name || !email || !venue) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newBooking = {
    id: bookings.length + 1,
    name,
    email,
    venue
  };

  bookings.push(newBooking);

  console.log("New Booking:", newBooking);

  res.json({ message: "Booking Successful! 🎉" });
});

// View all bookings
app.get("/bookings", (req, res) => {
  res.json(bookings);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});