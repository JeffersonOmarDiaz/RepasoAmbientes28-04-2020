const getTasks = () => {
    fetch( 'url');
        .then((data))=>{
            return data.json();
    })
    .then((json) =>{
        console.log('json',json);
        });
}