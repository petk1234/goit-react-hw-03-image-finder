export default function resp(input, page_num, key){
    return fetch(`https://pixabay.com/api/?q=${input}&page=${page_num}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
           .then( res =>{
               return res.json();
           })
}