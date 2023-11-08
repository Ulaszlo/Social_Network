import {AddPostActionCreator, profileReducer} from "./profile-reducer";

it('length of posts should be incremented ', () => {
//1. test data
    let action = AddPostActionCreator("gggg")
    let state = {
        posts: [
            {
                message: 'Надо иметь в голове чёткую картину того, чего хочешь достичь, и стремиться к этой цели каждый день',
                likeCount: 21
            },
            {message: 'Всем привет! это мой первый пост.)))))', likeCount: 11},
        ],
    }
    // @ts-ignore
    let NewState = profileReducer(state, action)
    // @ts-ignore
    expect(NewState.posts.length).toBe(3)
});