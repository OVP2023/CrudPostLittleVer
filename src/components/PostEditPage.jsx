import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function PostEditPage() {
  const [content, setContent] = useState('');
  const [id, setId] = useState(0);


    //функция удаления с сервера по id
  async function deletePost(id) {
      let res = await fetch('http://localhost:7070/posts/'+id,{method: 'DELETE',});  
    }

  function handleSubmit(event) {
      event.preventDefault();
      console.log('id:', id);
      //функция добавления нового поста
      deletePost(id); 
    }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label>Введите Id удаляемого поста</Form.Label>
        <Form.Control as="textarea" rows={1}  size="lg" value={id} onChange={(e) => setId(e.target.value)} />
      </Form.Group>
      <Button type="submit" variant="outline-primary">Удалить пост </Button>   
    </Form>
  )
}


  export default PostEditPage;  