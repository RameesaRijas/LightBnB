$(() => {
    window.reservation = {};
   
    function createReservation(property_id) {
     return `<div id="reservationModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <form id="reservation-form" class="reservation-form">
                <p>Select your Date</p>
                <div class="reservation-form__field-wrapper">
                    <input type="hidden" name="property_id" value="${property_id}">
                </div> 
                <div class="reservation-form__field-wrapper">
                    <input type="date" name="start_date" placeholder="Start Date" id="start_date" required>
                </div>
                <br>
                <div class="reservation-form__field-wrapper">
                    <input type="date" name="end_date" placeholder="End Date" id="end_date" required>
                </div>
                <br>
                <div class="reservation-form__field-wrapper">
                    <button type= "submit" id="reservation_form_submit">Submit</button>
                </div>
            </form> 
            </div>
            </div>`;
    }

    window.reservation.createReservation = createReservation;

});