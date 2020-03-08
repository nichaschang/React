import React, { useState, useEffect } from 'react'

function App(props) {
  const [total, setTotal] = useState(0)
  const [load, setLoad] = useState(false)

  // 載入資料
  async function getTotalFromLocalStorage() {
    // 判斷是否total的存在，如果沒有先給0
    let newTotal = localStorage.getItem('total') || 0
    localStorage.setItem('total', newTotal)
    setTotal(newTotal)
  }
  // 資料傳送完之後，避免會有初始值轉變的畫面，使用setTimeout延遲顯示
  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
      getTotalFromLocalStorage()
    }, 1000)
  }, [])

  // 更改資料
  async function updateTotalFromLocalStorage(value) {
    let newTotal = +total + value
    localStorage.setItem('total', newTotal)
    setTotal(newTotal)
  }
  // 用於判斷是否已經loading完資料
  const loading = (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
  const loadingOK = (
    <>
      <button
        onClick={() => {
          updateTotalFromLocalStorage(1)
        }}
      >
        +1
      </button>
      <h1>{total}</h1>
      <button
        onClick={() => {
          updateTotalFromLocalStorage(-1)
        }}
      >
        -1
      </button>
    </>
  )

  return <>{load ? loadingOK : loading}</>
}

export default App
