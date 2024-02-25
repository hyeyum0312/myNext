export default function List() {
  let product = ["상의", "하의", "아우터", "신발", "가방"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((item) => {
        return (
          <div className="food">
            <h4>{item} 100$</h4>
          </div>
        );
      })}
    </div>
  );
}
