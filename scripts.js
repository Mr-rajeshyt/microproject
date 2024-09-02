document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const slotList = document.getElementById('slotList');

    // Sample data for available slots
    const availableSlots = [
        { date: '2024-09-03', time: '10:00' },
        { date: '2024-09-03', time: '14:00' },
        { date: '2024-09-04', time: '11:00' },
    ];

    // Display available slots
    function displaySlots() {
        availableSlots.forEach(slot => {
            const listItem = document.createElement('li');
            listItem.textContent = `Date: ${slot.date}, Time: ${slot.time}`;
            slotList.appendChild(listItem);
        });
    }

    // Handle form submission
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        alert(`Appointment booked for ${name} on ${date} at ${time}. Confirmation sent to ${email}.`);
        appointmentForm.reset();
    });

    displaySlots();
});
