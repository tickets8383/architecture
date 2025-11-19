$(document).ready(function() {

    // --- Smooth Scrolling for Navigation Links ---
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80 // Offset for navbar height
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    // --- Form Submission Handling ---
    $('#cta-form').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        var form = $(this);
        var submitBtn = form.find('button[type="submit"]');
        var messageEl = $('#form-message');

        // Show loading state
        submitBtn.text('Sending...');
        submitBtn.prop('disabled', true);

        // --- ACTION REQUIRED ---
        // Replace this with your actual form submission logic.
        // This could be an AJAX call to a backend script (PHP, Node.js, etc.)
        // or a service like Formspree, Netlify Forms, or Getform.
        // For now, we'll simulate a successful submission.
        
        setTimeout(function() {
            // Simulate success
            messageEl.text('Thank you! Your request has been received. We will be in touch shortly.');
            messageEl.css('color', 'green');
            form[0].reset(); // Clear the form fields
            submitBtn.text('Request Discovery Call');
            submitBtn.prop('disabled', false);

            // To simulate an error:
            /*
            messageEl.text('Oops! Something went wrong. Please try again.');
            messageEl.css('color', 'red');
            submitBtn.text('Request Discovery Call');
            submitBtn.prop('disabled', false);
            */
        }, 1500); // 1.5 second delay to simulate network request
    });

});
