function getEle(id){
   return document.getElementById(id);
}
var List=[];
getEle("btnAddNumber").addEventListener("click",function(){
    var number = getEle("txtJS").value *1;
    List.push(number);
    getEle("kq").innerHTML = List;
}) ;

var count = 0;

getEle("btnDuong").addEventListener("click",function(){
  
    for(var i=0; i<List.length; i++){
        if(List[i]>0){
            count++;
        }
    }
    
    getEle("kq").innerHTML = count;
}) ;

getEle("btnNhoNhat").addEventListener("click",function(){
  min =List[0]
    for(var i=1; i<List.length; i++){
       if(min>List[i]){
           min= List[i];
       }
    }
    
    getEle("kq").innerHTML = min;
}) ;

getEle("btnNhoNhatDuong").addEventListener("click",function(){
    min =List[0]
      for(var i=1; i<List.length; i++){
         if(min>List[i] && List[i]>0){
             min= List[i];
         }
      }
      
      getEle("kq").innerHTML = min;
  }) ;

  getEle("btnDuongCuoiCung").addEventListener("click",function(){
      for(var i=0;i<List.length; i++){
         if(List[i]%2==0){
             so =List[i];
         }else{
             so= -1;
         }
      }
      
      getEle("kq").innerHTML = so;
  }) ;

  getEle("btnDoiCho").addEventListener("click",function(){
   var number_a =getEle("txtA").value*1;
   var number_b =getEle("txtB").value*1;

   var temp = List[number_a];
   List[number_a]= List[number_b];
   List[number_b]= temp;

   getEle("kq").innerHTML = List;
    
  
}) ;

getEle("btnSapXep").addEventListener("click",function(){
   
    for(var i=0; i<List.length-1;i++){
        for(j=i+1; j<List.length;j++)
        if(List[i]> List[j]){
            var temp =List[i];
            List[i]= List[j];
            List[j]= temp
        }
    }
    getEle("kq").innerHTML = List;
     
   
 }) ;

 getEle("btnTimsonguyento").addEventListener("click",function(){
    var soNguyenToDauTien=-1;
    for(var i=0 ;i <List.length; i++)
    {  
        soNguyenToDauTien=KiemtrasoNguyenTo(List[i]);
        if(soNguyenToDauTien !==-1){
            break;
        }
    }

 
   getEle("kq").innerHTML = soNguyenToDauTien;
     
 });
 function KiemtrasoNguyenTo(number)
 { if(number ==1)
    {
        return -1;
    }
     for(var i=2; i<number; i++)
     { 
        
         if(number %i==0)
         {
             return-1;
         }
         
     }
     return number;
    
 }

 


 

 getEle("btnDemsonguyen").addEventListener("click",function(){
    var total =0;
    for(var i=0 ;i <List.length; i++)
    {  
        if( Math.ceil(List[i])===Math.floor(List[i]))
        {
            total++;
        }
        
        
    }
   getEle("kq").innerHTML = total;
     
 });

 getEle("btnDem_So").addEventListener("click",function(){
    var total_Duong =0;
    var total_Am =0;
    for(var i=0 ;i <List.length; i++)
    {  
        if(List[i]>0)
        {
            total_Duong++;
        }
        if(List[i]<0){
            total_Am++;
        }
        
        
    }
    if(total_Duong> total_Am){
        var Tong =" Số Dương nhiều hơn số âm";
    }else{
        var Tong =" Số Âm nhiều hơn số Dương";

    }
   getEle("kq").innerHTML = "Số dương trong mảng là: "+ total_Duong + " và số âm trong mảng  là : "+total_Am +"<br>"+ Tong;
     
 });
