import { useRef, useState } from "react";

function Help2(){
  const input = useRef(null);
  const textarea = useRef(null);
  const showBox = useRef(null);

  const [posts, setPosts] = useState([
    {title: 'Hello0', content: 'Here comes description in detail.'},
    {title: 'Hello1', content: 'Here comes description in detail.'},  
    {title: 'Hello2', content: 'Here comes description in detail.'},  
    {title: 'Hello3', content: 'Here comes description in detail.'} 
  ]);

  //입력칸
  const deletePost=(index)=>{
    setPosts(
      posts.filter((_, postIndex)=>
        postIndex !== index
      )
    )
  }
  const createPost=()=>{
    setPosts([
      {
        title: input.current.value,
        content: textarea.current.value 
      }
      ,...posts])

      input.current.value = '';
      textarea.current.value = '';
  }

  //수정
  const changeUpdate=index=>{
    setPosts(
      posts.map((post, postIndex)=>{
        if(postIndex === index){
          post.changeUpdate = true;
          return post;
        }
      })
    )
    console.log(posts);
  }

  //

  return(
    <main id="help">
      <div className="inner">
        <h1><a href="#">Help</a></h1>

        <section className="inputBox">
          <input type="text" placeholder="제목 입력" ref={input} /><br />
          <textarea cols="30" rows="10" ref={textarea}></textarea><br />
          <button onClick={()=>{
            input.current.value='';
            textarea.current.value='';
          }}>cancel</button>
          <button onClick={createPost}>crate</button>
        </section>

        <section className="showBox" ref={showBox}>
          {
            posts.map((post, index)=>{
              return(
                <article key={index}>
                  <div className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                  </div>
                  <ul className="btns">
                    <li onClick={()=>changeUpdate(index)}>수정</li>
                    <li onClick={()=>deletePost(index)}>삭제</li>
                  </ul>
                </article>
              )
            })
          }
        </section>
      </div>
    </main>
  )
}

export default Help2;