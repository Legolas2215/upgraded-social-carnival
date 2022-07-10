const post = useSelector((state) => {
    if(currentId){
      state.posts.map((post) =>{
        if(post._id=== currentId){
          setpostData(post);
        }
        
      })
    }
    
  });