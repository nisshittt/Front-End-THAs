let bookedSeatse = document.querySelector(`.booking_seats`);
let remainingSeatse = document.querySelector(`.remaining_seats`);
let seats = document.querySelectorAll(`.seats`);

let bookedSeats = 0;
let leftSeats = seats.length;

bookedSeatse.innerText = bookedSeats;
remainingSeatse.innerText = leftSeats;

seats.forEach((seat) => {
  seat.addEventListener(`click`, () => {
   seat.classList.toggle(`booked`);
    seat.classList.contains(`booked`) ? bookSeats(1) : bookSeats(-1);
    
    
  });
});

const bookSeats = (a) => {
  bookedSeats += 1 * a;
  leftSeats -= 1 * a;

  bookedSeatse.innerText = bookedSeats;
  remainingSeatse.innerText = leftSeats;
};

