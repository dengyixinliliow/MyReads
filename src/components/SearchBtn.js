import React from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBtn() {
  const navigate = useNavigate();

  return (
    <div className="open-search">
      <a onClick={() => navigate("/search")}>Add a Book</a>
    </div>
  )
}

export default SearchBtn