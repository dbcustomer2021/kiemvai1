

var listMahangInfo;
var listCategory;
 var ngayktold ="";


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
             var diva1 = '<option value="'+id+'" id='+style+'>'+id+'</option>';
           
            $('#ulmenu').append(diva);
            $('#idMAHang').append(diva1);

        } 
    }
});
document.getElementById("idMAHang").addEventListener("change",  function() {
    document.getElementById("idNgayFillter").textContent ='';
    document.getElementById("MahangInfo").textContent ='';
    var item = listCategory.find(item => item['code'] === this.value);
    var styleid = item['style'];
  if (styleid == "1") {
    document.getElementById("mahangstyle1").style.display ="block";
    document.getElementById("mahangstyle2").style.display ="none";
      getMaHangDetail1(this.value);
    
  }else{
    document.getElementById("mahangstyle1").style.display ="none";
    document.getElementById("mahangstyle2").style.display ="block";
     getMaHangDetail(this.value);
 
  }
  var ng ='<option select>Lọc ngày</option>';
  $('#idNgayFillter').append(ng);
});

document.getElementById("idNgayFillter").addEventListener("change",  function() {
    document.getElementById("MahangInfo").textContent ='';
    
      for (var r in listMahangInfo) {
               if(listMahangInfo[r]['ngaykiem'] == this.value){
                var ngaykiem = listMahangInfo[r]['ngaykiem'];
                var mahang = listMahangInfo[r]['mahang'];
                var somay = listMahangInfo[r]['somay'];
                var ca = listMahangInfo[r]['ca'];
                var ngaycatvai = listMahangInfo[r]['ngaycatvai'];
                var stt = listMahangInfo[r]['stt'];
                var phanloai = listMahangInfo[r]['phanloai'];
                var somet = listMahangInfo[r]['somet'];
                var nguoikiem = listMahangInfo[r]['nguoikiem'];
                var daychonngan = listMahangInfo[r]['daychonngan'];
                var daychonngan1 = listMahangInfo[r]['daychonngan1'];
                var thua = listMahangInfo[r]['thua'];
                var thua1 = listMahangInfo[r]['thua1'];
                var latngangkhuc = listMahangInfo[r]['latngangkhuc'];
                var latngangkhuc1 = listMahangInfo[r]['latngangkhuc1'];
                var rutsoi = listMahangInfo[r]['rutsoi'];
                var rutsoi1 = listMahangInfo[r]['rutsoi1'];
                var doc = listMahangInfo[r]['doc'];
                var doc1 = listMahangInfo[r]['doc1'];
                var _do = listMahangInfo[r]['do'];
                var do1 = listMahangInfo[r]['do1'];
                var dau = listMahangInfo[r]['dau'];
                var dau1 = listMahangInfo[r]['dau1'];
                var note = listMahangInfo[r]['note'];
    
                     var diva = '<tr><td style="width:90px ;padding: 2px;">'+ngaykiem+'</td><td style="padding: 2px;">'+somay+'</td><td style="padding: 2px;">'+ca+'</td><td style="width:90px ;padding: 2px;">'+ngaycatvai+'</td><td style="padding: 2px;">'+stt+'</td>'
                     +'<td style="padding: 2px;">'+phanloai+'</td><td style="padding: 2px;">'+somet+'</td><td style="padding: 2px;">'+nguoikiem+'</td><td padding: 2px">'+daychonngan+'</td><td padding: 2px">'+daychonngan1+'</td>'
                     +'<td style="padding: 2px;"><h6 style="color: blue;font-size:17px">'+thua+'</h6></td><td ><h6 style="color: red;font-size:17px">'+thua1+'</h6></td><td padding: 2px ;width:60px"> <h6 style="color: blue;font-size:17px">'+latngangkhuc+'</h6></td><td style="padding: 2px ;width:60px"><h6 style="color: red;font-size:17px">'+latngangkhuc1+'</h6></td><td><h6 style="color: blue;font-size:17px">'+rutsoi+'</h6></td><td><h6 style="color: red;font-size:17px">'+rutsoi1+'</h6></td>'
                     +'<td><h6 style="color: blue;font-size:17px">'+doc+'</td><td ><h6 style="color: red;font-size:17px">'+doc1+'</h6></td><td><h6 style="color: blue;font-size:17px">'+_do+'</h6></td><td> <h6 style="color: red;font-size:17px">'+do1+'</h6></td><td><h6 style="color: blue;font-size:17px">'+dau+'</h6></td><td><h6 style="color: red;font-size:17px">'+dau1+'</h6></td><td>'+note+'</td>'
                     +'<td style="padding: 2px"><a href="#"><span class="material-symbols-outlined">delete</span></a><a></a></td></tr>';
                $('#MahangInfo').append(diva);
               }
                
               
                
               
            } 
   
});

