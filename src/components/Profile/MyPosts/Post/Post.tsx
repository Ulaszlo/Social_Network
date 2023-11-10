import React, { useState} from 'react';
import s from './Post.module.css'
import likeIcon from '../../../../assets/imges/likeIcon.png'
import redLikeIcon from '../../../../assets/imges/redLikeIcon.png'
import userAvatar from "../../../../assets/imges/user-images.png"
type PostType={
    userPhoto:string
    message:string
    likeCount:number
}
export const Post = (props: PostType) => {
    const [variantLikesIcon, setVariantLikesIcon] = useState(true)

    let initialLikeState = props.likeCount
    let [like, setLike] = useState(initialLikeState)

    let kkk = () => {
        setVariantLikesIcon(!variantLikesIcon)
        variantLikesIcon ? setLike(like+1) : setLike(like-1)
    }
    return (
        <div className={s.item}>
            <img className={s.itemImg} src={props.userPhoto || userAvatar}/>
            <div> {props.message}</div>

            <div>
                <span className={s.likeBlock}> {variantLikesIcon ?
                    <img onClick={kkk} className={s.like} src={likeIcon}/> :
                    <img onClick={kkk} className={s.like} src={redLikeIcon}/>} </span> {like}
            </div>
        </div>
    );
};

