

    let half_val = document.querySelector('.half_amount');
    let double_val = document.querySelector('.double_amount');

    console.log("Half button:", half_val);
    console.log("Double button:", double_val);

    // Ensure elements exist before adding event listeners
    if (half_val) {
        half_val.addEventListener('click', function() {
            let currentValue = parseFloat(document.querySelector('.amount_write').value);
            let newValue = currentValue / 2;
            document.querySelector('.amount_write').value = newValue.toFixed(6);
        });
    }

    if (double_val) {
        double_val.addEventListener('click', function() {
            let currentValue = parseFloat(document.querySelector('.amount_write').value);
            let newValue = currentValue * 2;
            document.querySelector('.amount_write').value = newValue.toFixed(6);
        });
    }
