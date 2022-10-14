$('#add_student_container').click(()=>{
    $('#add_student_form').toggle('slow',()=>{
        if($('#students-list').css('display')=="none")
        $('#students-list').css('display','inline');
        else
        $('#students-list').css('display','none');
    });
})