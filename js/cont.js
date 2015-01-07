

//initializing the deviceready eventlistener
document.addEventListener("deviceready", onDeviceReady, false);

//function for accessing the device contacts
function onDeviceReady() 
{

	 StatusBar.overlaysWebView(true);

     StatusBar.show();

 // find all contacts with 'Bob' in any name field
    var options = new ContactFindOptions();
    options.filter=""; 
    options.multiple=true;
    var fields = ["displayName", "phoneNumbers", "photos"];
    navigator.contacts.find(fields, onSuccess, onError, options);
  
}
    

  // onSuccess: Get a snapshot of the current contacts
  //
   function onSuccess(contacts) {
   for (var i=0; i<contacts.length; i++) {
    if(null != contacts[i].phoneNumbers)
        {
            for(var j=0;j<contacts[i].phoneNumbers.length;j++)
            {
           $('#lst').append("<li><a href='#display'>"+contacts[i].displayName+"</a></li>");
           $('#lst').listview('refresh');  


            }
        }
     }
 }
// onError: Failed to get the contacts
//
function onError(contactError) {
    alert('onError!');

}


function readContact(search){   
   var options      = new ContactFindOptions();
   options.filter   = search;
   var fields       = ["displayName"];
   navigator.contacts.find(fields, viewContact, onError, options);
  }


function viewContact(contacts)
{
     
 var details="Contact details:"+" "+"<br/><br/>";


 

    if (contacts[0].displayName) {
        details+="Name:"+contacts[0].displayName+"<br/><br/>";
    }

    if(contacts[0].phoneNumbers)
    {
         details+="Number:"+contacts[0].phoneNumbers[0].value+"<br/><br/>";
    }
   
    if(contacts[0].emails)
    {
         details+="E-mail:"+contacts[0].emails[0].value+"<br/><br/>";
    }
    


    if(contacts[0].addresses)
    {
         details+="Address:"+contacts[0].addresses[0].streetAddress+"<br/>";

    }

     var ele=document.getElementById('samp');
    ele.innerHTML=details;
    //alert(details);

    


  
}



$(document).on("click", "#lst li" ,function () {
   
 readContact($(this).text());

}); 











