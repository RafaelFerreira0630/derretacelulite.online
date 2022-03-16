

window.onload = function () {

  let comments_list = document.getElementById("list_comment")

  let dataEl = {
    "imagesPath" : "assets/img/profile/",
    "comments": [
        {
            "pic": "foto1",
            "name": "Julia Gonçalves",
            "comment": "Muito obrigada Raquel, você é incrível!!",
            "time": "1 min"
        },
        {
            "pic": "foto2.png",
            "name": "Nathalia Santos",
            "comment": "Gente...estou impressionada como funcionou tão bem comigo",
            "time": "3 min"
        },
        {
            "pic": "foto3.png",
            "name": "Isabella Amorim",
            "comment": "Tô impressionada com esse programa haha, comecei faz 7 dias e já notei uma boa diferença",
            "time": "4 min"
        },
        {
            "pic": "foto4.png",
            "name": "Sabrina",
            "comment": "Vim aqui só pra te agradecer Raquel!! Deu certinho o programa, consegui eliminar de vez a celulite depois de 20 dias",
            "time": "5 min"
        },
        {
            "pic": "foto5.png",
            "name": "Carol Cardoso",
            "comment": "Método INCRÍVEL!! Obrigada!!!",
            "time": "5 min"
        },
        {
            "pic": "foto6.png",
            "name": "Rafaela Lima",
            "comment": "Estou completando a segunda semana aplicando o programa, e realmente está eliminando a celulite como vc disse. Obg Raquel!!",
            "time": "5 min"
        }
    ]
  }


    let count = 0;
            const Data_comments = dataEl;
        let imagesPath = dataEl.imagesPath;

        document.getElementById("count_comments").innerText = Data_comments.comments.length + " Comentários"
        Data_comments.comments.map((comment) => {
            count++;
            let commentList = document.getElementById("list_comment")
            let li = document.createElement("li")
            li.className = "box_result line"
            li.setAttribute("data-id", count)
            li.innerHTML = `
            <div class="avatar_comment">
                <img src="${imagesPath}${comment.pic}" alt="avatar"/>
            </div>
            <div class="result_comment">
                <div class="comment-text">
                    <h4>${comment.name}</h4>
                    <p>${comment.comment}</p>
                </div>
                    <div class="tools_comment">
                        <a class="like" href="#">Curtir</a>
                        <a class="replay" href="#">Responder</a>
                        <i class="align-time"></i> <span class="count">${comment.time}</span> 
                    </div>
                <ul class="child_replay"></ul>
            </div>
            `
            commentList.appendChild(li)

            if(comment.reply){
                comment.reply.map((reply) => {
                    let commentId = document.querySelectorAll(`[data-id="${count}"] > .result_comment > .child_replay`)[0]
                    commentId.innerHTML = commentId.innerHTML + `
                        <li class="box_reply line">
                        <div class="avatar_comment">
                            <img src="${imagesPath}${reply.pic}" alt="avatar"/>
                        </div>
                        <div class="result_comment">
                            <div class="comment-text">
                                <h4>${reply.name}</h4>
                                <p>${reply.comment}</p>
                            </div>
                            <div class="tools_comment">
                                <a class="like" href="#">Curtir</a>
                                <a class="replay" href="#">Responder</a>
                                <i class="align-time"></i> <span class="count">${reply.time}</span> 
                            </div>
                            <ul class="child_replay"></ul>
                        </div>
                    </li>                
                    `
                })
            }
            
            
        })


}

        


