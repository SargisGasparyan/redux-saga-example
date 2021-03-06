import {takeEvery,put,call,fork,spawn} from "@redux-saga/core/effects"
import { GET_LATEST_NEWS,SET_POPULAR_NEWS_ERROR,SET_LATEST_NEWS_ERROR } from "../constants"
import { getLatestNews,getPopularNews } from "../../api"
import { setLatestNews ,setPopularNews} from "../actions/actionCreator"

export function* handleLatestNews(){
    try{
        const { hits } = yield call(getPopularNews)
        yield put(setLatestNews(hits))
    }catch{
        yield put({type:SET_POPULAR_NEWS_ERROR,payload:"Popular news error"})
    }
}

export function* handlePopularNews(){
    try{
        const { hits } = yield call(getLatestNews)
        yield put(setPopularNews(hits))
    }catch{
        yield put({type:SET_LATEST_NEWS_ERROR,payload:"Latest news error"})
        throw new Error('plpllplp')
    }
}

export function* workerSaga(){
    yield spawn(handleLatestNews)
    yield spawn(handlePopularNews)
}

export function* watchClickSaga(){ 
    yield takeEvery(GET_LATEST_NEWS,workerSaga)
}

export default function* rootSaga(){
    yield watchClickSaga()
}