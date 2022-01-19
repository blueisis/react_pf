import { useRef, useState } from "react";

function Help(){
  const input = useRef(null);
  const textarea = useRef(null);
  const changeInput = useRef(null);
  const changeTextarea = useRef(null);
  const [posts, setPosts] = useState([
    {
      title: 'hello',
      content: 'here comes content'
    }
  ]);

  // 글 올리기 (create)
  const createPost =()=>{
    setPosts([
      {
        title: input.current.value,
        content: textarea.current.value
      }
      ,...posts
    ]);
    input.current.value = '';
    textarea.current.value = '';
  }

  // 올린 글 삭제
  const deleteUpdate =index=>{
    setPosts(
      // filter란 조건에 맞는 데이터만 반환
      posts.filter((_, postIndex)=> postIndex !== index)
    );
  }

  // 올린 글 수정
  const changeUpdate=index=>{
    setPosts(
      posts.map((post, postIndex)=>{
        if(postIndex===index) post.changeUpdate=true;
        return post;
      })
    )
    console.log(posts);
  }

  // 올린 글 수정 완료
  const completeUpdate=index=>{
    setPosts(
      posts.map((post, postIndex)=>{
        if(postIndex === index){
          post.title = changeInput.current.value;
          post.content = changeTextarea.current.value;
          post.changeUpdate = false;
        }
        return post;
      })
    )
  }

  // 올린 글 수정 취소
  const cancelUpdate=index=>{
    setPosts(
      posts.map((post, postIndex)=>{
        if(postIndex===index) post.changeUpdate=false;
        return post;
      })
    )
  }
  
  return(
    <main id="help">
      <div className="inner">
        <h1><a href="#">Help</a></h1>

        <section className="inputBox">
          <input type="text" placeholder="제목 입력" ref={input}/><br />

          <textarea cols="30" rows="10" placeholder="내용 입력" ref={textarea}></textarea><br />

          <button onClick={()=>{
            input.current.value = '';     //cancel
            textarea.current.value = '';
          }}>cancel</button>

          <button onClick={createPost}>crate</button>
        </section>



        <section className="showBox">
          {
            posts.map((post, index)=>{
              return(
                <article key={index}>
                  {
                    post.changeUpdate
                    ?     // true일때(수정할때)
                    <>
                      <div className="post">
                        <input type="text" defaultValue={post.title} ref={changeInput}/><br/>
                        <textarea defaultValue={post.content} ref={changeTextarea}></textarea>
                      </div>
                      <div className="btns">
                        <li onClick={()=>completeUpdate(index)}>완료</li>
                        <li onClick={()=>cancelUpdate(index)}>취소</li>
                      </div>
                    </>
                    :     //false 일때 (수정 완료 후, 수정할때가 아닐때)
                    <>
                    <div className="post">
                      <h2>{post.title}</h2>
                      <p>{post.content}</p>
                    </div>
                    <div className="btns">
                      <li onClick={()=>changeUpdate(index)}>수정</li>
                      <li onClick={()=>deleteUpdate(index)}>삭제</li>
                    </div>
                  </>
                  }
                </article>
              )
            })
          }
        </section>
      </div>
    </main>
  )
}

export default Help;