function RowFilter({setFilterStatus}) {

    const returnStatus = (e) => {
        e.preventDefault();
        e.target.className = 'active';
        setFilterStatus(e.target.dataset.value)
    }

    return (
        <ul>
		    <li><a onClick={(e) => {returnStatus(e)}} data-value="all" data-role="left-status" className="active">Все вместе</a></li>
		    <li><a onClick={(e) => {returnStatus(e)}} data-value="new" data-role="left-status">Новые<div className="badge" id="badge-new">12</div></a></li>
		    <li><a onClick={(e) => {returnStatus(e)}} data-value="work" data-role="left-status">В работе</a></li>
		    <li><a onClick={(e) => {returnStatus(e)}} data-value="complete" data-role="left-status">Завершенные</a></li>
		</ul>
    );
}

export default RowFilter;