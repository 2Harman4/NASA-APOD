'use strict';
{
    $(document).ready(function(){
        
        let apodContainer = $("#apod-container");

        // fetching the apod using nasa API
        $.ajax({
            'url': 'https://api.nasa.gov/planetary/apod',
            'method': 'GET',
            data:{
                api_key:'5gv1cSH5BDyPlEpBuJnDN0bgEad98BHFH7k71aOu'
            },
            success:function(dataRecieved){
                console.log(dataRecieved);

                if(dataRecieved.media_type == "video"){
                    apodContainer.append('<video class="apod-image" src="'+ dataRecieved.url + '" alt="astronomical picture of the day" controls autoplay>');

                }else{
                    //adding the recieved image (high defination version) to apodContainer
                apodContainer.append('<img class="apod-image" src="'+ dataRecieved.hdurl + '" alt="astronomical picture of the day">');
                }
                

                //adding the date
                $('#date').append('<span>Dated: ' + dataRecieved.date +'</span>');

                //adding the title
                $('#title').append('<span>Title: ' + dataRecieved.title +'</span>');

                //adding the copyright
                $('#copyright').append('<span>Copyright: ' + dataRecieved.copyright +'</span>');

                //adding the title
                $('#explanation').append('<span>' + dataRecieved.explanation +'</span>');

                
            }
        });


    });
}

