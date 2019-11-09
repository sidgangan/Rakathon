

   window.onload =  function(e){
        
            e.preventDefault();
            var target = document.getElementsByClassName("CartsetQty");

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
                  Modal body..
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                
              </div>
            </div>
          </div>`;

            var modal = document.createElement("div");
            modal.innerHTML = modalhtml;

            target[0].appendChild(btn);
            target[0].appendChild(modal)
            console.log("mai aa gaya.")


    }

    

