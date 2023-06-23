import { memo } from 'react';
import { Table } from "react-bootstrap";
import PostListItem from '../components/PostListItem';


const PostList = ({ data, deleteRecord }) => {


    return (
        <Table striped bordered hover>
                <thead>
                <tr>
                    <th style={{ width: "10%" }}>#</th>
                    <th style={{ width: "30%" }}>Title</th>
                    <th style={{ width: "70%" }}>Description</th>
                </tr>
            </thead>
            <tbody>
                <PostListItem data={data} deleteRecord={deleteRecord}/>
            </tbody>
        </Table>
    );
}

export default memo(PostList);
