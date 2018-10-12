var ca;
        jQuery(document).ready(function () {
            initStartDatePicker();
            initEndDatePicker();
            initDateFormatChange();
            initCalculateBtnClick();
            
            
            
        });

        function initStartDatePicker(){
            jQuery("#startDate").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy'
            }).datepicker("setDate", new Date());
        }

       function initEndDatePicker(){
            jQuery("#targetDate").datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy'
            }).datepicker("setDate", new Date());
        }
        
        function initDateFormatChange(){
            jQuery("#dateFormat").change(function(){
                dpFormat =  jQuery(this).find("option:selected").attr("data-datepicker-format");
                jQuery("#startDate").datepicker("option", "dateFormat", dpFormat);
                jQuery("#targetDate").datepicker("option", "dateFormat", dpFormat);
             })
        }
       function initCalculateBtnClick(){
        jQuery("#calculate").click(function(){
            jQuery("#result").slideUp();
            ca = {};
            ca.dob = jQuery("#startDate").datepicker("getDate");
            ca.target = jQuery("#targetDate").datepicker("getDate");
            ca.format = jQuery("#dateFormat").val();
            calculateAge();
        })
       }


        function populateResults(){
            jQuery("#result").slideDown();
            jQuery("#begin").text(moment(ca.dob).format(ca.format))
            jQuery("#end").text(ca.moment_target.format(ca.format))
            jQuery("#years").text(ca.years);
            jQuery("#months").text(ca.months);
            jQuery("#days").text(ca.days);
        }