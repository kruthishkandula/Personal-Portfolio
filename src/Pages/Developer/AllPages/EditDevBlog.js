import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import useHttpService from '../../../services/http';

export default function EditDevBlog({ selectedBlog, showEdit, hideEdit }) {

    const [title, setTitle] = useState(selectedBlog.title);
    const [content, setContent] = useState(selectedBlog.content);
    const [imageUrl, setImageUrl] = useState(selectedBlog.imageUrl);
    const [link, setLink] = useState(selectedBlog.link);

    const { post } = useHttpService()

    async function handleSave() {
        const data = {
            title,
            content,
            imageUrl,
            link
        }

        const result = await post(`/api/blogs/updateBlog/${selectedBlog.blog_id}`, data)

        console.log(result)

        if (result.status === 200) {
            alert(`blog updated sucessfully`)
            hideEdit()
        } else {
            alert(result.data.message)
        }

    }

    async function handleDelete() {


        const result = await post(`/api/blogs/deleteBlog/${selectedBlog.blog_id}`)

        console.log(result)

        if (result.status === 200) {
            alert(`blog deleted sucessfully`)
            hideEdit()
        } else {
            alert(result.data.message)
        }

    }

    function handleCancel() {
        hideEdit()
    }


    return (
        <Modal show={showEdit} onHide={hideEdit}>
            <Modal.Header closeButton>
                <Modal.Title>{selectedBlog.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center"> */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                    <h2 className="text-lg font-bold mb-4">Edit Blog Post</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full"
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
                            Content
                        </label>
                        <textarea
                            className="border border-gray-400 p-2 w-full"
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="imageUrl">
                            Image URL
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full"
                            type="text"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="link">
                            Link
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full"
                            type="text"
                            id="link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                </div>
                {/* </div> */}
            </Modal.Body>
            <Modal.Footer>
                <div className="flex justify-end">
                    <button
                        className="bg-blue-500 text-white font-bold rounded-md p-2 mr-2"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    <button
                        className="bg-red-500 text-white font-bold rounded-md p-2 mr-2"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                    <button
                        className="bg-gray-500 text-white font-bold rounded-md p-2"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}
