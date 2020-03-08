import React, { useState, useEffect } from 'react'

function App(props) {
  const [total, setTotal] = useState(0)
  const [load, setLoad] = useState(false)

  // 載入資料
  async function fetchMyAPI() {
    const req = new Request(' http://localhost:5555/items/1', {
      method: 'GET',
    })
    const res = await fetch(req)
    const data = await res.json()
    await setTotal(data.total)
    await setLoad(true)
  }
  // 資料傳送完之後，避免會有初始值轉變的畫面，使用setTimeout延遲顯示
  useEffect(() => {
    setTimeout(() => {
      fetchMyAPI()
    }, 1000)
  }, [])

  // 更改資料
  async function updateTotalServer(value) {
    let newTotal = { total: total + value }
    // 如果只有改一部分資料的話需使用PATCH 如果是全部資料的話使用PUT
    const req = new Request(' http://localhost:5555/items/1', {
      method: 'PATCH',
      body: JSON.stringify(newTotal),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const res = await fetch(req)
    const data = await res.json()
    await setTotal(total + value)
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
          updateTotalServer(1)
        }}
      >
        +1
      </button>
      <h1>{total}</h1>
      <button
        onClick={() => {
          updateTotalServer(-1)
        }}
      >
        -1
      </button>
    </>
  )

  return <>{load ? loadingOK : loading}</>
}

export default App
