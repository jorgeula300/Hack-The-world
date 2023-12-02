import './Loading.css'

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner">
        {/*  */}
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default Loading
