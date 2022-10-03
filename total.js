var listCategory;
var listTotal;
var ngaykiem ;
var mahang ;
var A ;
var B ;
var C ;
var total;
var ngaykiemOld;
var mahangOld;
var AOld;
var BOld;
var COld;
var TotalOld;
var rowtotal =0;
var child ='';
var checkfirst =1;

$.ajax({
    url: "https://hoangthongtelecom.com/KiemVaiLienA/getMaHang.php",
    data:{"id":"12345678"},
    type: 'POST',
    success: function (data) {
        listCategory = $.parseJSON(data);
        for (var r in listCategory) {
            var id = listCategory[r]['code'];
             var style =Number(listCategory[r]['style']);
             if(style ==1){
                  var diva = '<li id='+id+'><a href="product1.html?'+id+'">'+id+'</a></li>';
             }else{
                 var diva = '<li id='+id+'><a href="product.html?'+id+'">'+id+'</a></li>';
             }
           
            $('#ulmenu').append(diva);
        } 
    }
});

$.ajax({
    url: "https://hoangthongtelecom.com/KiemVaiLienA/getTotal.php",
    data:{"id":"12345678"},
    type: 'POST',
    success: function (data) {
        listTotal = $.parseJSON(data);
        for (var r in listTotal) {
            ngaykiem = listTotal[r]['ngaykiem'];
            mahang = listTotal[r]['mahang'];
            A = listTotal[r]['A'];
            B = listTotal[r]['B'];
            C = listTotal[r]['C'];
            total = listTotal[r]['total'];

           if(checkfirst ==1){
            child =child+ '<td>'+mahang+'</td><td>'+A+'</td><td>'+B+'</td><td>'+C+'</td><td>'+total+'</td></tr>'; 
                rowtotal = rowtotal+1;
               // child =child+ '<tr><td>'+mahang+'</td><td>'+A+'</td><td>'+B+'</td><td>'+C+'</td><td>'+total+'</td></tr>';   
                checkfirst = checkfirst+1;
           }else{
                if(ngaykiemOld==ngaykiem){
                    checkfirst =checkfirst +1;
                  

                        child =child+ '<tr><td>'+mahang+'</td><td>'+A+'</td><td>'+B+'</td><td>'+C+'</td><td>'+total+'</td></tr>';
                    
                      
                    rowtotal = rowtotal+1;
                }else{
                   // rowtotal = rowtotal+1;
                    child ='<tr><td rowspan='+rowtotal+'>'+ngaykiemOld+'</td>' + child ;
                    $('#tableTotal').append(child);
                    child ="";
                    rowtotal = 1;
                   child =child+ '<td>'+mahang+'</td><td>'+A+'</td><td>'+B+'</td><td>'+C+'</td><td>'+total+'</td></tr>';
                }

           }
           
           ngaykiemOld = ngaykiem;
                mahangOld = mahang;
                AOld = A;
                BOld = B;
                COld = C;
                TotalOld = total;
           ngaykiemOld = ngaykiem;
  

        } 

        child ='<tr><td rowspan='+rowtotal+'>'+ngaykiemOld+'</td>' + child +'</tr>';
        $('#tableTotal').append(child);
       
           
            
        
      
        
    }
});