import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchUserAsync, incrementAsync } from './counterSlice';

const Test = () => {

    const dispatch = useAppDispatch();

    useEffect(()=>{
        const promise = dispatch(fetchUserAsync())

        //const promise = dispatch(incrementAsync(10))

        return()=>{
            // return 부분은 component가 unmount 될 때 실행되는 부분임
            // 즉, clearup 해주는 부분
            // promise 객체 안에 abort()를 실행하면 중단됨
            promise.abort();
        }
    },[])
 
  return (
    <div>
      Test
    </div>
  )
}

export default Test
