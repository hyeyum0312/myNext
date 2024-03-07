'use client'

import Image from "next/image";
import { useState } from "react";

export default function List() {
  let product = ["상의", "하의", "아우터"];
  let [number, setNumber] = useState([0,0,0]);

  
  return (
    <div>
      <h4 className="title">상품목록</h4>

      {product.map((item,i) => {
        return (
          <div className="food" key={i}>
            <Image className="foodImg" src={`/food${i}.png`} width="50" height="50"></Image>

            {/* 
            <Image src="https://s3.amazonaws.com/my-bucket/profile.png" /> 
            // 다른 사이트에 올려둔 이미지를 Image의 절대경로로 넣고싶다면 width와 height옵션을 넣어줘야합니다.
            */}
            
            <h4>{item} 100$</h4>
            <span>수량: {number[i]}</span>

            <button onClick={()=>{
              let copy = [...number];
              copy[i]++; 
              setNumber(copy)
            }}>+</button>

            <button onClick={()=>{
              let copy = [...number];
              copy[i]--; 
              setNumber(copy)
            }}>-</button>
          </div>
        );
      })}
    </div>
  );
}
