let all = document.getElementById("all");
function addBlogs(){
    all.innerHTML='<div class="blog"><img src="data:image/jpeg;base64,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" alt=""/><h2>Hare Krishna</h2><p>Hare Krishna Hare Krishna Krishna Krishna Hare Hare</p><button>Read</button></div>'
    location.reload();
}
let plus = document.getElementById("plus");

function addBlogForm(){
   all.innerHTML='<form id="form" action=""><button id="formclose" class="formclose"><i class="fa-solid fa-xmark"></i></button><input type="text" placeholder="Enter Blog Post URL"><input type="text" placeholder="Enter Blog Title"><input type="text" placeholder="Enter Blog Description"><textarea placeholder="Write.."></textarea><button type="submit" class="blogbtn" id = "addblogbtn">Add Blog </button></form>'
   let formClosebtn = document.getElementById('formclose');
   formClosebtn.addEventListener('click',addBlogs);
   
   
   let addBlogBtn = document.getElementById('addblogbtn')
   addBlogBtn.addEventListener('click',submitForm);
}
plus.addEventListener('click',addBlogForm);


let readbtn = document.getElementById('readbtn');
function readBlog(){
    all.innerHTML='<div class="blogdetail"><div class="heading"><div class="div1"><h1>Hare Krishna</h1><h4>Hare Krishna Hare Krishna Krishna Krishna Hare Hare</h4></div><div><img src="data:image/jpeg;base64,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" alt=""/></div></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit dolor nobis? Veritatis laudantium aliquid eveniet nemo excepturi eligendi officia sapiente est dolor exercitationem minima tempore a perspiciatis sit dolores dolore nihil at, distinctio natus! Eveniet culpa minus consequatur, adipisci officia distinctio similique magni quaerat ullam quas dolorem deserunt recusandae in vero fugit soluta hic. Dolore libero, quod amet doloremque quisquam deleniti natus quam saepe minima cupiditate vero porro sint alias similique. Debitis quibusdam odit sit fuga repellendus enim commodi hic atque accusantium esse eos pariatur illum, fugit eius vero. Asperiores eligendi, quia corporis harum culpa nesciunt a eum tempore!</p></div>'
}
readbtn.addEventListener('click',readBlog);


let homebtn = document.getElementById("homebtn");
homebtn.addEventListener('click',addBlogs);


function submitForm(){
    localStorage.setItem('key','value');
}