function getMaHangDetail(mahang) {
    $.ajax({
        url: "https://hoangthongtelecom.com/KiemVaiLienA/getMaHangInfo.php",
        data:{"mahang":mahang},
        type: 'POST',
        success: function (data) {
            listMahangInfo = $.parseJSON(data);
            for (var r in listMahangInfo) {
               
                var ngaykiem = listMahangInfo[r]['ngaykiem'];
                var mahang = listMahangInfo[r]['mahang'];
                var somay = listMahangInfo[r]['somay'];
                var ca = listMahangInfo[r]['ca'];
                var ngaycatvai = listMahangInfo[r]['ngaycatvai'];
                var stt = listMahangInfo[r]['stt'];
                var phanloai = listMahangInfo[r]['phanloai'];
                var somet = listMahangInfo[r]['somet'];
                var nguoikiem = listMahangInfo[r]['nguoikiem'];
                var daychonngan = listMahangInfo[r]['daychonngan'];
                var daychonngan1 = listMahangInfo[r]['daychonngan1'];
                var thua = listMahangInfo[r]['thua'];
                var thua1 = listMahangInfo[r]['thua1'];
                var latngangkhuc = listMahangInfo[r]['latngangkhuc'];
                var latngangkhuc1 = listMahangInfo[r]['latngangkhuc1'];
                var rutsoi = listMahangInfo[r]['rutsoi'];
                var rutsoi1 = listMahangInfo[r]['rutsoi1'];
                var doc = listMahangInfo[r]['doc'];
                var doc1 = listMahangInfo[r]['doc1'];
                var _do = listMahangInfo[r]['do'];
                var do1 = listMahangInfo[r]['do1'];
                var dau = listMahangInfo[r]['dau'];
                var dau1 = listMahangInfo[r]['dau1'];
                var note = listMahangInfo[r]['note'];
    
                     var diva = '<tr><td style="width:90px ;padding: 2px;">'+ngaykiem+'</td><td style="padding: 2px;">'+somay+'</td><td style="padding: 2px;">'+ca+'</td><td style="width:90px ;padding: 2px;">'+ngaycatvai+'</td><td style="padding: 2px;">'+stt+'</td>'
                     +'<td style="padding: 2px;">'+phanloai+'</td><td style="padding: 2px;">'+somet+'</td><td style="padding: 2px;">'+nguoikiem+'</td><td padding: 2px">'+daychonngan+'</td><td padding: 2px">'+daychonngan1+'</td>'
                     +'<td style="padding: 2px;"><h6 style="color: blue;font-size:17px">'+thua+'</h6></td><td ><h6 style="color: red;font-size:17px">'+thua1+'</h6></td><td padding: 2px ;width:60px"> <h6 style="color: blue;font-size:17px">'+latngangkhuc+'</h6></td><td style="padding: 2px ;width:60px"><h6 style="color: red;font-size:17px">'+latngangkhuc1+'</h6></td><td><h6 style="color: blue;font-size:17px">'+rutsoi+'</h6></td><td><h6 style="color: red;font-size:17px">'+rutsoi1+'</h6></td>'
                     +'<td><h6 style="color: blue;font-size:17px">'+doc+'</td><td ><h6 style="color: red;font-size:17px">'+doc1+'</h6></td><td><h6 style="color: blue;font-size:17px">'+_do+'</h6></td><td> <h6 style="color: red;font-size:17px">'+do1+'</h6></td><td><h6 style="color: blue;font-size:17px">'+dau+'</h6></td><td><h6 style="color: red;font-size:17px">'+dau1+'</h6></td><td>'+note+'</td>'
                     +'<td style="padding: 2px"><a href="#"><span class="material-symbols-outlined">delete</span></a><a></a></td></tr>';
                $('#MahangInfo').append(diva);
               
                if(ngayktold !=ngaykiem){
                    var ng ='<option>'+ngaykiem+'</option>';
                    $('#idNgayFillter').append(ng);
                }
                ngayktold = ngaykiem;
               
            } 
        }
    });
  }

  function getMaHangDetail1(mahang) {
    $.ajax({
        url: "https://hoangthongtelecom.com/KiemVaiLienA/getMaHangInfo.php",
        data:{"mahang":id},
        type: 'POST',
        success: function (data) {
            listMahangInfo = $.parseJSON(data);
            for (var r in listMahangInfo) {
               
                var ngaykiem = listMahangInfo[r]['ngaykiem'];
                var mahang = listMahangInfo[r]['mahang'];
                var somay = listMahangInfo[r]['somay'];
                var ca = listMahangInfo[r]['ca'];
                var ngaycatvai = listMahangInfo[r]['ngaycatvai'];
                var stt = listMahangInfo[r]['stt'];
                var phanloai = listMahangInfo[r]['phanloai'];
                var somet = listMahangInfo[r]['somet'];
                var nguoikiem = listMahangInfo[r]['nguoikiem'];
                var m100 = listMahangInfo[r]['m100'];
                var m200 = listMahangInfo[r]['m200'];
                var m300 = listMahangInfo[r]['m300'];
                var m400 = listMahangInfo[r]['m400'];
                var m500 = listMahangInfo[r]['m500'];
                 
                     var diva = '<tr>'
                     +'<td>'+ngaykiem+'</td><td>'+mahang+'</td><td>'+somay+'</td><td>'+ca+'</td><td>'+ngaycatvai+'</td><td>'+phanloai+'</td><td>'+stt+'</td>'
                     +'<td>'+phanloai+'</td><td>'+somet+'</td><td>'+nguoikiem+'</td><td>'+m100+'</td><td>'+m200+'</td><td>'+m300+'</td><td>'+m400+'</td><td>'+m500+'</td>'
                     +'</tr>';
                $('#MahangInfo').append(diva);
            } 
        }
    });
  }


