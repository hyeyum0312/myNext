import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  let name = "HYEYEON";
  return (
    <div>
      <h2 className="title">my Next</h2>
      <div className="desc">
        <p className="InnerText">
          학습 목표!
          <br />
          - Router
          <br />
          - list (CURD)
          <br />
          - Recoil
          <br />
          - Redux
          <br />
          - react-query
          <br />
          - CICD - 깃허브액션
          <br />
          - 리엑트 라이프 사이클 <br />
          - React
          <br />
          - NEXT.js
          <br />
        </p>
      </div>
      <p className="author">by {name}</p>
    </div>
  );
}
