import './bootstrap.min.css';
import { useState } from 'react';
import sanitizeHtml from 'sanitize-html';

function App() {

  const [comment, setComment] = useState('');
  const [comment2, setComment2] = useState('');
  const [comment3, setComment3] = useState('');
  const [input, setInput] = useState('');

  return (
    <div className="container-sm">
      <div className="card mt-5">
        <h5 className="card-header">Блок 1: уязвимый рендеринг</h5>
        <div className="card-body">
          <p className="card-text" dangerouslySetInnerHTML={{"__html": comment}}></p>
          <a href="#" className="btn btn-primary" onClick={()=>setComment("<img onerror='alert(\"Hacked!\");' src='invalid-image' />")}>Нажать для инъекции</a>
        </div>
      </div>

      <div className="card mt-5">
        <h5 className="card-header">Блок 1: защищенный рендеринг</h5>
        <div className="card-body">
          <p className="card-text">
            {comment2}
          </p>
          <a href="#" className="btn btn-primary" onClick={()=>setComment2("<img onerror='alert(\"Hacked!\");' src='invalid-image' />")}>Нажать для инъекции</a>
        </div>
      </div>

      <div className="card mt-5">
        <h5 className="card-header">Блок 1: защищенный рендеринг</h5>
        <div className="card-body">
        <input type="text" value={input} onInput={(e)=>setInput(e.target.value)} class="form-control" placeholder="XSS" aria-label="Username" aria-describedby="basic-addon1" />
          <p className="card-text" dangerouslySetInnerHTML={{"__html": comment3}}>
          </p>
          <a href="#" className="btn btn-primary" onClick={()=>{
            setComment3(
              sanitizeHtml(input, {
                allowedTags: ['b', 'i', 'em', 'strong', 'a', 'img'],
                allowedAttributes: {
                  a: ['href', 'target', 'src']
                }
              })
            )
          }}>Нажать для инъекции</a>
        </div>
      </div>
    </div>
  );
}

export default App;
