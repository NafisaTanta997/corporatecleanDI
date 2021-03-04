    // initialize input widgets first
    $('.date-time-wrap .time').timepicker({
        'showDuration': true,
        'timeFormat': 'g:ia'
    });

    $('.date-time-wrap .date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
    });