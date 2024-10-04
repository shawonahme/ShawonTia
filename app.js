const loadData = () =>{

    fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    .then(response => response.json())
    .then(json => displayPosts(json.posts))

}

const displayPosts =(myPost) => {

    const mypostcontainer = document.getElementById('cardcon')
 myPost.forEach(post => {
    console.log(post)
    const {category, image,description,comment_count,title,view_count,author,posted_time,isActive} = post

    const carditem = document.createElement('div');
    carditem.innerHTML = `  <div class="flex  gap-4 bg-[#e9e8e8f3] rounded-lg px-6 py-6 my-4">
                <div class="">
                    ${isActive == true ? `<div class="avatar online">
                        <div class="w-24 rounded-lg">
                          <img src=${image} />
                        </div>
                      </div>`: `<div class="avatar offline">
                        <div class="w-24 rounded-lg">
                          <img src=${image} />
                        </div>
                      </div>`}
                    
                </div>
                <div class="pr-8 ">
                    <div class="pb-3 flex gap-4">
                        <span># ${category}</span> <span>Author : ${author.name} </span>
                    </div>
                    <h1 class="text-xl font-bold mb-4">${title}</h1>
                    <p class="border-dotted border-b-2 text-[#666] border-b-gray-500 pb-6">${description} </p>
                        <div class="flex justify-between  my-8">
                            <div class="flex gap-6 basis-[60%]">
                              <span><i class="fa-regular fa-message"></i>  ${comment_count}</span>
                                
                                <span><i class="fa-regular fa-eye"></i> ${view_count} </span>
                                <span><i class="fa-brands fa-watchman-monitoring"></i> ${posted_time} min</span>
                            </div>
                            <div class='basis-[10%]'>
                                <button onclick= 'additem ("${title}", ${view_count})'  class="bg-[#3bec8b] py-1 px-2 text-white rounded-full">
                                    <i class="fa-solid fa-envelope-open"></i>
                                </button>
                            </div>
                        </div>
                </div>
            </div>`;

            mypostcontainer.append(carditem)

 });

}

loadData()
function additem(title,view_count){


   const addlist = document.getElementById('addlist');
   const newList = document.createElement('div');
   newList.innerHTML =` <div class="flex justify-between bg-white p-4 rounded-xl m-4 mb-4">
                <p class="basis-[70%]  font-semibold">${title}</p>
                    <p><span><i class="fa-regular fa-eye"></i> ${view_count} </span></p>
                </div>`

                addlist.append(newList)

                    
    let mark = document.getElementById('countermark');

    
    mark.innerText++

 

     
   
  
    

   
}