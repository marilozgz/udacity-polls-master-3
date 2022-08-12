import { createSelector } from "@reduxjs/toolkit";
export const getAuthedUserId = ({authedUser}) => authedUser.authedUser

export const getUsers = ({users}) => users.users;
export const getauthedUserInfo = createSelector(getUsers,getAuthedUserId , (users,id) => {
    return users[id]
});

export const  hasDonePoll = (pollId) => createSelector(getauthedUserInfo, (userdata) => {
    return userdata?.answers[pollId] !== undefined
})