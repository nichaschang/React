import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function Cart(props) {
  // 存放產品
  const [mycart, setMycart] = useState([])
  // 用來篩選是否有相同產品使用
  const [mycartDisplay, setMycartDisplay] = useState([])
  // for loading
  const [load, setLoad] = useState(false)

  // build ShopCart
  async function getCartFromlocalStorage() {
    // open Load
    setLoad(true)
    // 確認是否有ShopCart
    const newCart = localStorage.getItem('cart') || []

    // 丟回要使用JS格式 利用parse轉回JS格式，變為陣列
    setMycart(JSON.parse(newCart))
  }
  // 如果購物車有變動則重新執行 getCartFromlocalStorage()
  useEffect(() => {
    getCartFromlocalStorage()
  }, [])

  useEffect(() => {
    // 每次重新載入時，會先close Load
    setTimeout(() => {
      setLoad(false)
    }, 500)
    // 篩選產品是否有相同使用
    let newMycartDisplay = []

    for (let i = 0; i < mycart.length; i++) {
      // 透過newmycartDisplay來檢查是否品項有重複
      // 使用findIndex來確認是否存在，不存在則回傳-1，存在則回傳index值
      const index = newMycartDisplay.findIndex(
        value => value.id === mycart[i].id
      )
      if (index !== -1) {
        // 產品已存在的話，則數量+1
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        // 產品不存在的話，展開mycart[i]的內容
        const newItem = { ...mycart[i] }
        // 新增至 newMycartDisplay
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }
    // 刷新購物車內容(螢幕顯示的購物車)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 計算所有產品總額
  const sum = items => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }
  // display for load
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  // display for load OK
  const display = (
    <>
      <br />
      <br />
      <ul className="list-group">
        {mycartDisplay.map((value, index) => {
          return (
            <li className="list-group-item" key={value.id}>
              產品：{value.name}/數量：{value.amount}/單價：{value.price}/
              {'   '}
              小計：{value.amount * value.price}
            </li>
          )
        })}
      </ul>
      <h3>總價：{sum(mycartDisplay)}</h3>
    </>
  )
  return (
    <>
      <div className="container">{load ? loading : display}</div>
    </>
  )
}

export default withRouter(Cart)
