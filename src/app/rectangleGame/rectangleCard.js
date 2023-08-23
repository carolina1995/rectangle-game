const RectangleCard = ({setOpenModal, cardDetails}) => {
    return (
        <div className="card">
            <h2 className="card-title divider">Details</h2>
            <div className="card-item  divider">{cardDetails.name || "--"} </div>
            <div className="card-item divider">Mouse X - {cardDetails.x}</div>
            <div className="card-item  divider">Mouse Y - {cardDetails.y}</div>
            <button onClick={() => {setOpenModal(true)}} className="add-shape"> + Add a Shape</button>
        </div>
    )
}

export default RectangleCard