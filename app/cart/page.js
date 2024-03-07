import {count, name} from "./data.ts"
import hello from "./data2.ts"

export default function Cart() {
  let cart = ["Tomato","Pasta"];

  return (
    <div>
      <h4 className="title">Cart: {hello}</h4>
      <CartItem cart={cart[0]}></CartItem>
      <CartItem cart={cart[1]}></CartItem>
      <Banner content="롯데카드"></Banner>
      <Banner content="삼성카드"></Banner>
      <Btn color="red"></Btn>
      <Btn color="blue"></Btn>
    </div>
  )
} 

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>상품명: {props.cart}</p>
      <p>$40</p>
      <p>{count}개</p>
    </div>
  )
}

function Banner(props){
  return(
    <h5>{props.content} 결제 행사중</h5>
  )
}

function Btn(props){
  return <button style={{ background : `${props.color}` }}>버튼임</button>
}