function getMaHangDetail2(ngay) {
    $.ajax({
        url: "https://hoangthongtelecom.com/KiemVaiLienA/getMaHangInfo.php",
        data:{"mahang":mahang},
        type: 'POST',
        success: function (data) {
            listMahangInfo = $.parseJSON(data);
            for (var r in listMahangInfo) {
               
                var ngaykiem = listMahangInfo[r]['ngaykiem'];
                var mahang = listMahangInfo[r]['mahang'];
                var somay = listMahangInfo[r]['somay'];
                var ca = listMahangInfo[r]['ca'];
                var ngaycatvai = listMahangInfo[r]['ngaycatvai'];
                var stt = listMahangInfo[r]['stt'];
                var phanloai = listMahangInfo[r]['phanloai'];
                var somet = listMahangInfo[r]['somet'];
                var nguoikiem = listMahangInfo[r]['nguoikiem'];
                var daychonngan = listMahangInfo[r]['daychonngan'];
                var daychonngan1 = listMahangInfo[r]['daychonngan1'];
                var thua = listMahangInfo[r]['thua'];
                var thua1 = listMahangInfo[r]['thua1'];
                var latngangkhuc = listMahangInfo[r]['latngangkhuc'];
                var latngangkhuc1 = listMahangInfo[r]['latngangkhuc1'];
                var rutsoi = listMahangInfo[r]['rutsoi'];
                var rutsoi1 = listMahangInfo[r]['rutsoi1'];
                var doc = listMahangInfo[r]['doc'];
                var doc1 = listMahangInfo[r]['doc1'];
                var _do = listMahangInfo[r]['do'];
                var do1 = listMahangInfo[r]['do1'];
                var dau = listMahangInfo[r]['dau'];
                var dau1 = listMahangInfo[r]['dau1'];
                var note = listMahangInfo[r]['note'];
    
                     var diva = '<tr><td style="width:90px ;padding: 2px;">'+ngaykiem+'</td><td style="padding: 2px;">'+somay+'</td><td style="padding: 2px;">'+ca+'</td><td style="width:90px ;padding: 2px;">'+ngaycatvai+'</td><td style="padding: 2px;">'+stt+'</td>'
                     +'<td style="padding: 2px;">'+phanloai+'</td><td style="padding: 2px;">'+somet+'</td><td style="padding: 2px;">'+nguoikiem+'</td><td padding: 2px">'+daychonngan+'</td><td padding: 2px">'+daychonngan1+'</td>'
                     +'<td style="padding: 2px;"><h6 style="color: blue;font-size:17px">'+thua+'</h6></td><td ><h6 style="color: red;font-size:17px">'+thua1+'</h6></td><td padding: 2px ;width:60px"> <h6 style="color: blue;font-size:17px">'+latngangkhuc+'</h6></td><td style="padding: 2px ;width:60px"><h6 style="color: red;font-size:17px">'+latngangkhuc1+'</h6></td><td><h6 style="color: blue;font-size:17px">'+rutsoi+'</h6></td><td><h6 style="color: red;font-size:17px">'+rutsoi1+'</h6></td>'
                     +'<td><h6 style="color: blue;font-size:17px">'+doc+'</td><td ><h6 style="color: red;font-size:17px">'+doc1+'</h6></td><td><h6 style="color: blue;font-size:17px">'+_do+'</h6></td><td> <h6 style="color: red;font-size:17px">'+do1+'</h6></td><td><h6 style="color: blue;font-size:17px">'+dau+'</h6></td><td><h6 style="color: red;font-size:17px">'+dau1+'</h6></td><td>'+note+'</td>'
                     +'<td style="padding: 2px"><a href="#"><span class="material-symbols-outlined">delete</span></a><a></a></td></tr>';
                $('#MahangInfo').append(diva);
                $('#idNgayFillter').append(ngaykiem);
            } 
        }
    });
  }
  function fnExcelReport()
  {
      var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
      var textRange; var j=0;
      tab = document.getElementById('tableProduct'); // id of table
  
      for(j = 0 ; j < tab.rows.length ; j++) 
      {     
          tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
          //tab_text=tab_text+"</tr>";
      }
  
      tab_text=tab_text+"</table>";
      tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
      tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
      tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params
  
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE "); 
  
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
      {
          txtArea1.document.open("txt/html","replace");
          txtArea1.document.write(tab_text);
          txtArea1.document.close();
          txtArea1.focus(); 
          sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
      }  
      else                 //other browser not tested on IE 11
          sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  
  
      return (sa);
  }
