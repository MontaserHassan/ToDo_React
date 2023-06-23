import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { createPost } from '../state/postSlice';
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formHandler = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 500);
        dispatch(createPost({ id, title, description }))
        .unwrap() // must use it if i have the action that create by createAsyncThunk
        .then(() => navigate('/') )
        setTitle("");
        setDescription("");
    };

    return (
        <>
            <Form onSubmit={formHandler}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type='submit'>Submit</Button>
            </Form>
        </>
    );
}

export default Add;
