
        function calculateAge() {
            ca.moment_target = moment(ca.target, ca.format);
            ca.moment_dob = moment(ca.dob, ca.format);
            ca.years = ca.moment_target.diff(ca.moment_dob, 'years');
            ca.moment_dob.add(ca.years, 'years')
            ca.months = ca.moment_target.diff(ca.moment_dob, 'months');
            ca.moment_dob.add(ca.months, 'months');
            ca.days = ca.moment_target.diff(ca.moment_dob, 'days');
            populateResults();
        }