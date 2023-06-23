import { Button, ButtonGroup } from "react-bootstrap";


const PostListItem = ({ data, deleteRecord }) => {

    const deleteHandler = (item) => {
        if (window.confirm(`Do you really want to delete record: ${item.title} ?`)) {
            deleteRecord(item.id);
        }
    }

    const records = data.map((post, index) => (
        <tr key={post.id}>
            <td>#{++index}</td>
            <td>{post.title}</td>
            <td>{post.description}</td>
            <td>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="success">Edit</Button>
                    <Button variant="danger" onClick={ () => deleteHandler(post) }>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    ));

    return (
        <>
            {records}
        </>
    );
}

export default PostListItem
