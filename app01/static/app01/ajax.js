// this code working when document is fully loaded
$(document).ready(function(){
    // set click event on checkbox
    $(".checkbox").click(function(){
        // checking all objects with class "checkbox" and changing the value of the attribute "checked" to false on checkboxes except current target
        $(".checkbox").not(this).prop("checked", false);
            // sending ajax request to server
            $.ajax({
                // url argument, that takes link to the server from input with id #url
                url: $("#url").val(),
                // type argument, that takes name of the method to be called, like GET or POST
                type:"get",
                data: {
                    //
                    "category":$(this).val()
                },
                // if the request is successful, we will change our page
                success: function(response){
                    // removing all HTML inside block with class "list-transport"
                    $('.list-transport').empty()
                    // sorting out the json from server response
                    for (let index in response.list_transport){
                        // creating a new element using the received data
                        const newTransport = `<img src="media/${response.list_transport[index].image}" style = "max-height:400px;">
                                            <h2>${response.list_transport[index].name}</h2>
                                            <hr>
                                            <br>
                                            <br>`;
                        // appending the new element to the block with class "list-transport"
                        $('.list-transport').append(newTransport);
                    }
                }
        }); 
    });
});

