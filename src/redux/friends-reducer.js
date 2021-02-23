import { usersAPI } from "../api/api";
import { updateArray } from "../utils/object-helpers";

const FOLLOW = "friends/FOLLOW";
const UNFOLLOW = "friends/UNFOLLOW";
const SET_USERS = "friends/SET_USERS";
const SET_CURRENT_PAGE = "friends/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "friends/SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "friends/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "friends/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateArray(state.users, action.userId, "id", {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateArray(state.users, action.userId, "id", {followed: false})
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingInProgress: action.isFollowingInProgress
          ? [...state.isFollowingInProgress, action.userId]
          : state.isFollowingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (isFollowingInProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFollowingInProgress,
  userId,
});

export const getUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  let data = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFunction = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
}

export const follow = (userId) => (dispatch) => {
  followUnfollowFunction(dispatch, userId, usersAPI.follow, followSuccess);
};

export const unfollow = (userId) => (dispatch) => {
  followUnfollowFunction(dispatch, userId, usersAPI.unfollow, unfollowSuccess);  
};

export default usersReducer;