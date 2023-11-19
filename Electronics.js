$(function () {
  $.ajax({
    method: 'GET',
    url: "https://fakestoreapi.com/products/category/electronics"
  })
    .then(function (data) {
      $.each(data, function (key, value) {
        $(`
          <div class="card m-3 w-25">
            <img src=${value.image} class="card-img-top" height="130">
            <div class="card-header">
              <p>${value.title}</p>
            </div>
            <div class="card-body" height="120">
              <p>${value.price}</p>
              <p>${value.rating.rate}</p>
              <p>${value.rating.count}</p>
            </div>
            <div class="card-footer text-center" height="120">
              <button class="btn btn-danger" w-"100" onclick="addcartclick(${value.id})" id="cancel">
                <span class="bi bi-cart4"></span>add to cart
              </button>
            </div>
          </div>
        `).appendTo("#homemenu");
      })
    });

});
var cartitemnumber = [];
  count = 0;
 
  function addnumber() {
    count = cartitemnumber.length;
    document.getElementById("itemnumber").innerHTML = count;
    
  }

  function addcartclick(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        cartitemnumber.push(data);
        alert("item successfully added");
        addnumber();
      })
  };

  

//new function
      function remove(){
        $("tbody").empty();
      }
       
     function fashionitems(){
      remove();
     count=0;
    for(var item of cartitemnumber){
      var tr=document.createElement("tr");
      
      var tdtitle=document.createElement("td");
      var tdprice=document.createElement("td");
      var tdphoto=document.createElement("td");

      tdtitle.innerHTML=item.title;
      tdprice.innerHTML=item.price;

      var img=document.createElement("img");
      img.src=item.image;
      img.height="100"
      img.width="100"

      tdphoto.appendChild(img);

      tr.appendChild(tdtitle);
      tr.appendChild(tdprice);
      tr.appendChild(tdphoto);

      document.querySelector("tbody").appendChild(tr);
     var prices=document.getElementById("priceamount");
     count+=item.price
     prices.innerHTML=count;
          
    };
   
   };
  
   function removeolddata() {
    cartitemnumber = [];
    count = 0;
    addnumber();
    $("tbody").empty();
    $("#priceamount").html(count);
  }