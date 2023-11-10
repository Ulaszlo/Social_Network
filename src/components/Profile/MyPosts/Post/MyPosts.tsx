import s from './MyPosts.module.css'
import {Post} from "./Post";
import React, {useState} from "react";
import {useFormik} from "formik";
import {Button, TextField} from "@mui/material";
import {MyPostType} from "./MyPostsContainer";
import {PostType} from "../../../../redux/Reducers/profile-reducer";



export const MyPosts = React.memo((props: MyPostType & PostType ) => {
    const myPostFormik = useFormik({
        initialValues: {
            newPost: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2))

            props.addPost(values.newPost)
            // console.log(values.newPost)
        },
    });
    // @ts-ignore
    let postsElement= props.posts.map(((p: { message: string; likeCount: number; }) => <Post userPhoto={props.profile.photos.small} message={p.message} likeCount={p.likeCount}/>))
    return (
        <div className={s.postBlock}>


            <div className={s.r}> <form  onSubmit={myPostFormik.handleSubmit}>
                <TextField
                    label="Новый пост"
                    margin="normal"
                    multiline
                    maxRows={4}
                    placeholder="Что у вас нового?"
                            id="newPost"
                            name="newPost"
                            type="text"
                            onChange={myPostFormik.handleChange}
                            value={myPostFormik.values.newPost}
                />
                <div className={s.addPostButton}> <Button  variant="text" type='submit'>Add Post</Button> </div>
                <div className={s.posts}>{postsElement}</div>
            </form>
            </div>

        </div>

    );})


// let newPostElement = React.createRef();
//
// let addPostButton = () =>
//     {
//     props.addPostButton()
//
// }
// let newValueOnChange = (CurrentText: any) => {
//     // @ts-ignore
//     let text = newPostElement.current.value
//     props.updateNewPostText(text)
// }
// let postsElement = props.posts.map(((p: { message: any; likeCount: any; }) => <Post message={p.message}
//                                                                                     likeCount={p.likeCount}/>))
//
// return (
//
//     <div>
//
//
//         <div>
//
//             <div className={s.postBlock}>
//                 <text className={s.postsTitle}>Что у вас нового?</text>
//                 <div>
//                     <div><textarea onChange={newValueOnChange} ref={newPostElement} value={props.newPostText}/>
//                     </div>
//                     <div>
//                         <button onClick={addPostButton}>add Post</button>
//                     </div>
//                 </div>
//             </div>
//             <div className={s.posts}>{postsElement}</div>
//         </div>
//     </div>
//
// );
// }

