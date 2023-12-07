function Book(props) {
    const{title, img, desc,authors} = props

  return (
    <div>
        <div className='title'>{title}</div>
        <div className='content'>
          <img src={img} alt="" />
          <div className="desc">{desc}</div>
        </div>
        <div className='authors-list'>{authors.map((item,index) => (<div className='author' key={index}>{item}</div>))}</div>
        <hr />
    </div>
  )
}

export default Book