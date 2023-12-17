import TableList from "./TableList";
import Filter from "./Filter";
import RowFilter from "./RowFilter";

function Table({setFilterProduct, filterProduct, setFilterStatus, filterStatus, data, isLoading, error}) {
	
	let filterData;
	
	if(filterProduct !== 'all') {
		filterData = data.filter((item) => item.course === filterProduct);
	}else {
		filterData = data;
	}
	
	if(filterStatus !== 'all') {
		filterData = filterData.filter((item) => item.status === filterStatus);
	}


    return (
        <div>
		    <div className="left-panel blue-skin">
		    	<div className="left-panel__logo">
		    		<div className="left-panel__logo-title">CRM заявки</div>
		    		<div className="left-panel__logo-subtitle">учебный проект webcademy</div>
		    	</div>
		    	
		    	<div className="left-panel__user clearfix">
		    		<div className="left-panel__user-photo">
		    			<img src="img/avatars/avatar-128.jpg" alt="Avatar" />
		    		</div>
		    		<div className="left-panel__user-name">Петр <br />Васильевич</div>
		    	</div>
		    
		    	<div className="left-panel__navigation">
		    		<div className="left-panel__navigation-title">Заявки</div>
		    		<RowFilter setFilterStatus={setFilterStatus}/>
		    	</div>
	
		    </div>
	
		    <div className="main-wrapper">
		    	<div className="container-fluid">
		    		<div className="admin-heading-1">Все заявки</div>

		    		<Filter setFilterProduct={setFilterProduct} setFilterStatus={setFilterStatus}/>

					{error && <h1>error to fetch</h1>}
					{isLoading && <h1>Loading...</h1>}
					{data && <TableList data={filterData}/>}
		    		

		    	</div>
		    </div>
        </div>
    );
}

export default Table;