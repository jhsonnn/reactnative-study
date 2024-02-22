import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import axiosInstance from '../api/axios';

const MovieDetails = ({isModalVisible, movie, closeModal}) => {

  if(!isModalVisible) return null;

  const [details, setDetails] = useState(null);

  const type =
    movie.media_type === 'movie' || movie.media_type? 'tv' : 'movie';

  const movieDetailsPath = `/${type}/${movie.id}?append_to_response=credits`;
 
  console.log('@@@@', details);
  //상세한 movie 정보데이터 가져오기
  useEffect(()=>{
    async function fetchDetails(){
      const response = await axiosInstance.get(movieDetailsPath);
      setDetails(response.data);
    }
    fetchDetails();
  },[])

  return (
    <Text style={{color: 'white'}}>MovieDetails</Text>
  )
}

export default MovieDetails
