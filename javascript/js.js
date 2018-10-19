window.onload = function () 
{
    document.getElementById('regform').addEventListener('submit', function(evt)
    {
        evt.preventDefault();
        document.getElementById('regsubmit').disabled = true;
        var form = document.getElementById('regform');
        var isValidForm = form.checkValidity();
        if(isValidForm)
        {
            form.submit()
        }
        else
        {
            alert('Form is invalid! Check the fields to see what you are missing!');
            document.getElementById('regsubmit').disabled = false;
        }
        
    });
};


function check_pass()
{
    if(document.getElementById('conpassword').value != '' && document.getElementById('password').value != '')
    {
        document.getElementById('conerrormessage').style.opacity = 1;
        document.getElementById('conerrormessage').style.transition = 0.25;
        if (document.getElementById('password').value == document.getElementById('conpassword').value) 
        {
            document.getElementById('conerrormessage').style.color = 'green';
            document.getElementById('conerrormessage').innerHTML = 'Matches password.';
            document.getElementById('regsubmit').disabled = false;
        } 
        else 
        {
            document.getElementById('conerrormessage').style.color = 'red';
            document.getElementById('conerrormessage').innerHTML = 'Does not match password.';
            document.getElementById('regsubmit').disabled = true;
        }
    }
    else
    {
        document.getElementById('regsubmit').disabled = true;
        document.getElementById('conerrormessage').innerHTML = 'default';
        document.getElementById('conerrormessage').style.opacity = 0;
    }
  }