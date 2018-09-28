
var btn=document.querySelectorAll('.del')
  for(var i=0;i<btn.length;i++){
      btn[i].onclick=function(){
    if(confirm("确定要删除吗?"))
     {
        this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement)
     }else{
	   return false 
	 }
       
      }
  }


/*全选*/
  var ipt=document.querySelectorAll('tbody input')
  var all=document.querySelector('.all')
    all.onclick=function () {
        for(var i=0;i<ipt.length;i++){
            ipt[i].checked=this.checked  
           
        }
    }
/*添加*/
    
function add(){
   var tbody=document.querySelector('#tbody');
    console.log(tbody)
    var tr=document.createElement('tr');
    console.log(tr)
    tbody.appendChild(tr);
 
}
    
/*删除*/
function shan(){
     var ipt=document.querySelectorAll('tbody input')
    if(confirm("确定要删除吗?"))
     {   
    var ipt=document.querySelectorAll('tbody input')
    for(var i=0;i<ipt.length;i++){
    if(ipt[i].checked == true){
       ipt[i].parentElement.parentElement.parentElement.removeChild(ipt[i].parentElement.parentElement)
      all.checked=false
    }
    }
     }else{
        
	   return false 
	 }
 
    
    
}
$("#btn_add").click(function () {
$("#myModalLabel").text("新增");
$('#myModal').modal();
});

autosize(document.querySelectorAll('textarea'));
 
