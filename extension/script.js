window.onload =  function(e){
    
            e.preventDefault();            

            var target = document.getElementsByClassName("CartsetQty");
            var user_image;
            var clothing_image = "https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/20191023111943-1.jpg";
            var btn = document.createElement("button");
            btn.innerHTML = "TRY NOW !"
            btn.setAttribute("id","try_now");
            btn.setAttribute("class","btn btn-danger try-button");
            btn.setAttribute("data-toggle","modal");
            btn.setAttribute("data-target","#tryWindow");
            btn.setAttribute("style","")

            btn.addEventListener('click',function(){
                console.log("button clicked");
                var loading = document.getElementById('loading');
                loading.setAttribute("style","display:none");
            })

            var modalhtml = `<div class="modal fade" id="tryWindow">
            <div class="modal-dialog" id="before">
              <div class="modal-content">
              
                <!-- Modal Header -->
                <div class="modal-header" style="text-align:center;">
                  <h4 class="modal-title" style="margin: auto; display:block;">How it looks on you !</h4>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body">
                    <div  style="text-align:center;border-radius:20%; margin-bottom:20px;">
                        <label for="fileinput" class="custom-file-upload">
                            <i class="fa fa-cloud-upload"></i> Upload Your Image
                        </label>
                        <input id="fileinput" type="file" name="person" style="display:none;"/>
                    </div>
                    
                    <div class="row content">
                        <div class="overlay" id="loading"><div class="overlay-content"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif" alt="Loading..."/></div></div>
                        <div class="col-md-5">
                        <center>
                            <img id="user-img" src="#" alt="your image"  height="238" width="184" style="display:none;" />
                        </center>
                        </div>

                        <div class="col-md-2" style="padding-top:18%">
                        
                        <center>
                            <img id="plus" src="#" alt="your image"  height="64" width="64" style="display:none;" />
                        </center>

                        </div>

                        <div class="col-md-5">
                        <center>
                            <img id="clothing-img" src="#" alt="your image"  height="238" width="184" style="display:none;" />
                        </center>
                        </div>
                    </div>
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer" style="text-align:center">
                  <button type="button" class="btn btn-danger" id="tryme" style="margin:auto; display:block;">Try the clothes !</button>
                
                </div>
                
              </div>
            </div>
          </div>`;

            var modal = document.createElement("div");
            modal.innerHTML = modalhtml;
            target[0].appendChild(btn);
            target[0].appendChild(modal);

            function imageIsLoaded(e) {
                 user_image = e.target.result;                 
                 clothing_image = document.getElementsByClassName("pointer pimg")[0].src;
                 $('#user-img').attr('src',user_image);
                 $('#user-img').attr('style','display:true');

                 $('#clothing-img').attr('src',clothing_image);
                 $('#clothing-img').attr('style','display:true');

                 $('#plus').attr('src',"https://image.flaticon.com/icons/svg/61/61112.svg");
                 $('#plus').attr('style','display:true;');

                //  var loading = document.getElementById('loading');
                //  loading.setAttribute("style","display:true");
                

            };
            
            document.getElementById('fileinput').addEventListener('change', function(){
                if (this.files && this.files[0]) {
                    var reader = new FileReader();
                    reader.onload = imageIsLoaded;
                    reader.readAsDataURL(this.files[0]);
                }
            }, false);

            document.getElementById("tryme").addEventListener('click',function(e){
                    var loading = document.getElementById('loading');
                    loading.setAttribute("style","display:true");

                    var form = new FormData();
                    var person_base64 = document.getElementById("user-img").src;
                    form.append("person",person_base64);
                    form.append("clothing", document.getElementsByClassName("pointer pimg")[0].src);
                    
                    // Display the key/value pairs
                    for (var pair of form.entries()) {
                        console.log(pair[0]+ ', ' + pair[1]); 
                    }

                    var settings = {
                    "url": "http://localhost:5000/api/infer",
                    "method": "POST",
                    "headers": {
                        "accept": "application/json"
                    },
                    "processData": false,
                    "contentType" : false,
                    "data": form
                    }
    
                    $.ajax(settings).done(function (response) {
                    
                        loading.setAttribute("style","display:none");
                        console.log(response);

                        var responseimages = `
                        
                        
                            <div class="modal-content">
                                <!-- Modal Header -->
                                <div class="modal-header" style="text-align:center;">
                                <h4 class="modal-title" style="margin: auto; display:block;">Here's how it looks !</h4>
                                </div>
            
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                        <center><img id="#" src="https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/20190410122004-1.jpg" alt="your image"  height="238" width="184" /></center>
                                        </div>
                                        <div class="col-md-4">
                                        <center><img id="#" src="https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/20190410122004-1.jpg" alt="your image"  height="238" width="184" /></center>
                                        </div>
                                        <div class="col-md-4">
                                        <center><img id="#" src="https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/20190410122004-1.jpg" alt="your image"  height="238" width="184" /></center>
                                        </div>
                                    </div>
            
                                    <div style="margin:20px"></div>
            
                                    <div class="row">
                                        <div class="col-md-4">
                                        <center><img id="#" src="https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/20190410122004-1.jpg" alt="your image"  height="238" width="184" /></center>
                                        </div>
                                        <div class="col-md-4">
                                        <center><img id="#" src="https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/20190410122004-1.jpg" alt="your image"  height="238" width="184" /></center>
                                        </div>
                                        <div class="col-md-4">
                                        <center><img id="#" src="https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/20190410122004-1.jpg" alt="your image"  height="238" width="184" /></center>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

                        var parentmodal = document.getElementById('before');
                        parentmodal.classList.add("modal-lg");
                        parentmodal.setAttribute("style",'width:75%; height:60%;');
                        parentmodal.innerHTML = responseimages; 
                    });             
            });

    }
