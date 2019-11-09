window.onload =  function(e){
    
            e.preventDefault();            

            var target = document.getElementsByClassName("CartsetQty");
            var user_image;
            var clothing_image;
            var btn = document.createElement("button");
            btn.innerHTML = "TRY NOW !"
            btn.setAttribute("id","try_now");
            btn.setAttribute("class","btn btn-danger try-button");
            btn.setAttribute("data-toggle","modal");
            btn.setAttribute("data-target","#tryWindow");

            btn.addEventListener('click',function(){
                console.log("button clicked");
            })

            var modalhtml = `<div class="modal fade" id="tryWindow">
            <div class="modal-dialog">
              <div class="modal-content">
              
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">Upload Your Image</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body">
                    <input type="file" id="fileinput" />
                    </br>
                    <img id="myImg" src="#" alt="your image"  width=100 />
                    <div>
                        <img id="myImg1" src="#" alt="your image" width=100 />
                    </div>
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" id="tryme" data-dismiss="modal">See how you look</button>
                </div>
                
              </div>
            </div>
          </div>`;

            var modal = document.createElement("div");
            modal.innerHTML = modalhtml;
            target[0].appendChild(btn);
            target[0].appendChild(modal)

            function imageIsLoaded(e) {
                 user_image = e.target.result;
                 clothing_image = document.getElementsByClassName("pointer pimg")[0].src;
                 $('#myImg').attr('src',user_image);
                 $('#myImg1').attr('src', clothing_image);

            };
            
            function uploadFile(file){
                var url = '';
                var xhr = new XMLHttpRequest();
                var fd = new FormData();
                xhr.open("POST", url, true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        // Every thing ok, file uploaded
                        console.log(xhr.responseText); // handle response.
                    }
                };
                fd.append("upload_file", file);
                xhr.send(fd);
            }

            document.getElementById('fileinput').addEventListener('change', function(){
                if (this.files && this.files[0]) {
                    var reader = new FileReader();
                    reader.onload = imageIsLoaded;
                    reader.readAsDataURL(this.files[0]);
                }
            }, false);

            document.getElementById("tryme").addEventListener('click',function(e){
                
            });

    }
